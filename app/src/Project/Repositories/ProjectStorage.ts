import { BaseSequelizeStorage } from '../../Api/Repositories/BaseSequelizeStorage';
import { ProjectEntity } from './Entities/ProjectEntity';
import { IProjectStorage } from './IProjectStorage';
import { ProjectModel } from './Models/ProjectModel';

export class ProjectStorage extends BaseSequelizeStorage<ProjectModel, ProjectEntity> implements IProjectStorage {
  constructor() {
    super(ProjectModel);
  }
}
