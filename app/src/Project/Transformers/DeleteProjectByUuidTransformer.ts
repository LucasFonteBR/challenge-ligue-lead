import { IApiTransformer } from '../../Api/Transformers/IApiTransformer';
import { ClassValidator } from '../../Api/Utils/ClassValidator';
import { ProjectDto } from '../Dtos/ProjectDto';
import { GetProjectByUuidRequest } from '../Requests/GetProjectByUuidRequest';

export class DeleteProjectByUuidTransformer implements IApiTransformer<ProjectDto, void> {
  public async fromApi(object: any, headers?: any): Promise<ProjectDto> {
    const requestObject = await ClassValidator.transformerToModel(GetProjectByUuidRequest, object);
    await ClassValidator.validateInput(requestObject);

    return {
      uuid: requestObject.uuid,
      name: undefined,
      description: undefined,
    };
  }

  public async toApi(dto: ProjectDto): Promise<void> {
    throw new Error('Method not implemented');
  }
}
