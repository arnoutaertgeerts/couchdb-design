(function () {
    'use strict';

    angular
        .module('app', [
            //Pages
            'home',
            'docs',
            'login',
            //Plugins
            'pouchdb',
            'formFor',
            'formFor.bootstrapTemplates',
            'authorization',
            'toaster',
            'ui.bootstrap',
            'ui.router',
            'ngSanitize',
            'cfp.loadingBar',
            //Directives
            'ui-elements'
        ]);



})();
