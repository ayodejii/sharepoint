(function () {
    'use strict';

    var controllerId = 'shell';
    angular
        .module('app')
        .controller(controllerId,
        ['$rootScope', 'common', shell]);

    function shell($rootScope, common) {
        
        var vm = this;
        vm.title = 'shell';

        init();

        function init() {

            common.logger.log('controller loaded', null, controllerId);
            common.activateController([], controllerId);
        }
    }
})();
