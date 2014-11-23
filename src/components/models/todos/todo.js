(function() {
    'use strict';

    angular
        .module('todos')
        .factory('Todo', TodoModel);

    TodoModel.$inject = [];

    function TodoModel() {
        var factory = {};

        return factory;
    }

})();