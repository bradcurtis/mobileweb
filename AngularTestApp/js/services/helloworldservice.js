var app;
(function (app) {
    var common;
    (function (common) {
        var DataService = (function () {
            function DataService($http, Loki) {
                this.$http = $http;
                this.Loki = Loki;
                this.userDB = new Loki('userDB', {
                    autosave: true,
                    autosaveInterval: 1000
                });
                this.formsDB = new Loki('wellDB', {
                    autosave: true,
                    autosaveInterval: 1000
                });
                this.vendorDB = new Loki('vendorDB', {
                    autosave: true,
                    autosaveInterval: 1000
                });
                this.usersCollection = this.userDB.addCollection("users", { indices: "id" });
                this.formsCollection = this.formsDB.addCollection("wells", { indices: "id" });
                this.vendorCollection = this.vendorDB.addCollection("vendor", { indices: "id" });
            }
            DataService.prototype.addUser = function (user) {
                this.usersCollection.add(user);
            };
            DataService.prototype.getUsers = function () {
                return this.usersCollection.data;
            };
            DataService.prototype.getAllForms = function () {
                return this.formsCollection.data;
            };
            DataService.prototype.deleteForm = function (form) {
                this.formsCollection.remove(form);
            };
            DataService.prototype.addForm = function (form) {
                this.formsCollection.add(form);
            };
            DataService.prototype.getVendor = function () {
                // return this.vendorCollection.data;   For testing commented out
                return this.TestVendor();
            };
            DataService.prototype.sayHello = function (text) {
                return "hello" + text;
            };
            ;
            DataService.prototype.sayGoodbye = function (text) {
                return "goodbye" + text;
            };
            ;
            DataService.prototype.TestVendor = function () {
                var brief = new starter.domain.preJobBrief(" Vendor 1 Job Brief", "1");
                var brief2 = new starter.domain.preJobBrief("Vendor 1 Job Brief2", "2");
                var brief3 = new starter.domain.preJobBrief(" Vendor 2 Job Brief", "1");
                var brief4 = new starter.domain.preJobBrief("Vendor 2 Job Brief2", "2");
                var active1 = new starter.domain.activeEquipment("active euqipment", "1");
                var active2 = new starter.domain.activeEquipment("active euqipment2", "2");
                var active3 = new starter.domain.activeEquipment("active euqipment Vendor2", "1");
                var active4 = new starter.domain.activeEquipment("active euqipment2 Vendor2", "2");
                var activelist = [active1, active2];
                var activelist2 = [active3, active4];
                var brieflist = [brief, brief2];
                var brieflist2 = [brief3, brief4];
                var vendor = new starter.domain.vendor("Vendor 1", "vendor1", activelist, brieflist);
                var vendor2 = new starter.domain.vendor("Vendor 2", "vendor2", activelist2, brieflist2);
                return [vendor, vendor2];
            };
            ;
            DataService.$inject = ['$http', 'Loki'];
            return DataService;
        })();
        common.DataService = DataService;
        angular.module("app.common", []);
        angular
            .module("starter")
            .service("dataService", DataService);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
//# sourceMappingURL=helloworldservice.js.map