import { CreateProjectController } from './Controllers/CreateProjectController';
import { DeleteProjectByUuidController } from './Controllers/DeleteProjectByUuidController';
import { GetProjectByUuidController } from './Controllers/GetProjectByUuidController';
import { ProjectStorage } from './Repositories/ProjectStorage';
import { CreateProjectService } from './Services/CreateProjectService';
import { DeleteProjectByUuidService } from './Services/DeleteProjectByUuidService';
import { GetProjectByUuidService } from './Services/GetProjectByUuidService';
import { CreateProjectTransformer } from './Transformers/CreateProjectTransformer';
import { DeleteProjectByUuidTransformer } from './Transformers/DeleteProjectByUuidTransformer';
import { GetProjectByUuidTransformer } from './Transformers/GetProjectByUuidTransformer';

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
