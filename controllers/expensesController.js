import * as models from '../models/expensesModel.js';

export function getAllExpenses(req,res){
    models.getAllExpenses()
    .then( result => res.json(result))
}

export function createExpense(req,res){
    models.insertExpense(req.body)
    .then( result => res.json(result))
}