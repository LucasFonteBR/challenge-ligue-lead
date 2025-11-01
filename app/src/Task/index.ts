import { ProjectStorage } from '../Project/Repositories/ProjectStorage';
import { CreateTaskController } from './Controllers/CreateTaskController';
import { TaskStorage } from './Repositories/TaskStorage';
import { CreateTaskService } from './Services/CreateTaskService';
import { CreateTaskTransformer } from './Transformers/CreateTaskTransformer';

const taskStorage = new TaskStorage();
const projectStorage = new ProjectStorage();

// CREATE TASK INSTANCES
const createTaskTransformer = new CreateTaskTransformer();
const createTaskService = new CreateTaskService(createTaskTransformer, taskStorage, projectStorage);
export const createTaskController = new CreateTaskController(createTaskTransformer, createTaskService);
