'use strict';
(function () {
  var loadHandler = function (data) {
    window.wizards.loadList = data;
    window.filter.updateWizards(window.wizards.loadList);
  };

  var request = function () {
    window.backend.load(loadHandler, window.util.errorHandler);
  };

  window.wizards = {
    request: request,
    loadList: []
  };
})();
