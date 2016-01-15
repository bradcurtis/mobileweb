var starter;
(function (starter) {
    var controllers;
    (function (controllers) {
        var chatsCtl = (function () {
            function chatsCtl($scope, UserService) {
                this.scope = $scope;
                this.userservice = UserService;
            }
            chatsCtl.prototype.remove = function (well) {
                this.userservice.deleteform(well);
            };
            chatsCtl.$inject = ["$scope", "UserService"];
            return chatsCtl;
        })();
        controllers.chatsCtl = chatsCtl;
        angular
            .module("starter")
            .controller("chatsTSCtl", chatsCtl);
    })(controllers = starter.controllers || (starter.controllers = {}));
})(starter || (starter = {}));
//# sourceMappingURL=chatsCtl.js.map