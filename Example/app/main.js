/// <reference path="C:\Users\wowhy\Documents\Visual Studio 2013\Projects\Test\Example\_assets/js/require.js" />
require.config({
    baseUrl: '',

    paths: {
        // library
        'jQuery': '../_assets/js/jquery-2.1.4',
        'angular': '../_assets/js/angular/angular',
        'angular-route': '../_assets/js/angular/angular-route',
        'angularAMD': '../_assets/js/angular/angularAMD',


        // features
        'example': 'app'
    },

    shim: {
        'jQuery': [],
        'angular': ['jQuery'],
        'angularAMD': 'angular',
        'angular-route': ['angular']
    },

    deps: ['example']
});