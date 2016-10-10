(function() {
  'use strict';

  angular
    .module('qianxi')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
