import { Request, Response, NextFunction } from 'express';
import { IApiTransformer } from '../../Api/Transformers/IApiTransformer';
import { ProjectDto } from '../Dtos/ProjectDto';
import { ProjectResponse } from '../Responses/ProjectResponse';
import { GetProjectByUuidService } from '../Services/GetProjectByUuidService';

export class GetProjectByUuidController {
  constructor(
    private readonly transformer: IApiTransformer<ProjectDto, ProjectResponse>,
    private readonly service: GetProjectByUuidService,
  ) {}

  public async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      let dto = <ProjectDto>await this.transformer.fromApi(req.params);

      dto = await this.service.invoke(dto);

      const response = await this.transformer.toApi(dto);

      return res.status(201).json(response);
    } catch (error) {
      next(error);
    }
  }
}
