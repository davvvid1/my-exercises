describe("exercise5", function () {
    'use strinc'
    var DAOMock;
    beforeEach(module('exerciseApp'));

    var controller;
    var sequence = 1;
    var candie =
    {   id: sequence++,
        name: 'Krowka',
        factory: 'Wawel'
    }


    beforeEach(inject(function ($controller) {
        DAOMock = jasmine.createSpyObj('CandyDAO', ['get', 'save', 'delete']);
        DAOMock.get.andReturn({
            then: function (callback) {
                callback(candie);
                return this;
            }
        });
        controller = $controller('BrainCandyDetailsCtrl', {CandyDAO: DAOMock});


    }));

    describe("BrainCandyDetailsCtrl", function () {
        it("should call PostDAO.get()", function () {
            expect(DAOMock.get).toHaveBeenCalled();
        });
        it("should defined details", function () {
            expect(controller.details).toBeDefined();
        });

        it("should be instance of Object", function () {
            expect(controller.details instanceof Object).toBeTruthy();
        });

        it("should 'list' has 'id', 'name' and 'factory' properties", function () {
            expect(controller.details.id).toBeDefined();
            expect(controller.details.name).toBeDefined();
            expect(controller.details.factory).toBeDefined();
        });
        describe("newCandy()", function () {
            it("should call PostDAO.save()", function () {
                controller.newCandy();
                expect(DAOMock.save).toHaveBeenCalled();
            });
        });
        describe("delCandy()", function () {
            it("should call PostDAO.delete()", function () {
                controller.delCandy();
                expect(DAOMock.delete).toHaveBeenCalled();
            });
        });


    });


});