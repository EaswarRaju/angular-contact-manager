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
        }, function(){
            var data = [
                {
                    "id": 1,
                    "name" : "Terrence S. Hatfield",
                    "tel": "651-603-1723",
                    "email": "TerrenceSHatfield@rhyta.com"
                },
                {
                    "id": 2,
                    "name" : "Chris M. Manning",
                    "tel": "513-307-5859",
                    "email": "ChrisMManning@dayrep.com"
                },
                {
                    "id": 3,
                    "name" : "Ricky M. Digiacomo",
                    "tel": "918-774-0199",
                    "email": "RickyMDigiacomo@teleworm.us"
                },
                {
                    "id": 4,
                    "name" : "Michael K. Bayne",
                    "tel": "702-989-5145",
                    "email": "MichaelKBayne@rhyta.com"
                },
                {
                    "id": 5,
                    "name" : "John I. Wilson",
                    "tel": "318-292-6700",
                    "email": "JohnIWilson@dayrep.com"
                },
                {
                    "id": 6,
                    "name" : "Rodolfo P. Robinett",
                    "tel": "803-557-9815",
                    "email": "RodolfoPRobinett@jourrapide.com"
                }
            ];
            _self.contactManager.contacts = data.map(function (contact) {
                contact.imgName = _self.getRand();
                return contact;
            });
        });

    }]);
})();