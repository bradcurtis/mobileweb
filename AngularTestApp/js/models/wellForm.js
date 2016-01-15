var starter;
(function (starter) {
    var domain;
    (function (domain) {
        var mine = (function () {
            function mine(name, id, areaproject) {
                this.name = name;
                this.id = id;
                this.areaproject = areaproject;
            }
            return mine;
        })();
        domain.mine = mine;
        var area = (function () {
            function area(name, id, projectname) {
                this.name = name;
                this.id = id;
                this.projectname = projectname;
            }
            return area;
        })();
        domain.area = area;
        var projectName = (function () {
            function projectName(name, id) {
                this.name = name;
                this.id = id;
            }
            return projectName;
        })();
        domain.projectName = projectName;
        var wellForm = (function () {
            function wellForm(date, mine, crewname, ponumber, supervisorcount, crewmembercount, prejobbrief, activequipment, vendor) {
                this.date = date;
                this.mine = mine;
                this.crewname = crewname;
                this.ponumber = ponumber;
                this.supervisorcount = supervisorcount;
                this.crewmembercount = crewmembercount;
                this.prejobbrief = prejobbrief;
                this.activequipment = activequipment;
                this.vendor = vendor;
            }
            return wellForm;
        })();
        domain.wellForm = wellForm;
    })(domain = starter.domain || (starter.domain = {}));
})(starter || (starter = {}));
//# sourceMappingURL=wellForm.js.map