"use strict";
var MeanMedianMode = function() {
  this.mean = function (array) {
    var total = 0;
    for (var i = 0; i < array.length; i++) {
      total += array[i];
    }

    return (total/array.length);
  };

  this.median = function () {
    var array = new Array(arguments.length);
    for (var i = 0; i < arguments.length; i++){
      array[i] =  arguments[i];
    }
    var newArray = array.sort(function (a, b) {
                    return a - b;
                  });

    return newArray[Math.floor(newArray.length/2)];
  };

  this.mode = function () {
    var array = [];
    var countArray = [];

    for (var j = 0; j < arguments.length; j++) {
      countArray.push(0);
    }

    for (var i = 0; i < arguments.length; i++) {
      if(array.indexOf(arguments[i]) === -1) {
        array.push(arguments[i]);
      } else {
        countArray[array.indexOf(arguments[i])]++;
      }
    }

    return array[countArray.indexOf(getMaxOfArray(countArray))];
  };
};

function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
}

var mmm = new MeanMedianMode();
module.exports = mmm;
