'use strict';

angular.module('itcApp').controller('TypeaheadCtrl', function ($filter,ContactDAO) {

    var ctrl = this;
    this.selected = undefined;


    this.getContacts=function(typedValue){
        ContactDAO.getAll().then(function (data) {
            ctrl.variable = data[0];
        });
    };

    this.selectContact=function(item,model,label){
        this.selected=item;
    };


});