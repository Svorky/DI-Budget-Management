import express from 'express'
import { expensesRouter } from './routes/expensesRoute.js'
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { categoriesRouter } from './routes/categoriesRoute.js';

const app = express()
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.listen(5000, () => {
    console.log('server listening 5000')
})

app.use('/api/expenses', expensesRouter)
app.use('/api/categories', categoriesRouter)

app.get('/', (req,res) => {
    res.sendFile(__dirname + "/public/index.html");
})