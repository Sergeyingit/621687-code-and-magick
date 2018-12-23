'use strict';
// Перетаскивание предмета drop-elem.js
(function () {
  var shopElement = document.querySelector('.setup-artifacts-shop');
  var draggedItem = null;

  shopElement.addEventListener('dragstart', function (evt) {
    if (evt.target.tagName.toLowerCase() === 'img') {
      draggedItem = evt.target;
      evt.dataTransfer.setData('text/plain', evt.target.alt);
    }
  });

  var artifactsElement = document.querySelector('.setup-artifacts');
  artifactsElement.addEventListener('dragover', function (evt) {
    evt.preventDefault();
    return false;
  });

  artifactsElement.addEventListener('drop', function (evt) {
    evt.preventDefault();
    evt.target.style.background = '';
    evt.target.appendChild(draggedItem);
  });

  artifactsElement.addEventListener('dragenter', function (evt) {
    evt.target.style.background = 'yellow';
    evt.preventDefault();
  });

  artifactsElement.addEventListener('dragleave', function (evt) {
    evt.target.style.background = '';
    evt.preventDefault();
  });
})();
