const express = require('express')
const app = express()
const api = require('./routes/transaction')
const path = require('path')

const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/bank", {
  useNewUrlParser: true,
}).catch((err)=> console.log(err))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

  next()
})

app.use('/', api)

const port = 4200
app.listen(port, function () {
    console.log(`Running on http://localhost:${port}`)
})