import * as models from '../models/categoryModel.js';

export function getAllCategories(req,res){
    models.getAllCategories()
    .then( result => res.json(result))
}

export function createCategory(req, res){
    models.insertCategory(req.body)
    .then( result => res.json(result))
}