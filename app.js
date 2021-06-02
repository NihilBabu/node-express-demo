var bodyParser = require('body-parser')
var express = require('express')

const app = express()

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

// var homeEndpoint = require('./routes/home')
const pages = require('./pages')



// app.get("/", homeEndpoint.index)
// app.get("/home", homeEndpoint.home)

app.get("/login", pages.loginPage)
app.post("/login", pages.login)
app.get("/home", pages.homePage)

app.listen(8081)