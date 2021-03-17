// Code goes here

var todoList = {
  todos: [],
  displayTodos: function(){
    if(this.todos.length === 0){
      console.log("My Todo List is Empty!");
    } else {
        //console.log('My Todos: ', this.todos);
        console.log('My Todos: ');
        for(var i = 0; i < this.todos.length; i++){
          //prints the todo item
          if(this.todos[i].completed === true){
            console.log("[x] ", this.todos[i].todoText);
          } else {
          console.log("[ ] ", this.todos[i].todoText);
          }
          //prints the whole object pos on that array,
          //console.log(this.todos[i]);
        }
      }
  },
  addTodo: function(newTodo){
    this.todos.push({
      todoText: newTodo,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(pos, newTodo){
    this.todos[pos].todoText=newTodo;
    this.displayTodos();
  },
  //position of object in todos array
  toggleCompleted: function(pos){
    //this.todos[pos].completed = !this.todos[pos].completed
    var todo = this.todos[pos];
    todo.completed = !todo.completed;
    this.displayTodos();
    
    /* if (todo.completed === true){
      this.todos.splice(pos,1)
      this.displayTodos();
    } */
  },

  /*
  all === true, -> all = false
  all === false -> all = true
  one === true -> all = true
  one === false -> all = true



pag may nakita kang isang true iintayin mo hanggang sa dulo kung 
  */
  toggleAll: function(){
    var counter = 0;
    for(var i = 0; i < this.todos.length; i ++){
      //this.todos[i].completed = !this.todos[i].completed;
      if (this.todos[i].completed === true){
        //counter for all encountered true
        counter++;
      }
      this.todos[i].completed = true;
    }
    if (counter === this.todos.length){
      for (var i = 0; i <this.todos.length; i ++){        
        this.todos[i].completed = false;
      }
    }
    this.displayTodos();
  }
};


todoList.displayTodos();
todoList.addTodo("item1");
todoList.addTodo("item2");
todoList.addTodo("item3");
todoList.addTodo("item4");
todoList.changeTodo(1, "updateditem2");
todoList.toggleCompleted(0);
todoList.toggleAll();
todoList.toggleCompleted(3);
todoList.toggleAll();
/*
todoList = { 
  todos: [
    {
      todoText: item1,
      completed: false    
    };,
    {
      to...
      com...
    }
  ]
}

todolist.todos[0].todoText
item1


*/

