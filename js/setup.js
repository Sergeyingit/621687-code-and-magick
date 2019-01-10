'use strict';
(function () {
  var userDialog = document.querySelector('.setup');
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var wizardsCoat = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];
  var wizardsEyes = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];

  var randomInt = function (min, max) {
    return Math.floor(min + Math.random() * (max - min));
  };

  var getRandomItem = function (arr) {
    return arr[randomInt(0, arr.length)];
  };

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardElement;
  };

  var loadHandler = function (wizards) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < 4; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }

    similarListElement.appendChild(fragment);


    userDialog.querySelector('.setup-similar').classList.remove('hidden');
  };


  var request = function () {
    var similarItemElement = similarListElement.querySelector('.setup-similar-item');
    if (!similarItemElement) {
      window.backend.load(loadHandler, window.util.errorHandler);
    }
  };

  window.setup = {
    getRandomItem: getRandomItem,
    wizardsCoat: wizardsCoat,
    wizardsEyes: wizardsEyes,
    userDialog: userDialog,
    request: request
  };
})();


