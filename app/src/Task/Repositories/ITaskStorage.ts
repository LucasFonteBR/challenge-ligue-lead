import { IStorage } from '../../Api/Repositories/IStorage';
import { TaskEntity } from './Entities/TaskEntity';

export type ITaskStorage = IStorage<TaskEntity>;
