(function() {
    "use strict";
    var module = angular.module('app.home', []);

    function navBarCtrl() {}

    module.component('home', {
        templateUrl: 'static/html/home.html',
        controller: navBarCtrl
    });

}());