require.config({
    baseUrl: '',

    map: {
        '*': {
            'css': '../assets/plugins/require-css.min'
        }
    },

    paths: {
        'jQuery': '../assets/plugins/jquery.min',

        'angular': '../assets/plugins/angular/angular.min',
        'angularAMD': '../assets/plugins/angular/angularAMD.min',
        'angular-locale': '../assets/plugins/angular/i18n/angular-locale_zh-cn',
        'angular-ui-router': '../assets/plugins/angular/angular-ui-router.min',
        'angular-ui-event': '../assets/plugins/angular/angular-ui-event.min',
        'ngload': '../assets/plugins/angular/ngload.min',

        'angular-ui-bootstrap': '../assets/plugins/angular-ui-bootstrap/ui-bootstrap-tpls.min',
        'angular-ui-grid': '../assets/plugins/angular-ui-grid/ui-grid.min'
    },
    shim: {
        'jQuery': { exports: '$' },

        'angular': { deps: ['jQuery'], exports: 'angular' },
        'angularAMD': ['angular'],
        'angular-locale': ['angular'],
        'angular-ui-router': ['angular'],

        'angular-ui-bootstrap': ['angular'],
        'angular-ui-grid': ['angular', 'css!../assets/plugins/angular-ui-grid/css/ui-grid.min']
    },

    deps: ['app']
});