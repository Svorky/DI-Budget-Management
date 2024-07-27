import express from "express";
import { getAllIncomes } from '../models/incomeModel.js';
import { getAllExpenses } from '../models/expensesModel.js';
export const pagesRouter = express.Router();


pagesRouter.get('/',  async (req,res) => {
    let expenses = await getAllExpenses()
    let incomes = await getAllIncomes()
    let transactions = [...expenses, ...incomes]
    transactions.sort((a,b) => b.date - a.date)
    res.render('index',{
        transactions
    })
})