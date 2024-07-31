import express from 'express'
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { categoriesRouter } from './routes/categoriesRoute.js';
import { pagesRouter } from './routes/pagesRouter.js';
import { recordsRouter } from './routes/recordsRoute.js';

const app = express()
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
app.set( 'view engine', 'ejs' );

app.listen(3000, () => {
    console.log('server listening 5000')
})

app.use('/',pagesRouter)
app.use('/api/records', recordsRouter)
app.use('/api/categories', categoriesRouter)

app.use(express.static(__dirname + "/public"))
