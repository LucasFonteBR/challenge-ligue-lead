import { Expose } from 'class-transformer';
import { IsEnum, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { TaskStatusEnum } from '../Enums/TaskStatusEnum';

export class CreateTaskRequest {
  @IsString()
  @IsNotEmpty()
  @Expose()
  public title: string;

  @IsEnum(TaskStatusEnum, { message: `The value of status is not valid. Available options are: ${Object.values(TaskStatusEnum).join(', ')}` })
  @IsNotEmpty()
  @Expose()
  public status: TaskStatusEnum;

  @IsString()
  @IsNotEmpty()
  @Expose()
  public description: string;

  @IsUUID()
  @IsString()
  @IsNotEmpty()
  @Expose()
  public projectUuid: string;
}
