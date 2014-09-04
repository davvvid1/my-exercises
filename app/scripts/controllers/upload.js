'use strict';

/**
 * @ngdoc function
 * @name ngflowApp.controller:NgflowCtrl
 * @description
 * # NgflowCtrl
 * Controller of the ngflowApp
 */
angular.module('ngflowApp').controller('uploadCtrl', function ($scope) {

    this.flowCompleteFlag = false;

    this.image = undefined;

    this.startUpload = function(flow,files){
	// write function body

        console.log('startUpload');

        flow.upload();

        console.log(flow);
        console.log(files);
    }

    this.fileSuccess = function(file,message){
	// write function body
        console.log('fileSuccess');
        this.image = message;
        console.log(file);
        console.log(message);
        this.image = JSON.parse(message);
    }

    this.flowComplete=function(){
        this.flowCompleteFlag = true;
        console.log('flowComplete');
    }

});