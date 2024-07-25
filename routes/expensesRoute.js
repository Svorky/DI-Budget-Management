import express from "express";
import * as controller from '../controllers/expensesController.js';
export const expensesRouter = express.Router();

expensesRouter.get('/', controller.getAllExpenses)