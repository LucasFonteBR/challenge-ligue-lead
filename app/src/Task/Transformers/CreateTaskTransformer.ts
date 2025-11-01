import { IApiTransformer } from '../../Api/Transformers/IApiTransformer';
import { IDatabaseTransformer } from '../../Api/Transformers/IDatabaseTransformer';
import { ClassValidator } from '../../Api/Utils/ClassValidator';
import DateFormat from '../../Api/Utils/DateFormat';
import { TaskDto } from '../Dtos/TaskDto';
import { TaskEntity } from '../Repositories/Entities/TaskEntity';
import { CreateTaskRequest } from '../Requests/CreateTaskRequest';
import { TaskResponse } from '../Responses/TaskResponse';
import { v4 as uuidV4 } from 'uuid';

export class CreateTaskTransformer implements IApiTransformer<TaskDto, TaskResponse>, IDatabaseTransformer<TaskDto, TaskEntity> {
  public async fromApi(object: any, headers?: any): Promise<TaskDto> {
    console.log('entrei no transformer');
    const requestObject = await ClassValidator.transformerToModel(CreateTaskRequest, object);
    await ClassValidator.validateInput(requestObject);

    return {
      uuid: uuidV4(),
      title: requestObject.title,
      status: requestObject.status,
      description: requestObject.description,
      projectUuid: requestObject.projectUuid,
    };
  }

  public async toApi(dto: TaskDto): Promise<TaskResponse> {
    return {
      uuid: dto.uuid,
      title: dto.title,
      status: dto.status,
      description: dto.description,
      projectUuid: dto.projectUuid,
      createdAt: dto.createdAt,
      updatedAt: dto.updatedAt,
    };
  }

  public async toEntity(dto: TaskDto, entity?: TaskEntity): Promise<TaskEntity> {
    return {
      uuid: dto.uuid,
      title: dto.title,
      status: dto.status,
      description: dto.description,
      projectUuid: dto.projectUuid,
    };
  }

  public async toDto(entity: TaskEntity, dto?: TaskDto): Promise<TaskDto> {
    return {
      uuid: entity.uuid,
      title: entity.title,
      status: entity.status,
      description: entity.description,
      projectUuid: entity.projectUuid,
      createdAt: DateFormat.dateTimeToStr(entity.createdAt),
      updatedAt: DateFormat.dateTimeToStr(entity.updatedAt),
    };
  }
}
