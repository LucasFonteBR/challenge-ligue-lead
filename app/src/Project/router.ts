import express, { Request, Response, NextFunction } from 'express';
import { createProjectController } from '.';

const projectRouter = express.Router();

projectRouter.post('/v1/project', (req: Request, res: Response, next: NextFunction) => {
  return createProjectController.handle(req, res, next);
});

export { projectRouter };
