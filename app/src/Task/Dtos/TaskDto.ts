import { TaskStatusEnum } from '../Enums/TaskStatusEnum';

export interface TaskDto {
  uuid: string;
  title: string;
  status: TaskStatusEnum;
  description: string;
  projectUuid: string;
  createdAt?: string;
  updatedAt?: string;
}
