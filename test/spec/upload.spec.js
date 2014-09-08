describe("exercise9", function () {
    'use strict'
    beforeEach(module('ngflowApp'));
    var controller;
    var flowMock;
    var msg = '{"title":"Congratulations !","msg":"You just successfully upload images using ng-flow & read response message from mocked server.","url":"images/desktop.png"}';

    beforeEach(inject(function ($controller) {

        flowMock = jasmine.createSpyObj('$flow', ['upload']);
        controller = $controller('uploadCtrl', {});


    }));
    it("should flowCompleteFlag have been defined", function () {
        expect(controller.flowCompleteFlag).toBeDefined;
    });
    describe("startUpload()", function () {

        it("should call $flow.upload()", function () {
            controller.startUpload(flowMock);
            expect(flowMock.upload).toHaveBeenCalled();
        });
    });
    describe("fileSuccess()", function () {
        it("should image has 'title', 'msg' and 'url' atributes", function () {
            controller.fileSuccess(undefined, msg);
            expect(controller.image.title).toBeDefined;
            expect(controller.image.msg).toBeDefined;
            expect(controller.image.url).toBeDefined;
        });
    });
    describe("flowComplete()", function () {
        it("should set atribute 'flowCompleteFlag' to true", function () {
            controller.flowCompleteFlag = false;
            controller.flowComplete();
            expect(controller.flowCompleteFlag).toBe(true);
        });
    });
});