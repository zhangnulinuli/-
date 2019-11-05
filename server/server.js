const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const app = express()
const { sequelize } = require('./modules')

app.use(bodyParser.json())
app.use(morgan('combined'))

require('./router.js')(app) // 引入路由

app.post('/users', (req, res) => {
  console.log(req.body)
  res.send({
    code: 200,
    data: req.body
  })
})

sequelize
  .sync()
  .then(() => {
    console.log('Connection has been established successfully.')
    app.listen(3000, () => console.log('Server has been started on post 3000'))
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })
