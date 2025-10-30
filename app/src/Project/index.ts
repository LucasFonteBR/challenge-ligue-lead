import { CreateProjectController } from './Controllers/CreateProjectController';
import { ProjectStorage } from './Repositories/ProjectStorage';
import { CreateProjectService } from './Services/CreateProjectService';
import { CreateProjectTransformer } from './Transformers/CreateProjectTransformer';

const storage = new ProjectStorage();

const createProjectTransformer = new CreateProjectTransformer();

const createProjectService = new CreateProjectService(createProjectTransformer, storage);

export const createProjectController = new CreateProjectController(createProjectTransformer, createProjectService);
