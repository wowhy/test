/// <reference path="C:\Users\wowhy\Documents\Visual Studio 2013\Projects\test\Example\assets/plugins/angular/angular.min.js" />
define(['angularAMD', 'angular-locale', 'angular-animate', 'angular-ui-router', 'angular-ui-bootstrap', 'SpinnerBar', 'Menu'], function (angularAMD) {
    // 模块
    var app = angular.module('app', ['ngLocale', 'ui.router', 'ui.bootstrap', 'ui.SpinnerBar', 'ui.Menu']);

    //#region 全局设置
    app.factory('settings', ['$rootScope', function ($rootScope) {
        var settings = {
        };

        $rootScope.settings = settings;

        return settings;
    }]);
    //#endregion
    
    //#region 配置路由
    app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        // 默认路由
        $urlRouterProvider.otherwise('/dashboard');

        // 路由
        $stateProvider
            // dashboard
            .state('dashboard', angularAMD.route({
                url: '/dashboard',
                templateUrl: 'modules/index/dashboard.html',
                data: { pageTitle: '仪表板', pageSubTitle: '统计 & 报表' },
                controller: 'DashboardController',
                controllerUrl: 'modules/index/DashboardController.js'
            }))

            // home
            .state('about', angularAMD.route({
                url: '/about',
                templateUrl: 'modules/index/about.html',
                data: { pageTitle: '关于', pageSubTitle: 'howonder' },
                controllerUrl: 'modules/index/about.js'
            }))
        ;
    }]);
    //#endregion

    //#region 主控制程序
    app.controller('AppController', ['$scope', function ($scope) {
    }]);

    app.controller('HeaderController', ['$scope', function ($scope) {
        $scope.$on('$includeContentLoaded', function ($element) {
            $(".page-header .menu-toggler").on("click", function (event) {
                var menu = $(".page-header .page-header-menu");
                if (menu.is(":visible")) {
                    menu.slideUp(300);
                } else {
                    menu.slideDown(300);
                }
            });
        });
    }]);

    app.controller('PageHeadController', ['$scope', function ($scope) {
    }]);

    app.controller('FooterController', ['$scope', function ($scope) {
    }]);
    //#endregion

    app.run(['$rootScope', '$state', 'settings', function ($rootScope, $state, settings) {
        $rootScope.$state = $state;
    }])

    // 引导
    return angularAMD.bootstrap(app);
});