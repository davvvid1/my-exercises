describe("exercise4", function () {
    'use strinc'
    var DAOMock;
    beforeEach(module('exerciseApp'));

    var controller;

    beforeEach(inject(function ($controller) {
        DAOMock = jasmine.createSpyObj('PostDAO', ['get']);
        DAOMock.get.andReturn({
            then: function (callback) {
                callback([
                    {   id: 1,
                        name: 'Stefan',
                        pets: 'Sfinksu'
                    },
                    {   id: 2,
                        name: 'Gienia',
                        pets: 'Krowcia'
                    },
                    {   id: 3,
                        name: 'Erlang',
                        pets: 'Square'
                    }
                ]);
                return this;
            }
        });
        controller = $controller('PostDetailsCtrl', {PostDAO: DAOMock});


    }));

    describe("PostDetailsCtrl", function () {
        it("should defined posts", function () {
            expect(controller.details).toBeDefined();
        });
        it("should be instance of Array", function () {
            expect(controller.details instanceof Array).toBeTruthy();
        });
        it("should 'posts' has 'id', 'name' and 'pets' properties", function () {
            expect(controller.details[0].id).toBeDefined();
            expect(controller.details[0].name).toBeDefined();
        });
        it("should call PostDAO.query()", function () {
            expect(DAOMock.get).toHaveBeenCalled();
        });
    });


});