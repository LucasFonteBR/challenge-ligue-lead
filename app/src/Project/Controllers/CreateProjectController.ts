import { Request, Response, NextFunction } from 'express';
import { IApiTransformer } from '../../Api/Transformers/IApiTransformer';
import { ProjectDto } from '../Dtos/ProjectDto';
import { ProjectResponse } from '../Responses/ProjectResponse';
import { CreateProjectService } from '../Services/CreateProjectService';

export class CreateProjectController {
  constructor(
    private readonly transformer: IApiTransformer<ProjectDto, ProjectResponse>,
    private readonly service: CreateProjectService,
  ) {}

  public async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      let dto = <ProjectDto>await this.transformer.fromApi(req.body);

      dto = await this.service.invoke(dto);

      const response = await this.transformer.toApi(dto);

      return res.status(201).json(response);
    } catch (error) {
      next(error);
    }
  }
}
