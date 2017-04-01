var app = angular.module('referralModule');

app.controller('referralCtrl', function($scope, referralFactory, $location){




  referralFactory.getReferral().then(function() {
        $scope.newLink = referralFactory.update();
        console.log($scope.newLink);
    });
//
//
//
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

// $scope.location = $location;
//    $scope.$watch('location.search()', function() {
//        $scope.target = ($location.search()).link;
//    }, true
//  );
//
//    $scope.changeTarget = function(name) {
//        $location.search('link', name);
//    }
