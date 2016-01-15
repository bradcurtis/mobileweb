module app.common {
    export interface IDataService {
        sayHello(text: string): string;
        sayGoodbye(text: string): string
        addUser(user: starter.domain.User);
        getUsers(): starter.domain.User[];
        addForm(form: starter.domain.IWellForm);
        deleteForm(form: starter.domain.IWellForm);
        getAllForms(): starter.domain.IWellForm[];
        getVendor(): starter.domain.Ivendor[];

    }
    export class DataService implements IDataService {
        userDB: Loki;
        formsDB: Loki;
        vendorDB: Loki;
       // idbAdapter: LokiIndexedAdapter;
        usersCollection: LokiCollection<starter.domain.User>;
        formsCollection: LokiCollection<starter.domain.IWellForm>;
        vendorCollection: LokiCollection<starter.domain.Ivendor>;

        static $inject = ['$http','Loki'];
        constructor(private $http: ng.IHttpService,private Loki:any) {
         
            this.userDB = new Loki('userDB',
                {
                    autosave: true,
                    autosaveInterval: 1000
                });
            this.formsDB = new Loki('wellDB',
                {
                    autosave: true,
                    autosaveInterval: 1000
                });
            this.vendorDB = new Loki('vendorDB',
                {
                    autosave: true,
                    autosaveInterval: 1000
                });

            this.usersCollection = this.userDB.addCollection<starter.domain.User>("users", { indices: "id" });
            this.formsCollection = this.formsDB.addCollection<starter.domain.IWellForm>("wells", { indices: "id" });
            this.vendorCollection = this.vendorDB.addCollection<starter.domain.Ivendor>("vendor", { indices: "id" });

        }

        addUser(user: starter.domain.User) {
            this.usersCollection.add(user);
        }
        getUsers():starter.domain.User[]{
            return this.usersCollection.data;
        }
        getAllForms(): starter.domain.IWellForm[] {
            return this.formsCollection.data;
        }
        deleteForm(form: starter.domain.IWellForm){
            this.formsCollection.remove(form);
        }
        addForm(form: starter.domain.IWellForm) {
            this.formsCollection.add(form);
        }

        getVendor(): starter.domain.Ivendor[] {
           // return this.vendorCollection.data;   For testing commented out
            return this.TestVendor();
        }

        sayHello(text: string): string {
            return "hello" + text;
        };
        sayGoodbye(text: string): string {
            return "goodbye"+ text;
        };

        public TestVendor():starter.domain.Ivendor[]{
            
            var brief = new starter.domain.preJobBrief(" Vendor 1 Job Brief", "1");
            var brief2 = new starter.domain.preJobBrief("Vendor 1 Job Brief2", "2");
            var brief3 = new starter.domain.preJobBrief(" Vendor 2 Job Brief", "1");
            var brief4 = new starter.domain.preJobBrief("Vendor 2 Job Brief2", "2");
            var active1: starter.domain.activeEquipment = new starter.domain.activeEquipment("active euqipment", "1");
            var active2: starter.domain.activeEquipment = new starter.domain.activeEquipment("active euqipment2", "2");
            var active3: starter.domain.activeEquipment = new starter.domain.activeEquipment("active euqipment Vendor2", "1");
            var active4: starter.domain.activeEquipment = new starter.domain.activeEquipment("active euqipment2 Vendor2", "2");

            var activelist = [active1, active2];
            var activelist2 = [active3, active4];
            var brieflist = [brief, brief2];
            var brieflist2 = [brief3, brief4];

            
            
            var vendor = new starter.domain.vendor("Vendor 1", "vendor1", activelist, brieflist);
            var vendor2 = new starter.domain.vendor("Vendor 2", "vendor2", activelist2, brieflist2);

            return [vendor, vendor2];

            


        };





    }
    
    
    angular.module("app.common", []);
    
    angular
        .module("starter")
        .service("dataService",
        DataService);
}