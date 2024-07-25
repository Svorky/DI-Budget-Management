import express from "express";
import * as controller from '../controllers/incomeController.js';
export const incomeRouter = express.Router();

incomeRouter.get('/', controller.getAllIncomes)
incomeRouter.post('/', controller.createIncome)