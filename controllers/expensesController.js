import * as models from '../models/expensesModel.js';

export function getAllExpenses(req,res){
    models.getAllExpenses()
    .then( result => res.json(result))
}