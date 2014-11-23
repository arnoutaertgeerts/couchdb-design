(function () {
    'use strict';

    angular
        .module('home')
        .controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = [];

    function HomeCtrl() {
        var vm = this;

        vm.docs = [
            {
                id: '_design/filters',
                doc: {
                    filters: {
                        'structure': 'The structure function',
                        'type': 'The type filter'
                    },
                    views: {
                        'task': {
                            map: 'Query all tasks',
                            reduce: 'Reduce tasks'
                        },
                        'todo': {
                            map: 'Query all todos',
                            reduce: 'Reduce todos'
                        }
                    }
                }
            },
            {
                id: '_design/views',
                doc: {
                    filters: {
                        'structure2': 'The structure function',
                        'type2': 'The type filter'
                    },
                    views: {
                        'task2': {
                            map: 'Query all tasks',
                            reduce: 'Reduce tasks'
                        },
                        'todo2': {
                            map: 'Query all todos',
                            reduce: 'Reduce todos'
                        }
                    }
                }
            }
        ];
    }


})();
