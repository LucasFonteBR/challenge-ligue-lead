import express, { Request, Response, NextFunction } from 'express';
import { createProjectController, getProjectByUuidController } from '.';

const projectRouter = express.Router();

projectRouter.post('/v1/project', (req: Request, res: Response, next: NextFunction) => {
  return createProjectController.handle(req, res, next);
});

projectRouter.get('/v1/project/:uuid', (req: Request, res: Response, next: NextFunction) => {
  return getProjectByUuidController.handle(req, res, next);
});

export { projectRouter };
