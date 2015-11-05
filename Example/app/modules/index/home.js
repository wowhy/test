/// <reference path="c:\users\hongyuan.howonder\documents\visual studio 2013\Projects\WebApplication2\WebApplication2\Scripts/angular.js" />
define(['app', 'ngload!angular-ui-bootstrap'], function (app) {
    // controller
    app.controller('homeController', ['$scope', function ($scope) {
        // properties
        $scope.title = 'This is Home page';
    }]);
});