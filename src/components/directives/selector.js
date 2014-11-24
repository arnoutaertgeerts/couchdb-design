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
            scope.changeName = changeName;
            scope.save = save;
            scope.size = size;
            scope.doc = {};

            //Initial navigation of the director
            scope.nav = {
                index: '@',
                type: '',
                name: '@'
            };

            scope.data = {
                name: ''
            };

            function pickDoc(doc) {
                scope.showFunctions = true;
                scope.showEditor = false;
                scope.doc = doc;

                scope.nav.index = scope.docs.indexOf(doc);
            }

            function changeName(name) {
                var newFunction = scope.docs[scope.nav.index][scope.nav.type][scope.nav.name];

                scope.docs[scope.nav.index][scope.nav.type][name] = newFunction;
                scope.docs[scope.nav.index][scope.nav.type][scope.nav.name] = undefined;
                delete scope.docs[scope.nav.index][scope.nav.type][scope.nav.name];

                scope.nav.name = name;
            }

            function pickFunction(type, value) {
                scope.showEditor = true;

                scope.nav.type = type;
                scope.nav.name = value;
                scope.data.name = value;

            }

            function addFunction(type, name) {
                var newFunction = {};

                //Check which type of function we need to add
                if (type == 'views') {
                    newFunction[name] = {
                                'map': '',
                                'reduce': ''
                    };
                } else {
                    newFunction[name] = '';
                }

                //Add the property if it does not exist already
                if(!scope.docs[scope.nav.index].hasOwnProperty(type)){
                    scope.docs[scope.nav.index][type] = {};
                }

                //Add the function to the right design document
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
