'use strict';
var userDialog = document.querySelector('.setup');


var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var wizardsName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardsLastName = ['да  Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var wizardsCoat = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var wizardsEyes = ['black', 'red', 'blue', 'yellow', 'green'];
var isFocused  = false;
var randomInt = function (min, max) {
  return Math.floor(min + Math.random() * (max - min));
};

var getRandomItem = function (arr) {
  return arr[randomInt(0, arr.length)];
};

var getWizards = function () {
  var wizards = [];
  for (var i = 0; i < 4; i++) {
    wizards.push({
      name: getRandomItem(wizardsName) + ' ' + getRandomItem(wizardsLastName),
      coatColor: getRandomItem(wizardsCoat),
      eyesColor: getRandomItem(wizardsEyes)
    });
  }
  return wizards;
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var allWizards = getWizards();
var fragment = document.createDocumentFragment();
for (var i = 0; i < allWizards.length; i++) {
  fragment.appendChild(renderWizard(allWizards[i]));
}

similarListElement.appendChild(fragment);


userDialog.querySelector('.setup-similar').classList.remove('hidden');

// события
// нахожу объекты, с которыми буду работать .setup (userDialog) & .setup-open
var setupOpen = document.querySelector('.setup-open');
var setupClose = userDialog.querySelector('.setup-close');
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
// функция обработки события закрытия по esc
var popupEscPressHandler = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    userDialog.classList.add('hidden');
  }
};
// функция обработки события закрытия по enter
var popupEnterPressHandler = function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    userDialog.classList.add('hidden');
  }
};

// добавляю функции открытия-закрытия
var openPopup = function () {
  userDialog.classList.remove('hidden');
  document.addEventListener('keydown', popupEscPressHandler); // при открытом окне слушаю закрытие по клавишам
  setupClose.addEventListener('keydown', popupEnterPressHandler);
};

var closePopup = function () {
  userDialog.classList.add('hidden');
  document.removeEventListener('keydown', popupEscPressHandler); // при закрытом окне слушать закрытие не нужно, удаляю
  setupClose.removeEventListener('keydown', popupEnterPressHandler);
};


// добавляю обработчик события open
setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

// добавляю обработчик события close

setupClose.addEventListener('click', function () {
  closePopup();
});

var userName = document.querySelector('.setup-user-name');
userName.addEventListener('focus', function () {
  document.removeEventListener('keydown', popupEscPressHandler);
});

userName.addEventListener('blur', function () {
  document.addEventListener('keydown', popupEscPressHandler);
});

var setupPlayer = document.querySelector('.setup-wizard');
var coatPlayer = setupPlayer.querySelector('.wizard-coat');
var eyesPlayer = setupPlayer.querySelector('.wizard-eyes');
var fireballPlayer = document.querySelector('.setup-fireball-wrap');
var coatPlayerInp = document.querySelector('.setup-player input[name=coat-color]');
var eyesPlayerInp = document.querySelector('.setup-player input[name=eyes-color]');
var fireballPlayerInp = document.querySelector('input[name=fireball-color]');
var fireball = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

coatPlayer.addEventListener('click', function () {
  var RandColor = getRandomItem(wizardsCoat);
  coatPlayer.style.fill = RandColor;
  coatPlayerInp.value = RandColor;
});

eyesPlayer.addEventListener('click', function () {
  var RandColor = getRandomItem(wizardsEyes);
  eyesPlayer.style.fill = RandColor;
  eyesPlayerInp.value = RandColor;
});

fireballPlayer.addEventListener('click', function () {
  var RandColor = getRandomItem(fireball);
  fireballPlayer.style.background = RandColor;
  fireballPlayerInp.value = RandColor;
});
