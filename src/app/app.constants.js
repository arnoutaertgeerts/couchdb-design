(function() {
    'use strict';

    var remoteHoodie = 'http://127.0.0.1:6004';
    var remoteCouch = 'https://housemt.couchappy.com/todos';

    angular
        .module('app')
        .constant('HOODIE', remoteHoodie)
        .constant('COUCH', remoteCouch);

})();