AddressBookApp.controller('ContactNewCtrl', ['$scope','Person','$location','PersonContact','$routeParams', function($scope,Person,$location,PersonContact,$routeParams){

  console.log('Contact new controller');

  $scope.person = {}
  $scope.contact = {
    name:'',
    email:'',
    streetad:'',
    city:'',
    state:'',
    zip:'',
    phone:''
  };

  Person.get({id: $routeParams.id}).then(function(person){
    $scope.person = person;
  });

  $scope.addContact = function(){
    console.log('add contact')
        var newContact = new PersonContact($scope.contact);
    // we could change the newContact.contact ..etc here

    newContact.$save({
      person_id:$scope.person.id
    }).then(function(contact){

      console.log('saved',contact)
      $location.path('/person/' + $scope.person.id);
      // $scope.person.contacts = person.contacts;
    }).catch(function(err){
      console.log('error',err)
    })
  }

}]);