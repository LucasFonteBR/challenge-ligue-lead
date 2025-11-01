import { PaginationDto } from '../../Api/Dtos/PaginationDto';
import { ProjectDto } from './ProjectDto';

export interface ListProjectDto {
  pagination: PaginationDto;
  items: ProjectDto[];
}
