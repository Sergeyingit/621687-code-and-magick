'use strict';
(function () {
  var loadHandler = function (wizards) {
    window.render.render(wizards);
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);

    setTimeout(function () {
      if (node) {
        document.body.removeChild(node);
      }
    }, 5000);

  };

  var request = function () {
      window.backend.load(loadHandler, errorHandler);
  };

  window.util = {
    loadHandler: loadHandler,
    errorHandler: errorHandler,
    request: request
  };
})();

