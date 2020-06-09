const express = require('express')
const exphbs = require('express-handlebars')
const port = 3000
const app = express()
const bodyParser = require('body-parser')
const generateNonsense = require('./generateNonsense')

//setting engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//use static files
app.use(express.static('public'))

//setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))

//setting routing
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const profession = req.body //{ gridRadios: 'engineer' }
  const nonsense = generateNonsense(profession)
  res.render('index', { nonsense, profession })
})

app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})