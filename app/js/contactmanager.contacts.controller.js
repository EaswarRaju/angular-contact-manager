/**
 * Created by Easwar Raju on 12/20/2015.
 */

(function(){
    angular.module('contactManager').controller('contactsController', ['$scope', '$location', 'contactsService', function($scope, $location, contactsService){

        $scope.contactModel = contactsService.contactManager;

        $scope.removeContact = function(index){
            $scope.contactModel.contacts.splice(index, 1);
        };

        $scope.editContact = function(isNew, contact){
            $scope.contactModel.contactFormData.isNew = isNew;
            if (isNew) {
                $scope.contactModel.contactFormData = { isNew : isNew};
                $location.path('/add');
            }
            else {
                $scope.contactModel.contactFormData = contact;
                $location.path('/edit');
            }
        };

    }]);
})();