var starter;
(function (starter) {
    var services;
    (function (services) {
        var UserService = (function () {
            function UserService($q, $rootScope, lokijs) {
                this.loki = lokijs;
                this.q = $q;
                this.rootservice = $rootScope;
            }
            UserService.$inject = ["$q", "$rootScope", "lokijs"];
            return UserService;
        })();
        services.UserService = UserService;
    })(services = starter.services || (starter.services = {}));
})(starter || (starter = {}));
