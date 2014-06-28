function TodoCrtlUpdate($scope) {
  $scope.newItem = "";
  $scope.todoList = [];
  $scope.addItem = function(){
    if(this.newItem){
       this.todoList.push({label:this.newItem, isFinish:false});
       localStorage.todoItems = JSON.stringify(this.newItem);
       this.newItem = "";
    }
  }
  $scope.removeItem = function(item){
      item.isFinish = true;
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
}
