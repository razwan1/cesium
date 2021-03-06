/*global defineSuite*/
defineSuite([
    'Core/DeveloperError'
], function(
    DeveloperError
) {
    "use strict";
    /*global jasmine,describe,xdescribe,it,xit,expect,beforeEach,afterEach,beforeAll,afterAll,spyOn,runs,waits,waitsFor*/

    var name = 'DeveloperError';
    var testMessage = 'Testing';

    it('name and message', function() {
        var e = new DeveloperError(testMessage);

        expect(e.name).toEqual(name);
        expect(e.message).toEqual(testMessage);
    });

    it('toString', function() {
        var e = new DeveloperError(testMessage).toString();

        expect(e.indexOf(name + ': ' + testMessage)).toEqual(0);
        expect(e.indexOf('Core/DeveloperErrorSpec.js')).toBeGreaterThan(0);
    });
});
