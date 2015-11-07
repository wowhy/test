define(['angularAMD'], function (angularAMD) {
    var Menu = angular.module('ui.Menu', []);

    Menu
    .directive('uiMenu', [function () {
        return {
            link: function (scope, element, attrs, controller) {
                element.find(".menu-toggler").on('click', function () {
                    var menu = element.find(".page-header-menu");
                    if (menu.is(":visible")) {
                        menu.slideUp(300);
                    } else {
                        menu.slideDown(300);
                    }
                });
            }
        };
    }]);

    return Menu;
});