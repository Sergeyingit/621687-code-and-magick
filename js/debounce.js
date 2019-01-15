'use strict';
(function () {
  var DEBOUNCE_INTERVAL = 500;

  var debounce = function (cb) {
    var lastTimeoute = null;


    return function () {
      var parameters = arguments;

      if (lastTimeoute) {
        window.clearTimeout(lastTimeoute);
      }

      lastTimeoute = window.setTimeout(function () {
        cb.apply(null, parameters);
      }, DEBOUNCE_INTERVAL);
    };

  };

  window.debounce = {
    debounce: debounce
  };
})();
