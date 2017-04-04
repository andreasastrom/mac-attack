'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
    'ngComponentRouter',
    'app.home',
    'app.navbar'
]);

app.value("$routerRootComponent", "app");
app.component("app", {
    templateUrl: "static/html/app.html",
    $routeConfig: [
        { path: "/home", name: "Home", component: "home" },
        { path: "/**", redirectTo: ["Home"] }
    ]
});