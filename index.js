const express = require('express')
const path = require('path')
const app = express()
const port = 3000

// Set EJS as template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
  let siteName = "Adidas"
  let searchText = "Search Now"
  let arr = ["Hey", 65, 65]
    res.render("index", {siteName: siteName, searchText: searchText, arr})
})
app.get('/blog/:slug', (req, res) => {
  let blogTitle = "Adidas why and when?"
  let blogContent = "Its a very good brand"
    res.render("blogpost", {blogTitle: blogTitle, blogContent: blogContent})
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
