const express = require('express')//import thu vien 
const app = express()//cong server chay
const port = 3000

app.get('/', (req, res) => {
    console.log('Vaoi trang chu')
  res.send('<h1  style="color: blue;">Trang chu</h1>')
})
app.get('/home', (req, res) => {
    console.log('Vao trang home')
    res.send('<h1  style="color: red;">Trang home web</h1>')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})