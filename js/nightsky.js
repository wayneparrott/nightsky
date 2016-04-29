/*--------------------------------
 * @author Wayne Parrott
 * --------------------------------
 */

var options = {
  rotateClass: 'L2R'
};

function config() {
    layout();
    createStars(100);
    startRotate('L2R');
}

function layout() {     
     var ht = $(window).height();
     var width = $(window).width(); 
     var newSize = Math.max(width,ht) * 1.5;
     
     $('body').height(ht);
     
     var starContainer = $('#starField');
     $(starContainer).width(newSize);
     $(starContainer).height(newSize);
          
     var foreground = $('#foreground');
     $(foreground).css('top', ht * 0.7);
}

/**
 * @param direction String "L2R" or "R2L"
 */
function startRotate(direction) {
    options.rotateClass = 
        (typeof direction === 'string' && direction === "L2R") ? 'rotateL2R' : 'rotateR2L';
    
    $('#starField').addClass(options.rotateClass);
}

function stopRotate() {
    $('#startField').removeClass(options.rotateClass);
}

function doResize() {
    stopRotate();
    
    //remove all stars and regen
     $('#starField').empty();
     config();
    
}

//----------------------------------------------------------------------------------------
// create stars

function randomIntBetween(a, b) {
    return Math.floor(Math.random()*(b-a+1)+a);
}

function createStars(numStars) {
    var starsContainer = document.getElementById('starField'); 
    var w = starsContainer.clientWidth,
        h = starsContainer.clientHeight-80;
    
    for(i=0; i < numStars; i++) {
        var size = randomIntBetween(1,3),
            x = Math.min(randomIntBetween(1,w), w-size-5),
            y = Math.min(randomIntBetween(1,h), h-size-5);
            
        var elem = document.createElement('div');
        elem.className = "star";
        elem.style.top = y + "px";
        elem.style.left = x + "px"; 
        elem.style.width = size + "px"; 
        elem.style.height = size + "px";
    
        starsContainer.appendChild(elem);        
    }
}

//----------------------------------------------------------------------------------------
//register event handlers
$( window ).resize(doResize);
$(document).ready(config);
