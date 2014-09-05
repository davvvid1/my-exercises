describe("exercise1", function () {
    beforeEach(module('exerciseApp'));
    var controller;

    beforeEach(inject(function ($controller) {
        controller = $controller('BlogPostCtrl', {});
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
    });
});//
