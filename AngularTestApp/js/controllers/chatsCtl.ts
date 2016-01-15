module starter.controllers {

    export interface IchatsCtl {
        remove(well: any): any;
        scope: ng.IScope;
        userservice: any;
    }

    
    export class chatsCtl implements IchatsCtl {
        scope: ng.IScope;
        userservice: any;

        static $inject = ["$scope", "UserService"];
        constructor($scope: ng.IScope, UserService: any) {
            this.scope = $scope;
            this.userservice = UserService;
        }

        remove(well) {
            this.userservice.deleteform(well);
        }
    }
    angular
        .module("starter")
        .controller("chatsTSCtl",
        chatsCtl);

}