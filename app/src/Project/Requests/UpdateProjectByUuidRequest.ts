import { Expose } from 'class-transformer';
import { IsUUID, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateProjectByUuidRequest {
  @IsUUID()
  @IsNotEmpty()
  @Expose()
  public uuid: string;

  @IsOptional()
  @Expose()
  public name: string;

  @IsOptional()
  @Expose()
  public description: string;
}
