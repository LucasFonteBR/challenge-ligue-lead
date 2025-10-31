import { CreateProjectController } from './Controllers/CreateProjectController';
import { DeleteProjectByUuidController } from './Controllers/DeleteProjectByUuidController';
import { GetProjectByUuidController } from './Controllers/GetProjectByUuidController';
import { UpdateProjectByUuidController } from './Controllers/UpdateProjectByUuidController';
import { ProjectStorage } from './Repositories/ProjectStorage';
import { CreateProjectService } from './Services/CreateProjectService';
import { DeleteProjectByUuidService } from './Services/DeleteProjectByUuidService';
import { GetProjectByUuidService } from './Services/GetProjectByUuidService';
import { UpdateProjectByUuidService } from './Services/UpdateProjectByUuidService';
import { CreateProjectTransformer } from './Transformers/CreateProjectTransformer';
import { DeleteProjectByUuidTransformer } from './Transformers/DeleteProjectByUuidTransformer';
import { GetProjectByUuidTransformer } from './Transformers/GetProjectByUuidTransformer';
import { UpdateProjectByUuidTransformer } from './Transformers/UpdateProjectByUuidTransformer';

const storage = new ProjectStorage();

// CREATE PROJECT INSTANCES
const createProjectTransformer = new CreateProjectTransformer();
const createProjectService = new CreateProjectService(createProjectTransformer, storage);
export const createProjectController = new CreateProjectController(createProjectTransformer, createProjectService);

// GET PROJECT BY UUID INSTANCES
const getProjectByUuidTransformer = new GetProjectByUuidTransformer();
const getProjectByUuidService = new GetProjectByUuidService(getProjectByUuidTransformer, storage);
export const getProjectByUuidController = new GetProjectByUuidController(getProjectByUuidTransformer, getProjectByUuidService);

// DELETE PROJECT BY UUID INSTANCES
const deleteProjectByUuidTransformer = new DeleteProjectByUuidTransformer();
const deleteProjectByUuidService = new DeleteProjectByUuidService(storage);
export const deleteProjectByUuidController = new DeleteProjectByUuidController(deleteProjectByUuidTransformer, deleteProjectByUuidService);

// UPDATE PROJECT BY UUID INSTANCES
const updateProjectByUuidTransformer = new UpdateProjectByUuidTransformer();
const updateProjectByUuidService = new UpdateProjectByUuidService(updateProjectByUuidTransformer, storage);
export const updateProjectByUuidController = new UpdateProjectByUuidController(updateProjectByUuidTransformer, updateProjectByUuidService);
