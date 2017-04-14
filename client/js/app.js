'use strict'
var app = angular.module("SaleHorse", ['ngRoute', 'ngAnimate'])

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '../views/main.html',
            controller: 'MainController'
        })

});
