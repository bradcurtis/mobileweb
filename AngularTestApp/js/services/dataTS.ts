module starter.domain {

    
    export interface IdataTS {
        getAllUsers(): domain.User[];
        addUser(user: domain.User);
    }
    export class dataTS {
        lokiInst: Loki;
        idbAdapter: LokiIndexedAdapter;
        usersCollection: LokiCollection<starter.domain.User>;


        static $inject = ["$scope", "$rootScope", "$location"];
        constructor($scope: ng.IScope, $rootScope: ng.IRootScopeService) {

            this.lokiInst = new LokiConstructor("users", { autosave: true });
            this.usersCollection = this.lokiInst.addCollection<starter.domain.User>("users", { indices: "id" });
        }

        getAllUsers():domain.User[] {
            return this.usersCollection.data;
        }

        addUser(user: domain.User) {
            this.usersCollection.add(user);
        }
    }

    angular
        .module("starter.domain")
        .service("dataTS",
        dataTS);

}