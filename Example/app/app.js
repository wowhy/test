// bootstrap
define(['angularAMD', 'angular-locale', 'angular-ui-router'], function (angularAMD) {

    // routes
    var registerRoutes = function ($stateProvider, $urlRouterProvider) {

        // default
        $urlRouterProvider.otherwise('/home');

        // route
        $stateProvider

            // home
            .state('home', angularAMD.route({
                url: '/home',
                templateUrl: 'modules/index/home.html',
                controller: 'homeController',
                controllerUrl: 'modules/index/home.js'
            }))

            // home
            .state('about', angularAMD.route({
                url: '/about',
                templateUrl: 'modules/index/about.html',
                controllerUrl: 'modules/index/about.js'
            }))
        ;
    };

    // module
    var app = angular.module('app', ['ngLocale', 'ui.router']);

    // config
    app.config(['$stateProvider', '$urlRouterProvider', registerRoutes]);

    // bootstrap
    return angularAMD.bootstrap(app);
});