(function () {
    'use strict';
    var controllerId = learningPath;
    angular
        .module('app')
        .controller(controllerId,
        ['common', learningPath]);

    function learningPath(common) {

        var vm = this;
        vm.title = 'learningPath';

        activate();

        function activate() {
            common.logger.log('controller loaded', null, controllerId);
            common.activateController([], controllerId);
        }
    }
})();
