var starter;
(function (starter) {
    var controllers;
    (function (controllers) {
        var tabCtl = (function () {
            function tabCtl($scope, $rootScope, $location, userservice) {
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
            tabCtl.$inject = ["$scope", "$rootScope", "$location", "UserService"];
            return tabCtl;
        })();
        controllers.tabCtl = tabCtl;
        angular
            .module("starter")
            .controller("tabTSCtrl", tabCtl);
    })(controllers = starter.controllers || (starter.controllers = {}));
})(starter || (starter = {}));
//# sourceMappingURL=tabCtl.js.map