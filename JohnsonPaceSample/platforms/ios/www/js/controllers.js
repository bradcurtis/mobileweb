angular.module('starter.controllers', [])

.controller('DashCtrl', function ($scope, $rootScope, $location,UserService) {
    $scope.user;
//onclick event
    $scope.signIn = function signIn(user) {
     
        UserService.addUser(user);
        $location.path("/tab/chats");
       
       
    }
})

.controller('TabCtrl', function ($scope,$rootScope,UserService) {
    $scope.displaySearchTab = false;
    $scope.loggedinUser;
    //UserService.initUserDB();
    $rootScope.$on('upadtedForm', function (event, args) {
        $scope.wells = args.forms;
    });
    $rootScope.$on("button-fired", function (event, args) {
        $scope.displaySearchTab = true;
        $scope.loggedinUser = args.users[0];
       
      
    });
})

.controller('ChatsCtrl', function ($scope,Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }


})

.controller('ChatDetailCtrl', function ($scope, $state,$stateParams, Chats, UserService) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function ($scope, $state,$rootScope, filterFilter, Chats, UserService) {
    $scope.vendors = Chats.all();
    $scope.selectedVendors = function selectedVendors() {
        return filterFilter($scope.vendors, { selected: true });
    };

    $scope.newTask = function (well, vendors) {
        var obj = well;
        //obj["title"] = $scope.title;
        obj["vendors"] = $scope.selectedVendors();
        UserService.addForm(obj);

        // Get all birthday records from the database.
       /* UserService.getAllForms()
                        .then(function (forms) {
                           
                            $scope.forms = forms;

                            $scope.well = {};



                            angular.forEach($scope.vendors, function (vendor) {
                                vendor.selected = false;
                            });

                           
                        });*/

        $state.go('tab.chats');

    };

    $scope.settings = {
    enableFriends: true
  };



});
