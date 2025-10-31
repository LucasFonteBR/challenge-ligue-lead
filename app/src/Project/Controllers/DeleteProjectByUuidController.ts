import { NextFunction, Request, Response } from 'express';
import { IApiTransformer } from '../../Api/Transformers/IApiTransformer';
import { ProjectDto } from '../Dtos/ProjectDto';
import { DeleteProjectByUuidService } from '../Services/DeleteProjectByUuidService';

export class DeleteProjectByUuidController {
  constructor(
    private readonly transformer: IApiTransformer<ProjectDto, void>,
    private readonly service: DeleteProjectByUuidService,
  ) {}

  public async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      const dto = <ProjectDto>await this.transformer.fromApi(req.params);

      await this.service.invoke(dto);

      return res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}
