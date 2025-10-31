import { ResourceNotFoundException } from '../../Api/Exceptions/ResourceNotFoundException';
import { IDatabaseTransformer } from '../../Api/Transformers/IDatabaseTransformer';
import { ProjectDto } from '../Dtos/ProjectDto';
import { ProjectEntity } from '../Repositories/Entities/ProjectEntity';
import { IProjectStorage } from '../Repositories/IProjectStorage';

export class UpdateProjectByUuidService {
  constructor(
    private readonly transformer: IDatabaseTransformer<ProjectDto, ProjectEntity>,
    private readonly storage: IProjectStorage,
  ) {}

  public async invoke(dto: ProjectDto): Promise<ProjectDto> {
    const entity = <ProjectEntity>await this.storage.findByUuid(dto.uuid);

    if (!entity) {
      throw new ResourceNotFoundException();
    }

    let updatedEntity = <ProjectEntity>await this.transformer.toEntity(dto, entity);

    updatedEntity = await this.storage.update(updatedEntity);

    return <ProjectDto>await this.transformer.toDto(updatedEntity, dto);
  }
}
