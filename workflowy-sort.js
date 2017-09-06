// ==UserScript==
// @name         Workflowy Sort
// @namespace    https://workflowy.com
// @version      0.1
// @description  Automatically sort all open lists alphabetically when Ctrl+Shift+S is pressed
// @author       Roland
// @match        https://workflowy.com
// @run-at       document-idle
// @grant        none
// ==/UserScript==



function autoSort() {
    $(".bullet, a.content, #expandButton").unbind();
    $('.bullet, a.content').click(function(event){
        setTimeout(function(){
            sortBullets();
            console.log('bullet sort');
        }, 250);
    });
    $('#expandButton').click(function(event){
        console.log($(this).attr('data-open-on-last-click'));
       // if($(this).attr('data-open-on-last-click') === "true" || typeof $(this).attr('data-open-on-last-click') === 'undefined'){
            setTimeout(function(){
                sortBullets();
                console.log('expand sort');
            }, 50);
       // }
    });

}
// sort bullets on initial page load
setTimeout(function(){
    sortBullets();
}, 2000);
function sortBullets() {
    jQuery.fn.sortDomElements = (function() {
        return function(comparator) {
            return Array.prototype.sort.call(this, comparator).each(function(i) {
                this.parentNode.appendChild(this);
            });
        };
    })();
    $('div.children').children('.project').sortDomElements(function(a,b){
        var akey = $(a).children('.name').children('.content').text().toLowerCase();
        var bkey = $(b).children('.name').children('.content').text().toLowerCase();
        if (akey == bkey) return 0;
        if (akey < bkey) return -1;
        if (akey > bkey) return 1;
    });
    return true;
}


function keyDownSortBullets(e) {
    if(e.keyCode === 83 && e.ctrlKey && e.shiftKey){
        sortBullets();
        //saveAll();
    }
}

document.addEventListener ("mousedown", autoSort, false);
document.addEventListener('keydown', keyDownSortBullets, false);

// On page load, listen for bullets to populate, then sort them
var bulletLoaded = setInterval(function(){
    console.log('checking bullets');
    if( document.getElementById('loadingScreen').style.display === 'none' ) {
        console.log('bullets loaded!');
        sortBullets();
        clearInterval(bulletLoaded);
    }
}, 200);
