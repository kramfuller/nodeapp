const express = require('express')
const suser = require('supertest')
const app = express()
const port = 3000
app.get('/',(req,res) => res.send('Hello'))

 
app.listen(port, () => console.log(`Running at port ${port}`))