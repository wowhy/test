define(['app'], function (app) {
    app.service('userService', ['$q', function ($q) {
        this.add = function () {
            alert(1);
        }
    }]);
});