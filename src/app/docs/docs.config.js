(function() {
    'use strict';

    angular
        .module('docs')
        .config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {

        $stateProvider.state('docs', {
            url: '/docs',
            views: {
                'main': {
                    controller: 'DocsCtrl',
                    controllerAs: 'vm',
                    templateUrl: 'app/docs/docs.tpl.html'
                }
            },
            data: {
                pageTitle: 'Edit Design Docs',
                access: 'admin'
            }
        });
    }

})();