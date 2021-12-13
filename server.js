const express = require('express')
const serverStatic = require('serve-static')
const path = require('path')



const app = express()

app.use(express.json())

app.use('/', serverStatic(path.join(__dirname, '/dist')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/index.html'))
})

const port = process.env.PORT || 8080
app.listen(port, console.log(`Server is listening on port ${port}`))
