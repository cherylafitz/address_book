AddressBookApp.controller('ContactEditModalCtrl', ['$scope', '$modalInstance','editContact','Contact','Person', function($scope, $modalInstance, editContact, Contact, Person){

    Contact.get({id: editContact.id}).then(function(contact){
      $scope.newContact={
        name:contact.name,
        email:contact.email,
        phone:contact.phone
      }
    })

  $scope.updateContact = function(){
    // editContact.name = $scope.newContact.name
    // editContact.email = $scope.newContact.email
    // editContact.phone = $scope.newContact.phone
    // console.log(editContact)
    Contact.get({id: editContact.id}).then(function(contact){

      console.log('logging',contact);
        contact.name = $scope.newContact.name
        contact.email = $scope.newContact.email
        contact.phone = $scope.newContact.phone
        console.log(contact.person)

      contact.$save().then(function(contact){
        console.log('thing',contact);
        // Person.get({id: contact.person}).then(function(person){
        //   console.log(person)
          $scope.person = contact.person;
        // })
        $modalInstance.close();
      })
    });
  }

  $scope.cancel = function(){
    $modalInstance.dismiss();
  }

}]);