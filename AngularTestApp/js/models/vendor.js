var starter;
(function (starter) {
    var domain;
    (function (domain) {
        var vendor = (function () {
            function vendor(vendorname, vendorid, activeequipment, prejobbrief) {
                this.vendorname = vendorname;
                this.vendorid = vendorid;
                this.activeequipment = activeequipment;
                this.prejobbrief = prejobbrief;
            }
            return vendor;
        })();
        domain.vendor = vendor;
        var activeEquipment = (function () {
            function activeEquipment(equipmentname, equipmentid) {
                this.equipmentname = equipmentname;
                this.equipmentid = equipmentid;
            }
            return activeEquipment;
        })();
        domain.activeEquipment = activeEquipment;
        var preJobBrief = (function () {
            function preJobBrief(briefname, briefid) {
                this.briefname = briefname;
                this.briefid = briefid;
            }
            return preJobBrief;
        })();
        domain.preJobBrief = preJobBrief;
    })(domain = starter.domain || (starter.domain = {}));
})(starter || (starter = {}));
//# sourceMappingURL=vendor.js.map