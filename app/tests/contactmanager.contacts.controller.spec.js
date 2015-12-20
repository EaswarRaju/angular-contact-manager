/**
 * Created by Easwar Raju on 12/21/2015.
 */

describe ('test suite for getting contacts list', function(){

    beforeEach(module('contactManager'));

    var contactsService, _contactsController, scope, httpBackend, _location;

    beforeEach(inject(function(_contactsService_, _$rootScope_, $controller, $httpBackend, $location){
        contactsService = _contactsService_;
        scope = _$rootScope_.$new();
        httpBackend = $httpBackend;
        _location = $location;

        _contactsController = $controller('contactsController', {
            $scope: scope
        });

    }));

    it ('should create controller instance', function (){
        expect(_contactsController).toBeDefined();
    });

    it ('should retrieve json data', function (){
        httpBackend.expectGET('app/model/contacts.json').respond(200, [{}]);
        httpBackend.flush();
    });

    it('should remove existing contact', function(){
        httpBackend.expectGET('app/model/contacts.json').respond(200, [{}, {}, {}]);
        httpBackend.flush();
        scope.removeContact(1);
        expect(contactsService.contactManager.contacts.length).toEqual(2);
    });

    it('should navigate to edit /add contact page - when new contact button is clicked', function(){
        httpBackend.expectGET('app/model/contacts.json').respond(200, [{}, {}, {}]);
        httpBackend.flush();
        scope.editContact(true);
        expect(_location.path()).toEqual('/add');
    });

    it('should navigate to edit /add contact page - when edit contact button is clicked', function(){
        httpBackend.expectGET('app/model/contacts.json').respond(200, [{}, {}, {}]);
        httpBackend.flush();
        scope.editContact(false, {});
        expect(_location.path()).toEqual('/edit');
    });
});