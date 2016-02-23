'use strict';

var isPalindrome = function (word) {
    var stringCleaned = (word +'').replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~\ ()]/g,"").replace(/\s/g, "").toLowerCase();
    if(stringCleaned.split('').reverse().join('') === stringCleaned){
    	return "It is a palidrome";
    }
    return "It is not a palidrome";
};

module.exports = isPalindrome;
