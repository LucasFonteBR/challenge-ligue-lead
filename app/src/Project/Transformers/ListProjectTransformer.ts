import { IApiTransformer } from '../../Api/Transformers/IApiTransformer';
import { IDatabaseTransformer } from '../../Api/Transformers/IDatabaseTransformer';
import { ClassValidator } from '../../Api/Utils/ClassValidator';
import DateFormat from '../../Api/Utils/DateFormat';
import { ListProjectDto } from '../Dtos/ListProjectDto';
import { ProjectDto } from '../Dtos/ProjectDto';
import { ProjectEntity } from '../Repositories/Entities/ProjectEntity';
import { ListProjectRequest } from '../Requests/ListProjectRequest';
import { ListProjectResponse } from '../Responses/ListProjectResponse';
import { ProjectResponse } from '../Responses/ProjectResponse';

export class ListProjectTransformer implements IApiTransformer<ListProjectDto, ListProjectResponse>, IDatabaseTransformer<ListProjectDto, ProjectEntity[]> {
  public async fromApi(object: any, headers?: any): Promise<ListProjectDto> {
    const requestObject = await ClassValidator.transformerToModel(ListProjectRequest, object);
    await ClassValidator.validateInput(requestObject);

    return {
      pagination: {
        page: Number(requestObject.page),
        pageSize: Number(requestObject.pageSize),
        total: undefined,
      },
      items: [],
    };
  }

  public async toApi(dto: ListProjectDto): Promise<ListProjectResponse> {
    return {
      pagination: dto.pagination,
      items: dto.items.map((item: ProjectDto) => {
        return <ProjectResponse>{
          uuid: item.uuid,
          name: item.name,
          description: item.description,
          createdAt: item.createdAt,
          updatedAt: item.updatedAt,
        };
      }),
    };
  }

  public async toEntity(dto: ListProjectDto, entity?: ProjectEntity[]): Promise<ProjectEntity[]> {
    throw new Error('Method not implemented.');
  }

  public async toDto(entity: ProjectEntity[], dto?: ListProjectDto): Promise<ListProjectDto> {
    return {
      pagination: dto.pagination,
      items: entity.map((item: ProjectEntity) => {
        return <ProjectDto>{
          uuid: item.uuid,
          name: item.name,
          description: item.description,
          createdAt: DateFormat.dateTimeToStr(item.createdAt),
          updatedAt: DateFormat.dateTimeToStr(item.updatedAt),
        };
      }),
    };
  }
}
