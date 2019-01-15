'use strict';

(function () {
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = window.setup.userDialog.querySelector('.setup-close');
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  var coordsX = document.querySelector('body').offsetWidth / 2;
  var coordsY = 80;

  // Сброс координат попапа
  var resetCoords = function () {
    window.setup.userDialog.style.top = coordsY + 'px';
    window.setup.userDialog.style.left = coordsX + 'px';
  };

  // функция обработки события закрытия по esc
  var popupEscPressHandler = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      closePopup();
    }
  };
  // функция обработки события закрытия по enter
  var popupEnterPressHandler = function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closePopup();
    }
  };

  // добавляю функции открытия-закрытия
  var openPopup = function () {
    window.setup.userDialog.classList.remove('hidden');
    document.addEventListener('keydown', popupEscPressHandler); // при открытом окне слушаю закрытие по клавишам
    setupClose.addEventListener('keydown', popupEnterPressHandler);
    window.wizards.request();
  };

  var closePopup = function () {
    window.setup.userDialog.classList.add('hidden');
    document.removeEventListener('keydown', popupEscPressHandler); // при закрытом окне слушать закрытие не нужно, удаляю
    setupClose.removeEventListener('keydown', popupEnterPressHandler);
    resetCoords();
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

  var dialogHandler = window.setup.userDialog.querySelector('.upload');

  // перетаскивание попапа
  dialogHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };
    var dragged = false;

    var mouseMoveHandler = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      window.setup.userDialog.style.top = (window.setup.userDialog.offsetTop - shift.y) + 'px';
      window.setup.userDialog.style.left = (window.setup.userDialog.offsetLeft - shift.x) + 'px';
    };

    var mouseUpHandler = function (upEvt) {
      upEvt.preventDefault();
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);

      if (dragged) {
        var clickPreventDefaultHandler = function (defEvt) {
          defEvt.preventDefault();
          dialogHandler.removeEventListener('click', clickPreventDefaultHandler);
        };
        dialogHandler.addEventListener('click', clickPreventDefaultHandler);
      }
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
  });
})();
