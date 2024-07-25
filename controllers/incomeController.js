import * as models from '../models/incomeModel.js';

export function getAllIncomes(req,res){
    models.getAllIncomes()
    .then( result => res.json(result))
}

export function createIncome(req,res){
    const { amount, category, date, comment } = req.body
    const ins = {amount, date, comment}
    models.insertIncome(ins)
    .then( result => res.json(result))
}