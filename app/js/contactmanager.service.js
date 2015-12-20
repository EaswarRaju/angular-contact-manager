/**
 * Created by Easwar Raju on 12/20/2015.
 */

(function(){
    angular.module('contactManager').service('contactsService', ['$http', function ($http) {

        var _self = this;

        this.contactManager = {
            contacts : [],
            contactFormData : {
                name: null,
                tel: null,
                email: null,
                id : null
            }
        };

        var getContactList = function(){
            return $http({
                url : 'app/model/contacts.json',
                method : 'get'
            });
        };

        this.getRand = function(){
            return Math.ceil(Math.random() * 15);
        };

        getContactList().then(function(response){
            _self.contactManager.contacts = response.data.map(function (contact) {
                contact.imgName = _self.getRand();
                return contact;
            });
        });

    }]);
})();