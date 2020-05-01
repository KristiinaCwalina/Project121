const express = require("express");
const app = express();
const { Pool } = require("pg");
const secrets = require("./secrets");
const bodyParser = require("body-parser");
const session = require("express-session");

const pool = new Pool({
  user: secrets.dbUser,
  host: "localhost",
  database: "project121",
  password: secrets.dbPassword,
  port: 5432
});

app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/mentors", (request, response) => {
  var name = request.body.name;
  var company = request.body.company;
  var skills = request.body.skills;
  var email = request.body.email;
  var password = request.body.password;
  var phone = request.body.phone;

  if (name && company && skills && password && email && phone) {
    pool.query(
      "INSERT INTO mentors (name, company, skills, email, password, phone) VALUES ($1, $2, $3, $4,$5,$6)",
      [name, company, skills, email, password, phone],
      (err, res) => {
        console.log(err, res);
        pool.end();
      }
    );
    response.status(201).send("User created and saved to database.");
  } else {
    response.status(400).send("Review your requests body.");
  }
});

app.post("/mentorsauth", (request, response) => {
  var email = request.body.email;
  var password = request.body.password;

  var parameters = [email, password];
  if (email && password) {
    pool.query(
      "SELECT * FROM mentors WHERE email = $1 AND password = $2",
      parameters,
      (error, results, fields) => {
        if (results.rowCount > 0) {
          var userName = results.rows[0].name;
          request.session.mentorsloggedin = true;
          request.session.username = userName;
          response.send("Successfully logged in");
        } else {
          response.send("Incorrect Username and/or Password!");
        }
        response.end();
      }
    );
  } else {
    response.send("Please enter Username and Password!");
    response.end();
  }
});

app.post("/logout", (request, response) => {
  request.session.mentorsloggedin = false;
  response.send("You are successfully logged out.")
});

const students = [
  {
    name: "Kristina",
    surname: "x",
    class: "oct2019-1",
    phone: 637953345,
    email: "kristina@gmail.com"
  },
  { name: "Raj", surname: "y", class: "oct2019-1", phone: 638343348, email: "raj@gmail.com" },
  { name: "Aleks", surname: "z", class: "oct2019-1", phone: 633353345, email: "aleks@gmail.com" }
];

const mentors = [
  {
    id: 1,
    name: "Angel",
    company: "Migracode",
    skills: "json",
    email: "angel@gmail.com",
    password: "hefiehfioehfoeh",
    phone: 984054785
  },
  {
    id: 2,
    name: "Sergi",
    company: "infojobs",
    skills: "java",
    email: "sergi@gmail.com",
    password: "ebfkbf",
    phone: 948748483
  },
  {
    id: 3,
    name: "Carlos",
    company: "Migracode",
    languages: "c++",
    email: "carlos@gmail.com",
    password: "dihfidosf",
    phone: 848493847
  }
];

app.get("/main", function(req, res) {
  res.send("Welcome");
});

app.get("/students", function(req, res) {
  res.send(students);
});

app.get("/mentors", function(req, res) {
  let query = `SELECT * FROM mentors`;
  pool
    .query(query)
    .then((result) => res.json(result.rows))
    .catch((e) => console.error(e));
});

app.get("/mentors/:skills", (req, res) => {
  const languages = req.params.languages;
  const language = mentors.find((languages) => {
    return language.languages === languages;
  });
  if (!language) {
    res.send(404);
  } else {
    res.send(language);
  }
});

app.get("/home", (request, response) => {
  if (request.session.mentorsloggedin) {
    response.send("Welcome back, " + request.session.username + "!");
  } else {
    response.send("Please login to view this page!");
  }
  response.end();
});

app.listen(3000, function() {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
