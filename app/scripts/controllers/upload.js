'use strict';

angular.module('ngflowApp').controller('uploadCtrl', function () {

    this.flowCompleteFlag = false;

    this.image = undefined;

    this.startUpload = function (flow, files) {
        flow.upload();
    };

    this.fileSuccess = function (file, message) {
        this.image = JSON.parse(message);
    };

    this.flowComplete = function () {
        this.flowCompleteFlag = true;
    };

});

