AddressBookApp.controller('PersonShowCtrl', ['$scope','Person','$routeParams', function($scope,Person,$routeParams){

  console.log('Person show controller');

  $scope.person = {};

  Person.get({id: $routeParams.id}).then(function(person){
    $scope.person = person;
  })

}]);