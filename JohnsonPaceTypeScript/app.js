var app;
(function (app) {
    var main = angular.module("starter", ['ionic', 'starter.controllers', 'starter.services', 'starter.test', 'service.data', 'lokijs']);
    main.config(routeConfig);
    main.run(startup);
    function startup($ionicPlatform, UserService) {
        $ionicPlatform.ready(function () {
            UserService.initUserDB();
            UserService.initFormDB();
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
        });
    }
    // routeConfig.$inject = ["$routeProvider"];
    function routeConfig($stateProvider, $urlRouterProvider) {
        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider
            .state('tab', {
            url: "/tab",
            abstract: true,
            controller: 'TabCtrl',
            templateUrl: "templates/tabs.html"
        })
            .state('tab.dash', {
            url: '/dash',
            views: {
                'tab-dash': {
                    templateUrl: 'templates/tab-dash.html',
                    controller: 'dashTSCtrl'
                }
            }
        })
            .state('tab.chats', {
            url: '/chats',
            views: {
                'tab-chats': {
                    templateUrl: 'templates/tab-chats.html',
                    controller: 'ChatsCtrl'
                }
            }
        })
            .state('tab.chat-detail', {
            url: '/chats/:chatId',
            views: {
                'tab-chats': {
                    templateUrl: 'templates/chat-detail.html',
                    controller: 'ChatDetailCtrl'
                }
            }
        })
            .state('tab.account', {
            url: '/account',
            views: {
                'tab-account': {
                    templateUrl: 'templates/tab-account.html',
                    controller: 'AccountCtrl'
                }
            }
        });
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/tab/dash');
    }
})(app || (app = {}));
//# sourceMappingURL=app.js.map