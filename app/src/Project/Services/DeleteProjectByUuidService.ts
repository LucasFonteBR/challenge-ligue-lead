import { ProjectDto } from '../Dtos/ProjectDto';
import { IProjectStorage } from '../Repositories/IProjectStorage';

export class DeleteProjectByUuidService {
  constructor(private readonly storage: IProjectStorage) {}

  public async invoke(dto: ProjectDto): Promise<void> {
    await this.storage.delete(dto.uuid);
  }
}
