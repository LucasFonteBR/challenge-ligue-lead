import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProjectRequest {
  @IsNotEmpty()
  @IsString()
  @Expose()
  public name: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  public description: string;
}
