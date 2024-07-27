import * as models from '../models/categoryModel.js';

export function getAllCategories(req, res) {
    models.getAllCategories()
        .then(result => res.json(result));
}

export function createCategory(req, res) {
    models.insertCategory(req.body)
        .then(result => res.json(result));
}

export function updateCategory(req, res) {
    models.updateCategory(req.body)
        .then(result => {
            return res.json({
                status: true,
                data: result
            });
        })
        .catch(error => {
            console.error(error);
            return res.json({
                status: false,
                message: error
            });
        });
}

export function deleteCategory(req, res) {
    models.deleteCategory(Number(req.params.id))
        .then(result => {
            return res.json({
                status: true,
                data: result
            });
        })
        .catch(error => {
            console.error(error);
            return res.json({
                status: false,
                message: error
            });
        });
}