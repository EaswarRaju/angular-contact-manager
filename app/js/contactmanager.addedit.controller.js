/**
 * Created by Easwar Raju on 12/20/2015.
 */

(function(){
    angular.module('contactManager').controller('addEditController', ['$scope', '$location', 'contactsService', function($scope, $location, contactsService){
        $scope.contactForm = angular.copy(contactsService.contactManager.contactFormData);

        $scope.updateContactList = function(contact){
            if (contact.isNew){
                $scope.contactForm.id = contactsService.contactManager.contacts.length ? (contactsService.contactManager.contacts[contactsService.contactManager.contacts.length - 1].id + 1) : 1;
                $scope.contactForm.imgName = contactsService.getRand();
                contactsService.contactManager.contacts.push($scope.contactForm);
            }
            else {
                contactsService.contactManager.contactFormData.name = $scope.contactForm.name;
                contactsService.contactManager.contactFormData.tel = $scope.contactForm.tel;
                contactsService.contactManager.contactFormData.email = $scope.contactForm.email;
            }
            $location.path('/contactlist');
        };
    }]);
})();