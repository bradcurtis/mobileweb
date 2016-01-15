var starter;
(function (starter) {
    var controllers;
    (function (controllers) {
        var dashCtl = (function () {
            function dashCtl($scope, $rootScope, $location, userservice, dataservice) {
                this.scope = $scope;
                this.rootscope = $rootScope;
                this.location = $location;
                this.userservice = userservice;
                this.dataservice = dataservice;
            }
            dashCtl.prototype.signIn = function () {
                //this.userservice.addUser(this.user);
                this.dataservice.addUser(this.user);
                var args = {};
                args.user = this.user;
                this.rootscope.$broadcast('button-fired', args);
                this.location.path("/tab/chats");
            };
            dashCtl.prototype.signInTS = function () {
                //this.userservice.addUser(user);
                alert("helloworld");
            };
            //  dataservice: starter.domain.IdataTS;
            dashCtl.$inject = ["$scope", "$rootScope", "$location", "UserService", "dataService"];
            return dashCtl;
        })();
        controllers.dashCtl = dashCtl;
        angular
            .module("starter")
            .controller("dashTSCtrl", dashCtl);
    })(controllers = starter.controllers || (starter.controllers = {}));
})(starter || (starter = {}));
//# sourceMappingURL=dashCtl.js.map