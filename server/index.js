const express = require('express') //inicializo el backend
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
const movieRouter = require('./routes/movie-router')

const app = express() //App va a ser el nombre de mi App
const apiPort = 3000 //Puerto

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => { 
    res.send('Hello World!')
})

app.use('/api', movieRouter) //El api va a ser el endpoint donde el backend y el frontend se van a compartir la infromacion

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))