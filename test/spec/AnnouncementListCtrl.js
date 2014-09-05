describe("BlogPostCtrl", function () {
    'use strinc'
    var DAOMock;
    beforeEach(module('exerciseApp'));

    var controller;

    beforeEach(inject(function ($controller) {
        DAOMock = jasmine.createSpyObj('AnnouncementDAO', ['query']);
        DAOMock.query.andReturn({
            then: function (callback) {
                callback([
                    {   id: 1,
                        title: 'Announcement 1',
                        description: 'I want to buy new car...'
                    },
                    {   id: 2,
                        title: 'Announcement 2',
                        description: 'I want to buy new bike...'
                    },
                    {   id: 3,
                        title: 'Announcement 3',
                        description: 'I want to buy new-old Fiat 126 p...'
                    },
                    {   id: 4,
                        title: 'Announcement 4',
                        description: 'I want to buy something to eat...'
                    },
                ]);
                return this;
            }
        });
        controller = $controller('AnnouncementListCtrl', {AnnouncementDAO: DAOMock});


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
            expect(controller.posts[0].title).toBeDefined();
            expect(controller.posts[0].description).toBeDefined();
        });
        it("should call PostDAO.query()", function () {
            expect(DAOMock.query).toHaveBeenCalled();
        });
    });


});
