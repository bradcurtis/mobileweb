module starter.controllers {
    export interface ItabCtl {
       // loggedinUser: starter.domain.User;
        displaySearchTab: boolean;
    }

    export interface IScope extends ng.IScope {
       // loggedinUser: starter.domain.User;
        loggedinUser: any;
        displaySearchTab: boolean;
        viewwells: any;
    } 

    export class tabCtl implements ItabCtl {
        //loggedinUser: starter.domain.User;
        displaySearchTab: boolean;
        scope: ng.IScope;
        rootscope: ng.IRootScopeService;
        location: ng.ILocationService;
        

        static $inject = ["$scope", "$rootScope", "$location", "UserService"];
        constructor($scope: IScope, $rootScope: ng.IRootScopeService, $location: ng.ILocationService, userservice: any) {
            this.scope = $scope;
            this.rootscope = $rootScope;
            this.location = $location;
           // this.userTSservice = dataservice;

            $rootScope.$on("button-fired", function (event, args) {
                $scope.displaySearchTab = true;
                $scope.loggedinUser = args.user;

            });

            $rootScope.$on('upadtedForm', function (event, args) {
                $scope.viewwells = args.forms;
            });

        }       

    }
    angular
        .module("starter")
        .controller("tabTSCtrl",
        tabCtl);

}