const express = require("express");
const app = express();

const studentsData = [
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

const mentorsData = [
  {
    name: "Angel",
    surname: "xy",
    languages: "json",
    email: "angel@gmail.com"
  },
  { name: "Sergi", surname: "zx", languages: "java", email: "sergi@gmail.com" },
  {
    name: "Carlos",
    surname: "yz",
    languages: "c++",
    email: "carlos@gmail.com"
  }
];

app.get("/main", function(req, res) {
  res.send("Welcome");
});

app.get("/students", function(req, res) {
  res.send(studentsData);
});

app.get("/mentors", function(req, res) {
  res.send(mentorsData);
});

app.get("/mentors/:languages", (req, res) => {
  const languages = req.params.languages;
  const language = mentorsData.find((languages) => {
    return language.languages === languages;
  });
  if (!language) {
    res.send(404);
  } else {
    res.send(language);
  }
});

app.listen(3000, function() {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
