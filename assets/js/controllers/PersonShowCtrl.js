AddressBookApp.controller('PersonShowCtrl', ['$scope','Person','$modal','$routeParams','Contact', function($scope,Person,$modal,$routeParams,Contact){

  console.log('Person show controller');

  $scope.person = {};

  Person.get({id: $routeParams.id}).then(function(person){
    $scope.person = person;
  })

  $scope.deleteContact = function(id){
    Contact.get({id: id}).then(function(contact){
      contact.$delete();
      $scope.person.contacts = $scope.person.contacts;
    })
  }

  $scope.editContact = function(contact){
    $modal.open({
      templateUrl: '/views/contact/editModal.html',
      controller: 'ContactEditModalCtrl',
        resolve: {
          editContact: function() {
            console.log(contact)
            return contact
          }
        }
    })
  }

}]);