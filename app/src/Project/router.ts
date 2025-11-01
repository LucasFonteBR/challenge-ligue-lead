import express, { NextFunction, Request, Response } from 'express';
import { createProjectController, deleteProjectByUuidController, getProjectByUuidController, listProjectController, updateProjectByUuidController } from '.';

const projectRouter = express.Router();

projectRouter.post('/v1/projects', (req: Request, res: Response, next: NextFunction) => {
  return createProjectController.handle(req, res, next);
});

projectRouter.get('/v1/projects', (req: Request, res: Response, next: NextFunction) => {
  return listProjectController.handle(req, res, next);
});

projectRouter.get('/v1/projects/:uuid', (req: Request, res: Response, next: NextFunction) => {
  return getProjectByUuidController.handle(req, res, next);
});

projectRouter.delete('/v1/projects/:uuid', (req: Request, res: Response, next: NextFunction) => {
  return deleteProjectByUuidController.handle(req, res, next);
});

projectRouter.put('/v1/projects/:uuid', (req: Request, res: Response, next: NextFunction) => {
  return updateProjectByUuidController.handle(req, res, next);
});

export { projectRouter };
