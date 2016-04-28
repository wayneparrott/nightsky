


function config() {
    console.log('config');
    layout();
    createStars(100);
    startRotate();
}

function layout() {     
     var ht = $(window).height();
     var width = $(window).width(); 
     
     $('body').height(ht);
     
     var starContainer = $('#starField');
     $(starContainer).width(width * 1.5);
     $(starContainer).height(ht * 1.5);
          
     var foreground = $('#foreground');
     $(foreground).css('top', ht * 0.7);
}

function startRotate() {
    $('#starField').addClass('rotate');
}

function stopRotate() {
    $('#startField').removeClass('rotate');
}

function doResize() {
    stopRotate();
    
    //remove all stars and regen
     $('#starField').empty();
     config();
    
}

//----------------------------------------------------------------------------------------

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
//config();

$( window ).resize(doResize);

$(document).ready(config);
