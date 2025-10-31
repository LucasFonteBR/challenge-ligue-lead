import { IApiTransformer } from '../../Api/Transformers/IApiTransformer';
import { IDatabaseTransformer } from '../../Api/Transformers/IDatabaseTransformer';
import { ClassValidator } from '../../Api/Utils/ClassValidator';
import DateFormat from '../../Api/Utils/DateFormat';
import { ProjectDto } from '../Dtos/ProjectDto';
import { ProjectEntity } from '../Repositories/Entities/ProjectEntity';
import { UpdateProjectByUuidRequest } from '../Requests/UpdateProjectByUuidRequest';
import { ProjectResponse } from '../Responses/ProjectResponse';

export class UpdateProjectByUuidTransformer implements IApiTransformer<ProjectDto, ProjectResponse>, IDatabaseTransformer<ProjectDto, ProjectEntity> {
  public async fromApi(object: any, headers?: any): Promise<ProjectDto> {
    const requestObject = await ClassValidator.transformerToModel(UpdateProjectByUuidRequest, object);
    await ClassValidator.validateInput(requestObject);

    return {
      uuid: requestObject.uuid,
      name: requestObject?.name || null,
      description: requestObject?.description || null,
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
    return {
      uuid: dto.uuid,
      name: dto.name !== null ? dto.name : entity.name,
      description: dto.description !== null ? dto.description : entity.description,
    };
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
