(function(){
    var contactManager = angular.module('contactManager', ['ngRoute']);

    contactManager.config(function($routeProvider) {
        $routeProvider
            .when('/contactlist', {
                templateUrl: 'app/views/contacts.html',
                controller: 'contactsController'
            })
            .when('/add', {
                templateUrl: 'app/views/addOrEditContact.html',
                controller: 'addEditController',
                params: 'Add'
            })
            .when('/edit', {
                templateUrl: 'app/views/addOrEditContact.html',
                controller: 'addEditController',
                params: 'Edit'
            })
            .otherwise({
                redirectTo: '/contactlist'
            });
    });

})();