(function() {
    'use strict';

    angular
        .module('model.designDocs')
        .factory('DesignDocs', DesignDocsFactory);

    DesignDocsFactory.$inject = [
        '$q',
        'COUCH'
    ];

    function DesignDocsFactory($q, COUCH) {
        function factory() {
            var db = PouchDB(COUCH);

            var Model = InitModel;

            Model.db = db;
            Model.query = query;
            Model.all = all;

            Model.prototype.$save = save;
            Model.prototype.$remove = remove;

            Model.promiseMethod = promiseMethod;

            return Model;

            function InitModel(data) {
                angular.extend(this, data);
            }

            function query(fun, options) {
                return db.query(fun, options)
            }

            function all() {
                return db.allDocs({
                    include_docs: true,
                    startkey: '_design/'
                }).then(promiseMethod)
            }

            function save() {
                var model = this;

                var deferred = $q.defer();

                if (!model._id) {
                    return db.post(model).then(function(res) {
                        model._rev = res.rev;
                        $rootScope.$emit('model:create');
                        deferred.resolve(model);
                    })
                } else {
                    return db.put(model).then(function(res) {
                        model._rev = res.rev;
                        deferred.resolve(model);
                        $rootScope.$emit('model:update');
                    })
                }

                return deferred.promise;
            }

            function remove() {
                return db.remove(this).then(function(res) {
                    $rootScope.$emit('model:remove');
                })
            }

            function promiseMethod(promise) {
                var result;
                if (promise.rows.length > 1) {
                    result = [];

                    for (var i = 0; i < promise.rows.length; i++) {
                        result.push(new Model(promise.rows[i].doc));
                    }

                    return result;
                }
                else {
                    result = new Model(promise.rows[0].doc);
                    return result;
                }
            }
        }

        return factory;
    }

})();
