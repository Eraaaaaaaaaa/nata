const express= require ('express');

const app = express();
const PORT = 3000;

app.use(express.json())


//variabla qe ka mi majt tasks
let todos = [];

//GET method

app.get('/todos', (req,res)=>{
    res.json(todos);
});

//Post method

app.post('/todos', (req,res)=>{
    const newTodo = {id: Date.now(), text: req.body.text, completed : false};
    todos.push(newTodo);
    res.json(newTodo);
});

//update method

app.put('/todos/:id', (req,res)=>{
    //nese id sesht njejt me at qe o shenu boom error
    //nese kushti osth true i bon te dhanat update

    todos= todos.map(todo => todo.id != req.params.id ? {...todo,...req.body}:todo);
    res.json({message:"Task updated"})
});

app.put('/todos/:id', (req, res) => {

    todos = todos.map(todo => 
        todo.id !== id ? todo : { ...todo, ...req.body } // Only update the task if the id matches
    );
    
    res.json({ message: "Task updated" });
});


//delete method


app.delete('/todos/:id', (req, res) => {
    const id = req.params.id;  // Correct way to extract the id
    todos = todos.filter(todo => todo.id != id);  // Remove task with that id
    res.json({ message: "Task Deleted" });
});


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/todos`);
  });

  module.exports = app;