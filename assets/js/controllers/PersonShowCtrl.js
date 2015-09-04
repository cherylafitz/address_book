AddressBookApp.controller('PersonShowCtrl', ['$scope','Person','$routeParams','Contact', function($scope,Person,$routeParams,Contact){

  console.log('Person show controller');

  $scope.person = {};

  Person.get({id: $routeParams.id}).then(function(person){
    $scope.person = person;
  })





  $scope.deleteContact = function(contact){
    contact.$delete();
  }

}]);