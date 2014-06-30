function TodoController($scope) {
  $scope.newItem = "";
  $scope.todoList = [];
  // $scope.todoListArray = [];
  $scope.finishedArray = [];
  $scope.deletedArray = [];
  $scope.addItem = function(){
    if(this.newItem){
      // this.todoListArray.push({label:this.newItem, isFinish:false, isDelete:false});
       this.todoList.push({label:this.newItem, isFinish:false, isDelete:false});
       localStorage.todoItems = JSON.stringify(this.todoList);
       this.newItem = "";
    }
  }
  $scope.finishItem = function(item){
      item.isFinish = true;
      // item.isDelete = false;
      localStorage.finishedItems = [];
      localStorage.deletedItems = [];
      this.finishedArray = [];
      this.deletedArray = [];
      for(var i=0; i<this.todoList.length; i++){
        // if(item.label === this.todoListArray[i].label){
        //   this.todoListArray[i].isFinish = true;
        // }
        if(this.todoList[i].isFinish === true && this.todoList[i].isDelete != true){
          this.finishedArray.push(this.todoList[i]);
        }
        if(this.todoList[i].isDelete === true){
          this.deletedArray.push(this.todoList[i]);
        }
      }
      localStorage.finishedItems = JSON.stringify(this.finishedArray);
      localStorage.deletedItems = JSON.stringify(this.deletedArray);

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
    // item.isFinish = false;
    localStorage.finishedItems = [];
    localStorage.deletedItems = [];
    this.finishedArray = [];
    this.deletedArray = [];
    for(var i=0; i<this.todoList.length; i++){
        // if(item.label === this.todoListArray[i].label){
        //   this.todoListArray[i].isFinish = true;
        // }
        if(this.todoList[i].isFinish === true && this.todoList[i].isDelete != true){
          this.finishedArray.push(this.todoList[i]);
        }
        if(this.todoList[i].isDelete === true){
          this.deletedArray.push(this.todoList[i]);
        }
      }
      localStorage.finishedItems = JSON.stringify(this.finishedArray);
      localStorage.deletedItems = JSON.stringify(this.deletedArray);

  }
  //   for(var i=0; i<this.todoList.length; i++){
  //       if(this.todoList[i].isDelete === true){
  //         this.deletedArray.push(this.todoList[i]);
  //       }
  //     }
  //   localStorage.deletedItems = JSON.stringify(this.deletedArray);

  // }
}
