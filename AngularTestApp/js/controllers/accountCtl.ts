module starter.controllers {

    export interface IAccountCtlModel {
        vendors: starter.domain.Ivendor[];
        well: any;
        chats: any;
        selectedFilter: ng.IFilterFilter;
    }

    export class accountCtl implements IAccountCtlModel {
        vendors: any;
        well: any;
        chats: any;
        userservice: any;
        state: any;
        selectedFilter: ng.IFilterFilter;
        dataservice: app.common.IDataService;

        static $inject = ["$scope", "$rootScope", "UserService", "filterFilter", "Chats", "$state", "dataService"];
        constructor($scope: ng.IScope, $rootScope: ng.IRootScopeService, UserService: any, filterFilter: ng.IFilterFilter, Chats: any, $state: any, dataservice: app.common.IDataService) {
            this.chats = Chats;
            this.dataservice = dataservice;
            this.vendors = this.dataservice.getVendor();
            this.userservice = UserService;
            this.state = $state
            this.selectedFilter = filterFilter;
            this.dataservice = dataservice;

        }

        private selectedVendors() {
            return this.selectedFilter(this.vendors, { selected: true });
        }

        newTask() {          
            
            this.well["vendors"] = this.selectedVendors();
            this.userservice.addForm(this.well);
            this.well = {};
           
            angular.forEach(this.vendors, function (vendor) {
                vendor.selected = false;
            });

            this.state.go('tab.chats');
        };
        
    }
    angular
        .module("starter")
        .controller("accountTSCtrl",
        accountCtl);

}