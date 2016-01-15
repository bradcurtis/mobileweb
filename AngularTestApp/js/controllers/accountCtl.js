var starter;
(function (starter) {
    var controllers;
    (function (controllers) {
        var accountCtl = (function () {
            function accountCtl($scope, $rootScope, UserService, filterFilter, Chats, $state, dataservice) {
                this.chats = Chats;
                this.dataservice = dataservice;
                this.vendors = this.dataservice.getVendor();
                this.userservice = UserService;
                this.state = $state;
                this.selectedFilter = filterFilter;
                this.dataservice = dataservice;
            }
            accountCtl.prototype.selectedVendors = function () {
                return this.selectedFilter(this.vendors, { selected: true });
            };
            accountCtl.prototype.newTask = function () {
                this.well["vendors"] = this.selectedVendors();
                this.userservice.addForm(this.well);
                this.well = {};
                angular.forEach(this.vendors, function (vendor) {
                    vendor.selected = false;
                });
                this.state.go('tab.chats');
            };
            ;
            accountCtl.$inject = ["$scope", "$rootScope", "UserService", "filterFilter", "Chats", "$state", "dataService"];
            return accountCtl;
        })();
        controllers.accountCtl = accountCtl;
        angular
            .module("starter")
            .controller("accountTSCtrl", accountCtl);
    })(controllers = starter.controllers || (starter.controllers = {}));
})(starter || (starter = {}));
//# sourceMappingURL=accountCtl.js.map