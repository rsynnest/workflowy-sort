// ==UserScript==
// @name         Workflowy Sort
// @namespace    https://workflowy.com
// @version      0.1
// @description  Automatically sort all open lists alphabetically when Ctrl+Shift+S is pressed
// @author       Roland
// @match        https://workflowy.com
// @grant        none
// ==/UserScript==

function sortBullets() {
    jQuery.fn.sortDomElements = (function() {
        return function(comparator) {
            return Array.prototype.sort.call(this, comparator).each(function(i) {
                this.parentNode.appendChild(this);
            });
        };
    })();
    $('div.children').children('.project').sortDomElements(function(a,b){
        var akey = $(a).children('.name').children('.content').text();
        var bkey = $(b).children('.name').children('.content').text();
        if (akey == bkey) return 0;
        if (akey < bkey) return -1;
        if (akey > bkey) return 1;
    });
}


function keyDownSortBullets(e) {
    if(e.keyCode === 83 && e.ctrlKey && e.shiftKey){
        sortBullets();
        //saveAll();
    }
}

//document.addEventListener ("mousedown", sortBullets, false);
document.addEventListener('keydown', keyDownSortBullets, false);
