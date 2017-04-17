/**
 * Created by daviD on 12/04/2017.
 */
define(['app','underscore','jquery'], function(app,_,$) {

    describe('app', function() {

        it('requires ["ngRoute","controllers","services","routes"] ', function() {
            expect(app.requires).toEqual(jasmine.arrayContaining(["ngRoute","controllers","services","routes"]));
        });
    });

});