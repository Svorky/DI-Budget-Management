import express from "express";
import { getAllRecords } from '../models/recordsModel.js';
import { getAllCategories } from '../models/categoryModel.js';
import { getRecordById } from '../models/recordsModel.js';
import { updateRecord } from '../controllers/recordsController.js';
export const pagesRouter = express.Router();


pagesRouter.get('/',  async (req,res) => {
    let records = await getAllRecords()
    let categories = await getAllCategories()
    res.render('index',{
        records,
        categories
    })
})

pagesRouter.get('/records/:id', async (req,res)=>{
    let data = await getRecordById(req.params.id)
    let categories = await getAllCategories()
    console.log(data)
    res.render('editRecord', {
        data: data[0],
        categories
    })
})

pagesRouter.post('/records/:id', (req,res)=>{
    let result = updateRecord(req)
    res.redirect('/')
})