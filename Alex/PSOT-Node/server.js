const express = require("express");
const app = express();
app.use(express.json());

const people = [
  {
    id: 12,
    name: "John doe",
    age: 23,
    sex: "male",
  },
  {
    id: 2,
    name: "Mary doe",
    age: 102,
    sex: "male",
  },
  {
    id: 3,
    name: "Jane doe",
    age: 34,
    sex: "female",
  },
  {
    id: 4,
    name: "Ben doe",
    age: 19,
    sex: "female",
  },
  {
    id: 5,
    name: "Saturday doe",
    age: 33,
    sex: "male",
  },
  {
    id: 6,
    name: "October doe",
    age: 27,
    sex: "female",
  },
  {
    id: 7,
    name: "Three doe",
    age: 51,
    sex: "male",
  },
  {
    id: 8,
    name: "Master doe",
    age: 11,
    sex: "female",
  },
];

//CRUD
//Create
//Read
//Update
//Delete

//Get all
app.get("/api/people", (req, res) => {
  res.send(people);
});

//Get A person
app.get("/api/people/:id", (req, res) => {
  let id = req.params.id;
  let person = people.find((person) => person.id == id);
  return res.send(person);
});

//Post
app.post("/api/people", (req, res) => {
  // console.log(req.body)
  let name = req.body.name;
  let age = req.body.age;
  let sex = req.body.sex;

  let person = {
    id: 1,
    name,
    age,
    sex,
  };

  people.push(person);

  res.send(person);
});

app.delete("/api/people/:id", (req, res) => {
  let id = req.params.id;
  let person = people.find((person) => person.id == id);

  let index = people.indexOf(person);
  people.splice(index, 1);

  res.send("We don delete am");
  //Find what i want to delete

  //Get the exact location
  //Delete
});

app.put("/api/people/:id", (req, res) => {
  let name = req.body.name;
  let id = req.params.id;

  console.log(id)
  console.log(name);

  let person = people.find((person) => person.id == id);
  let index = people.indexOf(person);

  person.name = name;
  people[index] = person;

  res.send("Update don sup!");
});

app.listen(5001, () => {
  console.log("Listening on 5001");
});
