import { IDatabaseTransformer } from '../../Api/Transformers/IDatabaseTransformer';
import { ProjectDto } from '../Dtos/ProjectDto';
import { ProjectEntity } from '../Repositories/Entities/ProjectEntity';
import { IProjectStorage } from '../Repositories/IProjectStorage';

export class CreateProjectService {
  constructor(
    private readonly transformer: IDatabaseTransformer<ProjectDto, ProjectEntity>,
    private readonly storage: IProjectStorage,
  ) {}

  public async invoke(dto: ProjectDto): Promise<ProjectDto> {
    let entity = <ProjectEntity>await this.transformer.toEntity(dto);

    entity = await this.storage.save(entity);

    return <ProjectDto>await this.transformer.toDto(entity, dto);
  }
}
