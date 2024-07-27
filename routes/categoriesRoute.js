import express from "express";
import * as controller from '../controllers/categoriesController.js';
export const categoriesRouter = express.Router();

categoriesRouter.get('/', controller.getAllCategories)
categoriesRouter.post('/', controller.createCategory)
categoriesRouter.put('/', controller.updateCategory)
categoriesRouter.delete('/:id', controller.deleteCategory)