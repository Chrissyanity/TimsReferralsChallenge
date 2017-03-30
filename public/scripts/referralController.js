var app = angular.module('referralModule');

app.controller('referralCtrl', function($scope, referralFactory){

  // $scope.updateList = function(info){
  //   referralFactory.exportTo(info);
  //
  // }

  referralFactory.getReferral().then(function() {
        $scope.newLink = referralFactory.update();
        console.log($scope.newLink);
    });

$scope.deleteLink = function(removeReferral){
  console.log(removeReferral);
  referralFactory.deleteReferral(removeReferral).then(function(){
    $scope.newLink = referralFactory.update();
  });
};

$scope.addToList = function(newInformation){
  referralFactory.addReferral(newInformation).then(function(){
    $scope.newLink = referralFactory.update();
  });
};

$scope.changeToList = function(infoToEdit, id){
  var informationToChange = {
    id: id,
    linktitle: infoToEdit
  };
  referralFactory.editReferral(informationToChange).then(function(){
    $scope.newLink = referralFactory.update();
  });
};

});
