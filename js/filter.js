'use strict';
(function () {
  var COAT = 'rgb(101, 137, 164)';
  var EYES = 'black';
  var coatColor = COAT;
  var eyesColor = EYES;
  var wizards = [];

  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }

    return rank;
  };

  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  var updateWizards = function () {
    window.render.render(wizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    }));
  };


  var eyesChangeHandler = window.debounce.debounce(function (color) {
    eyesColor = color;
    updateWizards();
  });

  var coatChangeHandler = window.debounce.debounce(function (color) {
    coatColor = color;
    updateWizards();
  });

  window.filter = {
    eyesChangeHandler: eyesChangeHandler,
    coatChangeHandler: coatChangeHandler,
    wizards: wizards,
    updateWizards: updateWizards
  };
})();
