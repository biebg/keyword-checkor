'use strict';


/**
 * @param words   senstive words dictionary
 * @constructor
 */
function KeywordCheckor(words) {
    this.map = {};
    if (!words) {
        return;
    }
    if (!words instanceof Array) {
        throw new Error('words must be string array');
    }
    for (var i = 0; i < words.length; i++) {
        this.addWord(words[i]);
    }
}

/**
 * add senstive word
 * @param word
 */
KeywordCheckor.prototype.addWord = function(word) {
    var node = this.map;

    for (var i = 0; i < word.length; i++) {
        if (!node[word[i]]) {
            node[word[i]] = {};
        }
        node = node[word[i]]
    }
    node.isEnd = true;
};

/**
 * find key word  and return keyword array
 * if not keyword return []
 * @param s
 * @returns {Array}
 */
KeywordCheckor.prototype.hasWord = function(s) {
    var node = this.map;
    var result = [];

    for (var i = 0; i < s.length; i++) {
        if (s[i] === '*') {
            continue
        }
        node = this.map;
        var found = false;
        var skip = 0;
        var sWord = '';

        for (var j = i; j < s.length; j++) {
            if (!node[s[j]]) {
                found = false;
                skip = j - i;
                break;
            }

            sWord = sWord + s[j];
            if (node[s[j]].isEnd) {
                found = true;
                skip = j - i;
                break
            }
            node = node[s[j]];
        }

        if (!found) {
            continue
        }
        if (skip > 1) {
            i += skip - 1
        }

        result.push(sWord);
    }
    return result;
};

/**
 * replace keyword as *
 * @param s
 * @returns {*}
 */
KeywordCheckor.prototype.replace = function(s) {
    var keywords = this.hasWord(s);
    for (var i = 0; i < keywords.length; i++) {
        var stars = '';
        for (var k = 0; k < keywords[i].length; k++) {
            stars = stars + '*'
        }
        var reg = new RegExp(keywords[i], 'g');
        s = s.replace(reg, stars);
    }
    return s;
};

module.exports = KeywordCheckor;