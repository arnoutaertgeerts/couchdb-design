(function() {
    'use strict';

    angular
        .module('model.user')
        .factory('User', User);

    User.$inject = [
        'hoodieStore'
    ];

    function User() {
        function factory(username) {
            var user = {
                'name': username
            };
            angular.extend(this, user);
        }

        return factory;
    }

})();
