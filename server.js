var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000;

var todos = [
    {
        id:1,
        description:'Have Lunch',
        completed:false
    },
    {
        id:2,
        description:'Go to market',
        completed:false
    },
    {
        id:3,
        description:'Go to park',
        completed:true
    }
];

app.use(express.static(__dirname+'/public'));

// GET /todos
app.get('/todos',function(req, res){
   res.json(todos); 
});

// GET /todos/:id
app.get('/todos/:id',function(req, res){
    var todosId = req.params.id;
    var matchingTodo;
    todos.forEach(function(todo){
      if(todo.id.toString() === todosId){
          matchingTodo = todo;
      }  
    });
    if(matchingTodo !== undefined){
        res.json(matchingTodo);
    }else{
        console.log('Unable to find data for todo id:'+todosId);
        res.status(404).send();
    }
});

app.listen(PORT, function(){
    console.log('Express server started...');
})