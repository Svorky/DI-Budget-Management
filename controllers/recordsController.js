import * as models from '../models/recordsModel.js';

export function getAllRecords(req, res) {
    models.getAllRecords()
        .then(result => res.json(result));
}

export function getRecordById(req, res) {
    const id = req.params.id;
    models.getRecordById(id)
        .then(result => res.json(result));
}

export function getAllRecordsByType(req, res) {
    const { type } = req.body;
    models.getAllRecordsByType(type)
        .then(result => res.json(result));
}


export function createRecord(req, res) {
    let { amount, category, comment, date, type } = req.body;
    let insert;
    if(type === 'expense'){
        insert = { amount, category, comment, date, type };
    } else {
        insert = { amount, comment, date, type };
    }
    models.insertRecord(insert)
        .then(result => res.json(result));
}

export function deleteRecord(req, res) {
    let id = req.params.id;
    models.deleteRecord(id)
        .then(result => res.json(result));
}

export function updateRecord(req) {
    const id = Number(req.params.id);
    const { amount, category, date, comment } = req.body;
    const update = {
        id,
        amount,
        category,
        date,
        comment
    };
    models.updateRecord(update)
        .then(result => result);
}