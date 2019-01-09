'use strict';
// меняет настройки персонажа setup-player.js
(function () {
  var setupPlayer = document.querySelector('.setup-wizard');
  var coatPlayer = setupPlayer.querySelector('.wizard-coat');
  var eyesPlayer = setupPlayer.querySelector('.wizard-eyes');
  var fireballPlayer = document.querySelector('.setup-fireball-wrap');
  var coatPlayerInp = document.querySelector('.setup-player input[name=coat-color]');
  var eyesPlayerInp = document.querySelector('.setup-player input[name=eyes-color]');
  var fireballPlayerInp = document.querySelector('input[name=fireball-color]');
  var fireball = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  // меняет цвет мантии по клику
  coatPlayer.addEventListener('click', function () {
    var RandColor = window.setup.getRandomItem(window.setup.wizardsCoat);
    coatPlayer.style.fill = RandColor;
    coatPlayerInp.value = RandColor;
  });

  // меняет цвет глаз по клику
  eyesPlayer.addEventListener('click', function () {
    var RandColor = window.setup.getRandomItem(window.setup.wizardsEyes);
    eyesPlayer.style.fill = RandColor;
    eyesPlayerInp.value = RandColor;
  });

  // меняет цвет шара по клику
  fireballPlayer.addEventListener('click', function () {
    var RandColor = window.setup.getRandomItem(fireball);
    fireballPlayer.style.background = RandColor;
    fireballPlayerInp.value = RandColor;
  });

  var loadHandler = function (response) {
    window.setup.userDialog.classList.add('hidden');
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
  };

  var form = window.setup.userDialog.querySelector('.setup-wizard-form');
    form.addEventListener('submit', function (evt) {
      evt.preventDefault();
      window.backend.save(new FormData(form), loadHandler, errorHandler);
    });
})();