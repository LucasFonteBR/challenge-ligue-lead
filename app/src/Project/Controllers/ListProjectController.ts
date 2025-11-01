import { Request, Response, NextFunction } from 'express';
import { IApiTransformer } from '../../Api/Transformers/IApiTransformer';
import { ListProjectDto } from '../Dtos/ListProjectDto';
import { ListProjectResponse } from '../Responses/ListProjectResponse';
import { ListProjectService } from '../Services/ListProjectService';

export class ListProjectController {
  constructor(
    private readonly transformer: IApiTransformer<ListProjectDto, ListProjectResponse>,
    private readonly service: ListProjectService,
  ) {}

  public async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      let dto = <ListProjectDto>await this.transformer.fromApi(req.query);

      dto = await this.service.invoke(dto);

      const response = await this.transformer.toApi(dto);

      return res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }
}
