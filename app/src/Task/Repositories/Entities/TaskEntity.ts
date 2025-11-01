import { TaskStatusEnum } from '../../Enums/TaskStatusEnum';

export interface TaskEntity {
  uuid: string;
  title: string;
  status: TaskStatusEnum;
  description: string;
  projectUuid: string;
  createdAt?: Date;
  updatedAt?: Date;
}
