describe("Server App Integration", function(){
    beforeEach(module("serverApp2"));

    var ctrl, mockBackend;

    beforeEach(inject(function($controller, $httpBackend){
        mockBackend = $httpBackend;
        mockBackend.expectGET("/api/note").respond(404, {msg: "Not found"});
        ctrl = $controller("MainCtrl");
        // At this point, a server request will have been made
    }));

    it("should handle error while loading items", function(){
        // Initially, before the server responds,
        // The items should be empty
        expect(ctrl.items).toEqual([]);

        // Simulate a server response
        mockBackend.flush();

        // No items from server, only an error
        // So items should still empty
        expect(ctrl.items).toEqual([]);
        // and check the error message
        expect(ctrl.errorMessage).toEqual("Not found");
    });

    afterEach(function() {
        // Ensure that all expects set on the $httpBackend
        // were actually called
        mockBackend.verifyNoOutstandingExpectation();
        // Ensure that all requests to the server
        // have actually responded (using flush())
        mockBackend.verifyNoOutstandingRequest();
    });
});
