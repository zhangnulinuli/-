const UserController = require('./controllers/UserController')

module.exports = (app) => {
  app.get('/api', (req, res) => {
    res.send({ msg: 'hello 张张张' })
  })
  // 数据的增删改查方法
  app.get('/users/:id', UserController.getUserById)
  app.post('/users', UserController.register)
  app.put('/users/:id', UserController.update)
  app.delete('/users/:id', UserController.delete)
}
