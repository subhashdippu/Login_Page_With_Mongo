const dotenv = require('dotenv')
const mongoose = require('mongoose')
const express = require('express')
const app = express()

dotenv.config({ path: './config.env' })

require('./db/conn')

// const User = require('./model/userSchema')
app.use(express.json())
app.use(require('./router/auth'))
const PORT = process.env.PORT;


// Middleware

const middleware = (res, req, next) => {
    console.log('Hello this is middleware');
    next();
}
app.get('/', (req, res) => {
    res.send("Hello this is from server")
})

app.get('/about', middleware, (req, res) => {
    res.cookie("uhgjgyj", "uguhuih")
    res.send("Hello this is about")
    console.log('About page')
})

app.get('/contact', (req, res) => {
    res.send("Hello this is contact")
})

app.get('/signin', (req, res) => {
    res.send("Hello this is signin")
})

app.listen(PORT, () => {
    console.log(`Server is running ${PORT}`)
})