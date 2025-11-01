import { ResourceNotFoundException } from '../../Api/Exceptions/ResourceNotFoundException';
import { IDatabaseTransformer } from '../../Api/Transformers/IDatabaseTransformer';
import { IProjectStorage } from '../../Project/Repositories/IProjectStorage';
import { TaskDto } from '../Dtos/TaskDto';
import { TaskEntity } from '../Repositories/Entities/TaskEntity';
import { ITaskStorage } from '../Repositories/ITaskStorage';

export class CreateTaskService {
  constructor(
    private readonly transformer: IDatabaseTransformer<TaskDto, TaskEntity>,
    private readonly taskStorage: ITaskStorage,
    private readonly projectStorage: IProjectStorage,
  ) {}

  public async invoke(dto: TaskDto): Promise<TaskDto> {
    console.log('ok');
    const projectEntity = await this.projectStorage.findByUuid(dto.projectUuid);

    if (!projectEntity) {
      throw new ResourceNotFoundException('Project not found');
    }

    let entity = <TaskEntity>await this.transformer.toEntity(dto);

    entity = await this.taskStorage.save(entity);

    return <TaskDto>await this.transformer.toDto(entity, dto);
  }
}
