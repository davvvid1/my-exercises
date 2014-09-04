(function () {
    'use strict';
    function TranslateCtrl(gettext, gettextCatalog) {
        var ctrl = this;


        var pl = gettext('polski');
        var en = gettext('angielski');
        var de = gettext('niemiecki');
        ctrl.languages = [
            {value: 'pl', name: pl},
            {value: 'en', name: en},
            {value: 'de', name: de}
        ];

        this.changeLanguage = function (language) {
            gettextCatalog.setCurrentLanguage(language);
        }

    }

    var module = angular.module('exerciseApp', ['gettext']);
    module.controller('TranslateCtrl', ['gettext', 'gettextCatalog', TranslateCtrl]);
})();
