import express from "express";
import { getAllIncomes } from '../models/incomeModel.js';
import { getAllExpenses } from '../models/expensesModel.js';
import { getAllRecords } from '../models/recordsModel.js';
import { getAllCategories } from '../models/categoryModel.js';
export const pagesRouter = express.Router();


pagesRouter.get('/',  async (req,res) => {
    let records = await getAllRecords()
    let categories = await getAllCategories()
    res.render('index',{
        records,
        categories
    })
})