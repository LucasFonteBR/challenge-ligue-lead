import { PaginationResponse } from '../../Api/Responses/PaginationResponse';
import { ProjectResponse } from './ProjectResponse';

export interface ListProjectResponse {
  pagination: PaginationResponse;
  items: ProjectResponse[];
}
