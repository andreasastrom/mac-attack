(function() {
    "use strict";

    var module = angular.module('app.navbar', []);

    function navBarCtrl() {}

    module.component('navBar', {
        templateUrl: 'static/html/navbar.html',
        controller: navBarCtrl
    });

}());