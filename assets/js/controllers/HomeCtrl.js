AddressBookApp.controller('HomeCtrl', ['$scope', 'Person', '$modal', function($scope, Person, $modal){

  console.log('home controller')

  $scope.persons = [];

  Person.query().then(function(persons){
    console.log('persons',persons)
    $scope.persons = persons;
  })

  $scope.deletePerson = function(person){
    person.$delete();
  }

  $scope.editPerson = function(person){
    $modal.open({
      templateUrl: '/views/person/editModal.html',
      controller: 'PersonEditModalCtrl',
        resolve: {
          editPerson: function() {
            return person
          }
        }
    })
  }

}]);