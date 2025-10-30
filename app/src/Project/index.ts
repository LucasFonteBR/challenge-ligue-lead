import { CreateProjectController } from './Controllers/CreateProjectController';
import { GetProjectByUuidController } from './Controllers/GetProjectByUuidController';
import { ProjectStorage } from './Repositories/ProjectStorage';
import { CreateProjectService } from './Services/CreateProjectService';
import { GetProjectByUuidService } from './Services/GetProjectByUuidService';
import { CreateProjectTransformer } from './Transformers/CreateProjectTransformer';
import { GetProjectByUuidTransformer } from './Transformers/GetProjectByUuidTransformer';

const storage = new ProjectStorage();

// CREATE PROJECT EXPORTS
const createProjectTransformer = new CreateProjectTransformer();
const createProjectService = new CreateProjectService(createProjectTransformer, storage);
export const createProjectController = new CreateProjectController(createProjectTransformer, createProjectService);

// GET PROJECT BY UUID EXPORTS
const getProjectByUuidTransformer = new GetProjectByUuidTransformer();
const getProjectByUuidService = new GetProjectByUuidService(getProjectByUuidTransformer, storage);
export const getProjectByUuidController = new GetProjectByUuidController(getProjectByUuidTransformer, getProjectByUuidService);
