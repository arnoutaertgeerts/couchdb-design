(function() {
    'use strict';

    angular
        .module('ui-elements')
        .directive('selector', selector);

    function selector() {

        var directive = {
            link: link,
            templateUrl: 'components/directives/selector.html',
            restrict: 'E',
            scope: {
                docs: '=docs'
            }
        };

        return directive;

        function link(scope, element, attrs) {
            scope.showFunctions = false;
            scope.showEditor = false;
            scope.pickDoc = pickDoc;
            scope.pickFunction = pickFunction;
            scope.addFunction = addFunction;
            scope.save = save;
            scope.size = size;
            scope.doc = {};

            scope.nav = {
                index: 0,
                type: '',
                name: ''
            };

            function pickDoc(doc) {
                scope.showFunctions = true;
                scope.showEditor = false;
                scope.doc = doc;

                scope.nav.index = scope.docs.indexOf(doc);
            }

            function changeName(name, nav, key) {

            }

            function pickFunction(type, value) {
                scope.showEditor = true;

                scope.nav.type = type;
                scope.nav.name = value;
            }

            function addFunction(type, name) {
                var newFunction = {};

                if (type == 'views') {
                    newFunction[name] = {
                                'map': '',
                                'reduce': ''
                    };
                } else {
                    newFunction[name] = '';
                }

                angular.extend(scope.docs[scope.nav.index][type], newFunction);

            }

            function size (obj) {
                var size = 0, key;
                for (key in obj) {
                    if (obj.hasOwnProperty(key)) size++;
                }
                return size;
            }

            function save(doc) {
                doc.$save();
            }
        }
    }

})();
