angular.module('service.data', [])

.factory('UserService', function ($q,Loki,$rootScope) {
    var _dbuser;
    var _dbform
    var _users;
    var _forms;



    // form database information
    function initFormDB() {
        var idbAdapter = new LokiIndexedAdapter('loki');
        _dbform = new Loki('formDB',
                {
                    autosave: true,
                    autosaveInterval: 1000, // 1 second
                    adapter: idbAdapter
                });

        var options = {
            form: {
                proto: Object,
                inflate: function (src, dst) {
                    var prop;
                    for (prop in src) {
                        if (prop === 'Date') {
                            dst.Date = new Date(src.Date);
                        } else {
                            dst[prop] = src[prop];
                        }
                    }
                }
            }
        };
        _dbform.loadDatabase(options, function () {
            _forms = _dbform.getCollection('forms');
            if (_forms) {
                _dbform.removeCollection('forms')
            }

            _forms = _dbform.addCollection('forms');



        });
    };

    function addForm(form) {
      
        _forms.insert(form);
        var args = {};
        args.forms = _forms.data;
        $rootScope.$broadcast('upadtedForm', args);
      

    };
    function updateform(form) {
        _forms.update(form);
    };

    function deleteform(form) {
        _forms.remove(form);
    };
    function getAllForms() {
        return $q(function (resolve, reject) {


            resolve(_forms.data);
        });
    };




    //user database functions

    function initUserDB() {
        var idbAdapter = new LokiIndexedAdapter('loki');
        _dbuser = new Loki('userDB',
                {
                    autosave: true,
                    autosaveInterval: 1000, // 1 second
                    adapter: idbAdapter
                });

        var options = {
            users: {
                proto: Object,
                inflate: function (src, dst) {
                    var prop;
                    for (prop in src) {
                        if (prop === 'Date') {
                            dst.Date = new Date(src.Date);
                        } else {
                            dst[prop] = src[prop];
                        }
                    }
                }
            }
        };
        _dbuser.loadDatabase(options, function () {
            _users = _dbuser.getCollection('users');
            if (_users) {
                _dbuser.removeCollection('users')
            }


            _users = _dbuser.addCollection('users');



        });
    };

    function addUser(user) {
        _users.insert(user);
        var args = {};
        args.users = _users.data;
        $rootScope.$broadcast('button-fired', args);
       
    };
    function updateuser(user) {
        _users.update(user);
    };

    function deleteBirthday(user) {
        _users.remove(user);
    };
    function getAllUsers() {
        return $q(function (resolve, reject) {


            resolve(_users.data);
        });
    };



    return {
        //start user database information
        initUserDB: initUserDB,
        addUser: addUser,
        getAllUsers: getAllUsers,

        //start form database information
        initFormDB: initFormDB,
            addForm: addForm,
            getAllForms: getAllForms
        
    };
   
});

