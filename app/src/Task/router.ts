import express, { NextFunction, Request, Response } from 'express';
import { createTaskController } from '.';

const taskRouter = express.Router();

taskRouter.post('/v1/tasks/:projectUuid', (req: Request, res: Response, next: NextFunction) => {
  return createTaskController.handle(req, res, next);
});

export { taskRouter };
