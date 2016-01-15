module app {
    var main = angular.module("starter",
        ['ionic', 'starter.controllers', 'starter.services', 'service.data', 'lokijs','starter.domain']);


   
    main.config(routeConfig);
    main.run(startup);
  //  main.service('dataTS', starter.services.dataTS);

    function startup($ionicPlatform, UserService): void {
        $ionicPlatform.ready(function () {

            UserService.initUserDB();
            UserService.initFormDB();
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
        });
    }

    // routeConfig.$inject = ["$routeProvider"];
    function routeConfig($stateProvider, $urlRouterProvider): void {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

            // setup an abstract state for the tabs directive
            .state('tab', {
                url: "/tab",
                abstract: true,
               // controller: 'TabCtrl',
                controller: 'tabTSCtrl as tabctrl',
                templateUrl: "templates/tabs.html"
            })

            // Each tab has its own nav history stack:

            .state('tab.dash', {
                url: '/dash',
                views: {
                    'tab-dash': {
                        templateUrl: 'templates/tab-dash.html',
                        controller: 'dashTSCtrl as ctrl'
                    }
                }
            })

            .state('tab.chats', {
                url: '/chats',
                views: {
                    'tab-chats': {
                        templateUrl: 'templates/tab-chats.html',
                        controller: 'chatsTSCtl as chatsctrl'
                    }
                }
            })
         

            .state('tab.account', {
                url: '/account',
                views: {
                    'tab-account': {
                        templateUrl: 'templates/tab-account.html',
                        controller: 'accountTSCtrl as accountctrl'
                    }
                }
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/tab/dash');
    }
}