var app = angular.module('referralModule');

app.controller('referralCtrl', function($scope, referralFactory){




  referralFactory.getReferral().then(function() {
        $scope.newLink = referralFactory.update();
        console.log($scope.newLink);
    });
//
//
//
$scope.deleteLink = function(){
  referralFactory.deleteReferral($scope.removeReferral).then(function(){
    $scope.newLink = referralFactory.update();
  });
};

$scope.addToList = function(){
  referralFactory.addReferral($scope.newReferral.linktitle).then(function(){
    $scope.newLink = referralFactory.update();
// $scope.addToList = function(newReferral){
//   referralFactory.addReferral(newReferral).then(function(){
//     $scope.newLink = referralFactory.update();
  });
};
//
//
// $scope.addToList = function(newInformation){
//   var informationToAdd = {
//     linktitle: newInformation
//   };
// referralFactory.addReferral(informationToAdd).then(function(){
//
//     $scope.newLink = referralFactory.update();
//   });
// };
//
// $scope.changeToList = function(infoToEdit, id){
//   var informationToChange = {
//     id: id,
//     linktitle: infoToEdit
//   };
//   referralFactory.editReferral(informationToChange).then(function(){
//     $scope.newLink = referralFactory.update();
//   });
// };
//
//
//
});
