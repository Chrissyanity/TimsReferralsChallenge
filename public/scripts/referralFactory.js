var app = angular.module('referralModule');

app.factory('referralFactory', function($http) {

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

//retrieving table information from database
    function getReferral() {
        var promise = $http({
            method: 'GET',
            url: '/get-referral'
        }).then(function success(response) {
            info = response.data;
        });
        return promise;
    };

//adding new link information to database
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
        }).then(function success(response) {
            console.log(response);
            info = response.data;
        });
        return promise;
    };


    function editReferral(updateReferral) {
        var referralThing = {
            referralThing: updateReferral.referralThing
        };
        var promise = $http({
            method: 'PUT',
            url: '/edit-referral/' + updateReferral.id,
            data: updateReferral
        }).then(function success(response) {
            console.log(response);
            info = response.data;
        });
        return promise;
    };

    function deleteReferral(removal) {
        var promise = $http({
            method: 'DELETE',
            url: '/delete-referral/' + removal
        }).then(function success(response) {
            info = response.data;
        });
        return promise;
    };



});
