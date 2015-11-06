define(['angularAMD'], function (angularAMD) {
    var Menu = angular.module('ui.Menu', []);

    Menu
    .controller('uiMenuController', [function () {}])
    .directive('uiMenu', [function () {
        return {
            controller: 'uiMenuController',
            link: function (scope, element, attrs, controller) {}
        };
    }])
    .directive('uiMenuToggle', [function () {
        return {
            require: '^uiMenu',
            link: function (scope, element, attrs, controller) {
                element.on('click', function () {
                    var menu = controller.menu;
                    if (menu) {
                        if (!menu.is(":visible")) {
                            menu.slideUp(300);
                        } else {
                            menu.slideDown(300);
                        }
                    }
                });
            }
        };
    }])
    .directive('uiMenuContent', [function () {
        return {
            require: '^uiMenu',
            link: function (scope, element, attrs, controller) {
                controller.menu = element;
            }
        };
    }]);

    return Menu;
});