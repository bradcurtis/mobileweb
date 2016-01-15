var starter;
(function (starter) {
    var domain;
    (function (domain) {
        var dataTS = (function () {
            function dataTS($scope, $rootScope) {
                this.lokiInst = new LokiConstructor("users", { autosave: true });
                this.usersCollection = this.lokiInst.addCollection("users", { indices: "id" });
            }
            dataTS.prototype.getAllUsers = function () {
                return this.usersCollection.data;
            };
            dataTS.prototype.addUser = function (user) {
                this.usersCollection.add(user);
            };
            dataTS.$inject = ["$scope", "$rootScope", "$location"];
            return dataTS;
        })();
        domain.dataTS = dataTS;
        angular
            .module("starter.domain")
            .service("dataTS", dataTS);
    })(domain = starter.domain || (starter.domain = {}));
})(starter || (starter = {}));
//# sourceMappingURL=dataTS.js.map