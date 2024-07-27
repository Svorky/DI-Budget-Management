import express from "express";
import * as controller from '../controllers/recordsController.js';
export const recordsRouter = express.Router();

recordsRouter.get('/', controller.getAllRecords);
recordsRouter.get('/:id',controller.getRecordById)
recordsRouter.get('/', controller.getAllRecordsByType);
recordsRouter.post('/', controller.createRecord);
recordsRouter.delete('/:id',controller.deleteRecord)