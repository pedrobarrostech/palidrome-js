var assert = require('assert');
var isPalindrome = require('./lib/palindrome.js');

describe('Palindrome test', function () {
    it('It is a palidrome', function () {
        assert.equal('It is a palidrome', isPalindrome(121));
        assert.equal('It is a palidrome', isPalindrome('aba'));
        assert.equal('It is a palidrome', isPalindrome('a man a plan a canal panama'));
    });
    
    it('It is not a palidrome', function () {
        assert.equal('It is not a palidrome', isPalindrome(123));
        assert.equal('It is not a palidrome', isPalindrome('macaco'));
        assert.equal('It is not a palidrome', isPalindrome('abbb'));
    });
});
