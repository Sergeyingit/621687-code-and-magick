'use strict';
(function () {
  var userDialog = document.querySelector('.setup');
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

  window.setup = {
    getRandomItem: getRandomItem,
    wizardsCoat: wizardsCoat,
    wizardsEyes: wizardsEyes,
    userDialog: userDialog,
  };
})();


