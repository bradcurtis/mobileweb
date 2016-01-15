module starter.controllers {

    export interface IDashModel {
        signIn(user): void;
        signInTS(): void;
        user: starter.domain.User;
    }

    export class dashCtl implements IDashModel {

        user: starter.domain.User;
        scope: ng.IScope;
        rootscope: ng.IRootScopeService;
        location: ng.ILocationService;
        userservice: any;
        dataservice: app.common.IDataService;
      //  dataservice: starter.domain.IdataTS;
        
        static $inject = ["$scope", "$rootScope", "$location", "UserService","dataService"];
        constructor($scope: ng.IScope, $rootScope: ng.IRootScopeService, $location: ng.ILocationService, userservice: any,dataservice:app.common.IDataService) {
            this.scope = $scope;
            this.rootscope = $rootScope;
            this.location = $location;
            this.userservice = userservice;
            this.dataservice = dataservice;
            
            
        }

        
        signIn() {
            //this.userservice.addUser(this.user);
            this.dataservice.addUser(this.user);
            var args: any = {};

            args.user = this.user;
            this.rootscope.$broadcast('button-fired', args);
            this.location.path("/tab/chats");
        }

        signInTS() {
            //this.userservice.addUser(user);
            alert("helloworld");
        }
    }
    
    angular
        .module("starter")
        .controller("dashTSCtrl",
        dashCtl);
}