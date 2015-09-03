AddressBookApp.controller('PersonNewCtrl', ['$scope','Person','$location', function($scope,Person,$location){

  console.log('Person new controller');

  $scope.newPerson = {
    firstname:'',
    lastname:'',
    notes:''
  };

  $scope.createPerson = function(){

    // could validate things right here, but not ideal bc use has to click...
    console.log('create',$scope.newPerson);

    var newPerson = new Person($scope.newPerson);
    newPerson.$save().then(function(personResult){
      console.log('person', personResult);
      $location.path('/');
    }).catch(function(err){
      console.log('err',err);
    });
  }

}]);