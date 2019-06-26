const express = require("express");

const server = express();

server.listen(3000);

const projects = [];

server.post("/projects", (req, res) => {
  const {id, title} = req.body;

  const project ={
    id,
    title,
    tasks: [];
  }

  projects.push(project);

  return res.json(project);
  
} )

server.get("/projects", (req,res) =>{
  return res.json(projects);
})

server.put("/projects/:id", (req,res) =>{
  const {index} = req.params;
  const {title} = req.body;

  projects[index].title = title;
  
})


