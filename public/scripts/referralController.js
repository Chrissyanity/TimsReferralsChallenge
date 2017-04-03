var app = angular.module('referralModule');

app.controller('referralCtrl', function($scope, referralFactory, $location){



//functionality for CRUD commands

  referralFactory.getReferral().then(function() {
        $scope.newLink = referralFactory.update();
        console.log($scope.newLink);
    });


$scope.deleteLink = function(){
  referralFactory.deleteReferral().then(function(){
    $scope.newLink = referralFactory.update();
  });
};

$scope.addToList = function(){
  referralFactory.addReferral($scope.newReferral.linktitle).then(function(){
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

// var str = "http://www.your_url.com/landing/?link=wolverines";
// var pagenum = str.match(/\?link\=(.*)/)[1];
// document.getElementById("result").innerHTML = pagenum[0].toUpperCase() + pagenum.slice(1)+" are awesome!";
