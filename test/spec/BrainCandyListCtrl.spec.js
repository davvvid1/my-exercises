describe("exercise5", function () {
    'use strinc'
    var DAOMock;
    beforeEach(module('exerciseApp'));

    var controller;
    var sequence = 1;
    var candies = {};
    [
        {   id: sequence++,
            name: 'Krowka',
            factory: 'Wawel'
        },
        {   id: sequence++,
            name: 'Tiki-taki',
            factory: 'Wawel'
        },
        {   id: sequence++,
            name: 'Michalki',
            factory: 'Wawel'
        }
    ].every(function (value) {
            candies[value.id] = value;
            return true;
        });

    beforeEach(inject(function ($controller) {
        DAOMock = jasmine.createSpyObj('CandyDAO', ['query']);
        DAOMock.query.andReturn({
            then: function (callback) {
                callback(candies);
                return this;
            }
        });
        controller = $controller('BrainCandyListCtrl', {CandyDAO: DAOMock});


    }));

    describe("PostListCtrl", function () {
        it("should call PostDAO.query()", function () {
            expect(DAOMock.query).toHaveBeenCalled();
        });
        it("should defined list", function () {
            expect(controller.list).toBeDefined();
        });
        it("should be instance of Object", function () {
            expect(controller.list instanceof Object).toBeTruthy();
        });
        it("should 'list' has 'id', 'name' and 'pets' properties", function () {
            expect(controller.list[1].id).toBeDefined();
            expect(controller.list[1].name).toBeDefined();
            expect(controller.list[1].factory).toBeDefined();

        });

    });


});