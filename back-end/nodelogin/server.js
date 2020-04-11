const express = require("express");
const app = express();
const { Pool } = require("pg");
const secrets = require("./secrets");
const bodyParser = require("body-parser");

const pool = new Pool({
    user: secrets.dbUser,
    host: 'localhost',
    database: 'migracode-logIn',
    password: secrets.dbPassword,
    port: 5432,
})

var app = express();
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/users", (request, response) => {
    var name = request.body.name;
    var email = request.body.email;
    var password = request.body.password;

    if (name && password && email) {
        pool.query('INSERT INTO users VALUES ($1, $2, $3)', [name, email, password])
        response.status(200);
    } else {
        response.status(400);
    }
});

app.post('/authenticate', (request, response) => {
    var email = request.body.email;
    var password = request.body.password;
    if (email && password) {
        pool.query('SELECT * FROM users WHERE email = $1 AND password = $2', [email, password],
            (error, results, fields) => {
                if (results.length > 0) {
                    request.session.loggedin = true;
                    request.session.username = email;
                    response.redirect('/home');
                } else {
                    response.send('Incorrect Username and/or Password!');
                }
                response.end();
            });
    } else {
        response.send('Please enter Username and Password!');
        response.end();
    }
});

app.get('/home', (request, response) => {
    if (request.session.loggedin) {
        response.send('Welcome back, ' + request.session.username + '!');
    } else {
        response.send('Please login to view this page!');
    }
    response.end();
});

app.listen(3000);
