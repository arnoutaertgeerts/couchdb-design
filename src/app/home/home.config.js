(function() {
    'use strict';

    angular
        .module('home')
        .config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
        $stateProvider.state('home', {
            url: '/home',
            views: {
                'main': {
                    controller: 'HomeCtrl',
                    controllerAs: 'vm',
                    templateUrl: 'app/home/home.tpl.html'
                }
            },
            data: {
                pageTitle: 'Home',
                access: 'public'
            }
        });
    }

})();