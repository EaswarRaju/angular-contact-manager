/**
 * Created by Easwar Raju on 12/21/2015.
 */

describe ('test suite for adding / editing contact', function(){

    beforeEach(module('contactManager'));

    var contactsService, _addEditController, scope, httpBackend;

    beforeEach(inject(function(_contactsService_, _$rootScope_, $controller){
        contactsService = _contactsService_;
        scope = _$rootScope_.$new();

        _addEditController = $controller('addEditController', {
            $scope: scope
        });

    }));

    it ('should create controller instance', function (){
        expect(_addEditController).toBeDefined();
    });

    it('should create new contact', function(){
        scope.contactForm = {
            isNew : true
        };
        scope.updateContactList(scope.contactForm);
        expect(contactsService.contactManager.contacts.length).toEqual(1);
    });

    it('should edit existing contact', function(){
        scope.contactForm = {
            name: 'new name',
            isNew : false
        };
        contactsService.contactManager.contacts = [{
            name: 'old name'
        }];
        scope.updateContactList(scope.contactForm);
        expect(contactsService.contactManager.contacts.length).toEqual(1);
        expect(contactsService.contactManager.contactFormData.name).toEqual('new name');
    });
});