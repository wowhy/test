/// <reference path="C:\Users\wowhy\Documents\Visual Studio 2013\Projects\Test\Example\_assets/js/require.js" />
/// <reference path="C:\Users\wowhy\Documents\Visual Studio 2013\Projects\Test\Example\_assets/js/angular/angular.js" />
define('example', ['angularAMD', 'angular-route'], function (angularAMD) {
    var app = angular.module('example', ['ngRoute']);
    app.config(['$routeProvider', function ($routeProvider) {

    }]);

    return angularAMD.bootstrap(app);
});