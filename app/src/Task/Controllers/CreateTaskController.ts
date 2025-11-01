import { Request, Response, NextFunction } from 'express';
import { IApiTransformer } from '../../Api/Transformers/IApiTransformer';
import { TaskDto } from '../Dtos/TaskDto';
import { TaskResponse } from '../Responses/TaskResponse';
import { CreateTaskService } from '../Services/CreateTaskService';

export class CreateTaskController {
  constructor(
    private readonly transformer: IApiTransformer<TaskDto, TaskResponse>,
    private readonly service: CreateTaskService,
  ) {}

  public async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      let dto = <TaskDto>await this.transformer.fromApi({ ...req.body, ...req.params });

      dto = await this.service.invoke(dto);

      const response = await this.transformer.toApi(dto);

      return res.status(201).json(response);
    } catch (error) {
      next(error);
    }
  }
}
