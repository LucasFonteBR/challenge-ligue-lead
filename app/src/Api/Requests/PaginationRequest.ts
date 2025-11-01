import { Expose } from 'class-transformer';
import { IsNotEmpty, IsNumberString } from 'class-validator';

export class PaginationRequest {
  @IsNumberString()
  @IsNotEmpty()
  @Expose()
  public page: string;

  @IsNumberString()
  @IsNotEmpty()
  @Expose()
  public pageSize: string;
}
