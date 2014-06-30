function TodoController($scope) {
  $scope.newItem = "";
  if(localStorage.todoItems === undefined){
    $scope.todoList = [];
  }else{
    $scope.todoList = JSON.parse(localStorage.todoItems);
  }
  $scope.finishedArray = [];
  $scope.deletedArray = [];
  $scope.localStorageTodoLabelArray = [];
  // for(var i=0; i<this.todoList.length; i++){

  //   if(this.todoList[i].isFinish === true && this.todoList[i].isDelete != true){
  //     this.finishedArray.push(this.todoList[i]);
  //   }
  //   if(this.todoList[i].isDelete === true){
  //     this.deletedArray.push(this.todoList[i]);
  //   }
  // }
  // localStorage.finishedItems = JSON.stringify(this.finishedArray);
  // localStorage.deletedItems = JSON.stringify(this.deletedArray);
  $scope.addItem = function(){
    if(this.newItem){
       this.todoList.push({label:this.newItem, isFinish:false, isDelete:false});
       localStorage.todoItems = JSON.stringify(this.todoList);
       this.newItem = "";
    }
  }
  $scope.finishItem = function(item){
      item.isFinish = true;
      localStorage.finishedItems = [];
      localStorage.deletedItems = [];
      this.finishedArray = [];
      this.deletedArray = [];
      for(var i=0; i<this.todoList.length; i++){

        if(this.todoList[i].isFinish === true && this.todoList[i].isDelete != true){
          this.finishedArray.push(this.todoList[i]);
        }
        if(this.todoList[i].isDelete === true){
          this.deletedArray.push(this.todoList[i]);
        }
      }
      localStorage.finishedItems = JSON.stringify(this.finishedArray);
      localStorage.deletedItems = JSON.stringify(this.deletedArray);
      localStorage.todoItems = JSON.stringify(this.todoList);
  }
  $scope.edit = function(item){
      item.editing = true;
  }

  $scope.save = function(item){
    delete item.editing;
  }

  $scope.hello = function(){
    alert('Hello!' + item.label);
  }

  $scope.deleteItem = function(item){
    item.isDelete = true;
    localStorage.finishedItems = [];
    localStorage.deletedItems = [];
    this.finishedArray = [];
    this.deletedArray = [];
    for(var i=0; i<this.todoList.length; i++){

        if(this.todoList[i].isFinish === true && this.todoList[i].isDelete != true){
          this.finishedArray.push(this.todoList[i]);
        }
        if(this.todoList[i].isDelete === true){
          this.deletedArray.push(this.todoList[i]);
        }
      }
      localStorage.finishedItems = JSON.stringify(this.finishedArray);
      localStorage.deletedItems = JSON.stringify(this.deletedArray);
      localStorage.todoItems = JSON.stringify(this.todoList);

  }
  $scope.queryLocalStorage = function(){

    if(localStorage.todoItems === undefined && localStorage.finishedItems === undefined && localStorage.deletedItems === undefined){
      alert("There is nothing!");
      return;
    }
    alert("todoItems:" + localStorage.todoItems);
    alert("finishedItems:" + localStorage.finishedItems);
    alert("deletedItems:" + localStorage.deletedItems);

  }
  $scope.clearLocalStorageAndTodoList = function(){
    localStorage.clear();
    this.todoList = [];
  }
}



