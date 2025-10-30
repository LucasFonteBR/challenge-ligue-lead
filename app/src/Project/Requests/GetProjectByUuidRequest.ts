import { Expose } from 'class-transformer';
import { IsNotEmpty, IsUUID } from 'class-validator';

export class GetProjectByUuidRequest {
  @IsUUID()
  @IsNotEmpty()
  @Expose()
  public uuid: string;
}
