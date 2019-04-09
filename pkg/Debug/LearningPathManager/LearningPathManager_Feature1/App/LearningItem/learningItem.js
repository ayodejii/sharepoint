(function () {
    'use strict';
    var controllerId = learningItem;
    angular
        .module('app')
        .controller(controllerId,
        ['common', learningItem]);
 
    function learningItem(common) {

        var vm = this;
        vm.title = 'learningItem';

        activate();

        function activate() {
            common.logger.log('controller loaded', null, controllerId);
            common.activateController([], controllerId);
        }
    }
})();
