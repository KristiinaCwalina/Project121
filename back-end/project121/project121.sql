drop table if exists mentors;
drop table if exists students;
drop table if exists mentorTime;


CREATE TABLE mentors (
  id       SERIAL PRIMARY KEY,
  name     VARCHAR(30) NOT NULL,
  company  VARCHAR(120),
  skills VARCHAR(12),
  email    VARCHAR(120) NOT NULL,
  password VARCHAR,
  phone  VARCHAR(20)
);

CREATE TABLE students (
  id       SERIAL PRIMARY KEY,
  name     VARCHAR(30) NOT NULL,
  class    VARCHAR(30) NOT NULL,
  email VARCHAR(120) NOT NULL,
  password VARCHAR,
  phone VARCHAR(10) NOT NULL
  
);

CREATE TABLE mentorTime (
mentors_id   INT REFERENCES mentors(id),
date VARCHAR 
start_time VARCHAR
end_time VARCHAR
place VARCHAR
s);


INSERT INTO mentors (name, company, skills, email, phone) VALUES ('Angel','Migracode','React, Node.js', 'angel@angel.org', 6489493038);
INSERT INTO mentors (name, company, skills, email, phone) VALUES ('Carlos','Migracode','HTML, CSS, REACT','carlos1234@gmail.com',673948299);
INSERT INTO mentors (name, company, skills, email, phone) VALUES ('Sergi','Jobsearch','Node.js','potato001@hotmail.com', 645869483);


INSERT INTO students (name, class, email, phone) VALUES ('Alex', 'oct2019-1', 'alex.alex@gmail.com', 677939843);
INSERT INTO students (name, class, email, phone) VALUES ('Kristina', 'oct2019-1', 'kris007@gmail.com', 6779343);
INSERT INTO students (name, class, email, phone) VALUES ('Raj', 'oct2019-1', 'raj.r@gmail.com', 677345843);