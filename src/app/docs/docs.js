(function() {
    'use strict';

    angular
        .module('docs')
        .controller('DocsCtrl', DocsCtrl);

    DocsCtrl.$inject = [
        '$scope',
        'DesignDocs'
    ];

    function DocsCtrl($scope, DesignDocs) {
        var vm = this;

        DesignDocs().all().then(function(res) {
            console.log(res);
            vm.docs = res;
            $scope.$apply();

            vm.docs[0].$save();
        });

        vm.dropDownDemoItems = [
            'The first choice!',
            'And another choice for you.',
            'but wait! A third!'
        ];

        vm.size = function(obj) {
            var size = 0, key;
            for (key in obj) {
                if (obj.hasOwnProperty(key)) size++;
            }
            return size;
        };

    }

})();
