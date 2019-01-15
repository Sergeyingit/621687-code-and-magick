'use strict';
(function () {
  var COAT = 'rgb(101, 137, 164)';
  var EYES = 'black';
  var coatColor = COAT;
  var eyesColor = EYES;

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

  var updateWizards = function (loadList) {
    window.render.render(loadList.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    }));
  };


  var eyesChangeHandler = window.debounce.debounce(function (color) {
    eyesColor = color;
    updateWizards(window.wizards.loadList);
  });

  var coatChangeHandler = window.debounce.debounce(function (color) {
    coatColor = color;
    updateWizards(window.wizards.loadList);
  });

  window.filter = {
    eyesChangeHandler: eyesChangeHandler,
    coatChangeHandler: coatChangeHandler,
    updateWizards: updateWizards
  };
})();
