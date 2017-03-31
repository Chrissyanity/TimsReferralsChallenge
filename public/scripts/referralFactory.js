var app = angular.module('referralModule');

app.factory('referralFactory', function ($http){

var info = [];
  return {
    update: update,
    getReferral: getReferral,
    addReferral: addReferral,
    editReferral: editReferral,
    deleteReferral: deleteReferral
  };

  function update() {
    return info;
  };

  function getReferral() {
    var promise = $http({
      method: 'GET',
      url: '/get-referral'
    }).then(function success(response){
      info = response.data;
    });
    return promise;
  };

  function addReferral(newReferral) {
    var newReferral = {
      linktitle: newReferral,
      clicks: 0
  };
      console.log(newReferral);
    var promise = $http({
      method: 'POST',
      url: '/add-referral',
      data: newReferral
    }).then(function success(response){
      console.log(response);
      info = response.data;
    });
    return promise;
  };


function editReferral(updateReferral){
  var referralThing = {
    referralThing: updateReferral.referralThing
  };
  var promise = $http ({
    method: 'PUT',
    url: '/edit-referral/' + updateReferral.id,
    data: updateReferral
  }).then(function success(response){
    console.log(response);
    info = response.data;
  });
  return promise;
};

function deleteReferral(removeReferral){
  var promise = $http ({
    method: 'DELETE',
    url: '/delete-referral/' + removeReferral
  }).then(function success (response){
    info = response.data;
  });
  return promise;
};


  // var referralInfo = {};
  //
  // var referralData = {};
  // return {
  //   sendReferral: sendReferral,
  //   returnReferral: returnReferral,
  //   exportTo: function (data) {
  //     referralData = data;
  //   },
  //   importIn: function () {
  //     return referralData;
  //   }
  // }
  //
  // function sendReferral(selectedInfo) {
  //   referralInfo = selectedInfo;
  // }
  // function returnReferral() {
  //   return referralInfo;
  // };
  });
// });
