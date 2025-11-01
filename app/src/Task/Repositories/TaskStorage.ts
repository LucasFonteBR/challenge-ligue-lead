import { BaseSequelizeStorage } from '../../Api/Repositories/BaseSequelizeStorage';
import { TaskEntity } from './Entities/TaskEntity';
import { ITaskStorage } from './ITaskStorage';
import { TaskModel } from './Models/TaskModel';

export class TaskStorage extends BaseSequelizeStorage<TaskModel, TaskEntity> implements ITaskStorage {
  constructor() {
    super(TaskModel);
  }
}
