const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')

const server = express()
const recipes = require('./data')

server.use(express.urlencoded({ extended: true }))
server.use(express.static('public'))
server.use(routes)

server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
})






// server.get('/about', function(req, res){
//     return res.render('about')
// })

// // server.get('/recipe', function(req, res){
// //     return res.render('recipe', { })
// // })

server.listen(5000, function(){
    console.log('Server is Running!')
})
