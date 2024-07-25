import express from 'express'
import { expensesRouter } from './routes/expensesRoute.js'
import cors from 'cors';

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.listen(5000, () => {
    console.log('server listening 5000')
})

app.use('/api/expenses', expensesRouter)