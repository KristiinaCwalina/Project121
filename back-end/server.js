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
  response.send("You have been successfully logged out.");
});

app.post("/students", (request, response) => {
  var name = request.body.name;
  var student_class = request.body.student_class;
  var email = request.body.email;
  var password = request.body.password;
  var phone = request.body.phone;

  if (name && student_class && password && email && phone) {
    pool.query(
      "INSERT INTO students (name, student_class, email, password, phone) VALUES ($1, $2, $3, $4,$5)",
      [name, student_class, email, password, phone],
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

app.post("/studentsauth", (request, response) => {
  var email = request.body.email;
  var password = request.body.password;

  var parameters = [email, password];
  if (email && password) {
    pool.query(
      "SELECT * FROM students WHERE email = $1 AND password = $2",
      parameters,
      (error, results, fields) => {
        if (results.rowCount > 0) {
          var userName = results.rows[0].name;
          request.session.studentsloggedin = true;
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

app.post("/studentslogout", (request, response) => {
  request.session.studentsloggedin = false;
  response.send("You have been successfully logged out.");
});

app.get("/main", function (req, res) {
  res.send("Welcome");
});

app.get("/students", function (req, res) {
  let query = `SELECT (name, student_class, email) FROM students`;
  pool
    .query(query)
    .then((result) => res.json(result.rows))
    .catch((e) => console.error(e));
});

app.get("/mentors", function (req, res) {
  let query = `SELECT (name, company, skills, email) FROM mentors`;
  pool
    .query(query)
    .then((result) => res.json(result.rows))
    .catch((e) => console.error(e));
});

app.get("/mentors/:skills", (request, res) => {
  const skills = request.params.skills;
  let query =
    "select (name, company, skills, email) from mentors where skills ilike '%' || $1 || '%'";
  pool
    .query(query, [skills])
    .then((result) => res.json(result.rows))
    .catch((e) => console.error(e));
});

app.get("/home", (request, response) => {
  if (request.session.mentorsloggedin) {
    response.send("Welcome back, " + request.session.username + "!");
  } else {
    response.send("Please login to view this page!");
  }
  response.end();
});

app.listen(3001, function () {
  console.log("Server is listening on port 3001. Ready to accept requests!");
});