define(['app'], function (app) {
    var DashboardController = app.controller('DashboardController', ['$scope', function ($scope) {
        $scope.message = 'Hello, World!';
    }]);

    return DashboardController;
});