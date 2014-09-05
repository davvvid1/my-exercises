describe("BlogPostCtrl", function () {
    'use strinc'
    var DAOMock;
    beforeEach(module('exerciseApp'));

    var controller;

    beforeEach(inject(function ($controller) {
        DAOMock = jasmine.createSpyObj('PostDAO', ['query']);
        DAOMock.query.andReturn({
            then: function (callback) {
                callback([
                    {   id: 1,
                        name: 'Stefan',
                        pets: 'Sfinksu'
                    },
                    {   id: 2,
                        name: 'Gienia',
                        pets: 'Krowcia'
                    }
                ]);
                return this;
            }
        });
        controller = $controller('BlogPostCtrl', {PostDAO: DAOMock});


    }));

    describe("BlogPostCtrl", function () {
        it("should defined posts", function () {
            expect(controller.posts).toBeDefined();
        });
        it("should be instance of Array", function () {
            expect(controller.posts instanceof Array).toBeTruthy();
        });
        it("should 'posts' has 'id', 'name' and 'pets' properties", function () {
            expect(controller.posts[0].id).toBeDefined();
            expect(controller.posts[0].name).toBeDefined();
            expect(controller.posts[0].pets).toBeDefined();
        });
        it("should call PostDAO.query()", function () {
            expect(DAOMock.query).toHaveBeenCalled();
        });
    });


});

