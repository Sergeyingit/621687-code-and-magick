'use strict';
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var wizardsName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardsLastName = ['да  Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var wizardsCoat = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var wizardsEyes = ['black', 'red', 'blue', 'yellow', 'green'];

var random = function (x) {
  return Math.floor(Math.random() * x.length);
};

var wizards = [
  {
    name: wizardsName[random(wizardsName)] + ' ' + wizardsLastName[random(wizardsLastName)],
    coatColor: wizardsCoat[random(wizardsCoat)],
    eyesColor: wizardsEyes[random(wizardsEyes)]
  },
  {
    name: wizardsName[random(wizardsName)] + ' ' + wizardsLastName[random(wizardsLastName)],
    coatColor: wizardsCoat[random(wizardsCoat)],
    eyesColor: wizardsEyes[random(wizardsEyes)]
  },
  {
    name: wizardsName[random(wizardsName)] + ' ' + wizardsLastName[random(wizardsLastName)],
    coatColor: wizardsCoat[random(wizardsCoat)],
    eyesColor: wizardsEyes[random(wizardsEyes)]
  },
  {
    name: wizardsName[random(wizardsName)] + ' ' + wizardsLastName[random(wizardsLastName)],
    coatColor: wizardsCoat[random(wizardsCoat)],
    eyesColor: wizardsEyes[random(wizardsEyes)]
  }
];

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);
userDialog.querySelector('.setup-similar').classList.remove('hidden');
