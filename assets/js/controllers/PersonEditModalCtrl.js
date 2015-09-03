AddressBookApp.controller('PersonEditModalCtrl', ['$scope', '$modalInstance','editPerson', function($scope, $modalInstance, editPerson){

  $scope.newPerson={
    firstname:editPerson.firstname,
    lastname:editPerson.lastname,
    notes:editPerson.notes
  }

  $scope.updatePerson = function(){
    editPerson.firstname = $scope.newPerson.firstname
    editPerson.lastname = $scope.newPerson.lastname
    editPerson.notes = $scope.newPerson.notes
    editPerson.$save().then(function(){
      $modalInstance.close();
    });
  }

  $scope.cancel = function(){
    $modalInstance.dismiss();
  }

}]);