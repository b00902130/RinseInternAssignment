function TodoCrtlUpdate($scope) {
  $scope.newItem = "";
  $scope.todoList = [];
  $scope.addItem = function(){
    if(this.newItem){
       this.todoList.push({label:this.newItem, isFinish:false, isDelete:false});
       localStorage.todoItems = JSON.stringify(this.newItem);
       this.newItem = "";
    }
  }
  $scope.finishItem = function(item){
      item.isFinish = true;
      localStorage.finishedItems = JSON.stringify(item);

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
    localStorage.deletedItems = JSON.stringify(item);

  }
}
