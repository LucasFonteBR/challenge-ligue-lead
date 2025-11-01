import { IDatabaseTransformer } from '../../Api/Transformers/IDatabaseTransformer';
import { ListProjectDto } from '../Dtos/ListProjectDto';
import { ProjectEntity } from '../Repositories/Entities/ProjectEntity';
import { IProjectStorage } from '../Repositories/IProjectStorage';

export class ListProjectService {
  constructor(
    private readonly transformer: IDatabaseTransformer<ListProjectDto, ProjectEntity[]>,
    private readonly storage: IProjectStorage,
  ) {}

  public async invoke(dto: ListProjectDto): Promise<ListProjectDto> {
    const { pagination } = dto;
    pagination.total = await this.storage.count();

    const entities = await this.storage.findAll(pagination.page, pagination.pageSize);

    return <ListProjectDto>await this.transformer.toDto(entities, dto);
  }
}
