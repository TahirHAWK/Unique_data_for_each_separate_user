const express = require('express')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const app = express()

let sessionOptions = session({
    secret: 'javascript is so cool',
    store: new MongoStore({client: require('./db')}),
    resave: false, 
    saveUninitialized: false,
    cookie: {maxAge: 1000 * 60 * 60 * 24, httpOnly: true}
})
// cookie maxage property tells sessions how long the session will persists
// other than maxAge property in cookie, no other property is needed to memorize
app.use(sessionOptions)
// this line tells express to use sessions
const router = require('./router')

app.use(express.urlencoded({extended: false}))
// tells express to add the user submitted data onto our request object.
app.use(express.json())

app.use(express.static('public'))
app.set('views', 'views')
app.set('view engine', 'ejs')

app.use('/', router)

module.exports = app