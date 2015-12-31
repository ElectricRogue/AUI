var mainApp = angular.module("mainApp", ['ngRoute', 'ui.date']).
run(function ($rootScope) {
    $rootScope.$on('$viewContentLoaded', function (event, next) {
        componentHandler.upgradeAllRegistered();
    });
});

mainApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/page', {
            templateUrl: '../views/Page.html',
            controller: 'Questions'
        })
        .when('/page2', {
            templateUrl: '../views/Page2.html',
            controller: 'Questions'
        })
        .when('/default', {
            templateUrl: '../views/default.html'
        })
        .otherwise({
            redirectTo: '/default'
        });


}]);
