import { IApiTransformer } from '../../Api/Transformers/IApiTransformer';
import { IDatabaseTransformer } from '../../Api/Transformers/IDatabaseTransformer';
import { ClassValidator } from '../../Api/Utils/ClassValidator';
import DateFormat from '../../Api/Utils/DateFormat';
import { ProjectDto } from '../Dtos/ProjectDto';
import { ProjectEntity } from '../Repositories/Entities/ProjectEntity';
import { GetProjectByUuidRequest } from '../Requests/GetProjectByUuidRequest';
import { ProjectResponse } from '../Responses/ProjectResponse';

export class GetProjectByUuidTransformer implements IApiTransformer<ProjectDto, ProjectResponse>, IDatabaseTransformer<ProjectDto, ProjectEntity> {
  public async fromApi(object: any, headers?: any): Promise<ProjectDto> {
    const requestObject = await ClassValidator.transformerToModel(GetProjectByUuidRequest, object);
    await ClassValidator.validateInput(requestObject);

    return {
      uuid: requestObject.uuid,
      name: undefined,
      description: undefined,
    };
  }

  public async toApi(dto: ProjectDto): Promise<ProjectResponse> {
    return {
      uuid: dto.uuid,
      name: dto.name,
      description: dto.description,
      createdAt: dto.createdAt,
      updatedAt: dto.updatedAt,
    };
  }

  public async toEntity(dto: ProjectDto, entity?: ProjectEntity): Promise<ProjectEntity> {
    throw new Error('Method not implemented.');
  }

  public async toDto(entity: ProjectEntity, dto?: ProjectDto): Promise<ProjectDto> {
    return {
      uuid: entity.uuid,
      name: entity.name,
      description: entity.description,
      createdAt: DateFormat.dateTimeToStr(entity.createdAt),
      updatedAt: DateFormat.dateTimeToStr(entity.updatedAt),
    };
  }
}
