(function () {
    'use strict';

    angular
        .module('authorization')
        .factory('Auth', Auth);

    Auth.$inject = [
        '$http',
        '$cookieStore',
        'PouchDB',
        'Access',
        'toaster',
        'COUCH'
    ];

    function Auth($http, $cookieStore, PouchDB, Access, toaster, COUCH) {
        var db = PouchDB(COUCH);
        
        var currentUser = $cookieStore.get('user') || { name: '', roles: ['anon']};

        $cookieStore.remove('user');

        function changeUser(user) {
            angular.extend(currentUser, user);
        }

        var factory = {
            authorize: authorize,
            isLoggedIn: isLoggedIn,
            login: login,
            logout: logout,            
            user: currentUser
        };

        return factory;

        function authorize(accessLevel, roles) {
            if (roles === undefined) {
                roles = currentUser.roles;
            }

            var authorizedRoles = Access[accessLevel];
            return _.intersection(authorizedRoles, currentUser.roles).length > 0;

        }

        function isLoggedIn(user) {
            if (user === undefined) {
                user = currentUser;
            }

            return user.roles.indexOf('anon') === -1;
        }

        function login(username, password) {
            return db.login(username, password).then(function(response) {                
                currentUser.name = username;
                angular.extend(currentUser, response);            
            });
        }

        function logout() {
            return db.logout().then(function () {
                changeUser({
                    name: '',
                    email: '',
                    roles: [
                        'anon'
                    ]
                });
            });
        }        
    }

})();