/*
	J QUERY UI (https://jqueryui.com/)
	Sarah Watson | u3121242
*/

//=========  Make kettle draggable/droppable  ===========//
  
  $(function() {
	  
    $( "#drag-kettle").draggable();
    $( "#cooker").droppable({
	    drop: function( event, ui ) {
	    swal("The kettle is on!");
    }
  });
  
  
  //=========  Make bags draggable/droppable  ===========//
  $(function() {
	  
    $( "#dragbag1, #dragbag2, #dragbag3").draggable();
    $( "#drop-pot").droppable({
	    drop:function( event, ui ) {
	    swal("The bag is in the pot!");
    }
  });
  

  

/*
	J QUERY
*/
  
//=========  Pop up window (full screen background)  ===========//
  
$(function() {
    //----- OPEN --/
    $('[data-popup-open]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('data-popup-open');
        $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
 
        e.preventDefault();
    });
 
    //----- CLOSE (x)
    $('[data-popup-x]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('data-popup-x');
        $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
 
        e.preventDefault();
    });

    //----- CLOSE (Link)
    $('[data-popup-close]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('data-popup-close');
        $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
 
        e.preventDefault();
    });
});


/*
	JS
*/


//=========  Snow (Not all original code but I cannot find the source anymore (Sorry!) ===========//


function getWidth() {
    var x = 0;
    if (self.innerHeight) {
        x = self.innerWidth;
    }
    else if (document.documentElement && document.documentElement.clientHeight) {
        x = document.documentElement.clientWidth;
    }
    else if (document.body) {
        x = document.body.clientWidth;
    }
    return x;
}

function getHeight() {
    var y = 0;
    if (self.innerHeight) {
        y = self.innerHeight;
    }
    else if (document.documentElement && document.documentElement.clientHeight) {
        y = document.documentElement.clientHeight;
    }
    else if (document.body) {
        y = document.body.clientHeight;
    }
    return y;
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var width = getWidth();
var height = getHeight(); 
var flakeCount = 50;
var gravity = 0.7;
var windSpeed = 20;
var flakes = [];

var currentFlake = 0;
var snowing = document.getElementById("snowing");

while (currentFlake < flakeCount) {
    var flake = document.createElement("div");
    flake.className = 'flake';
    flake.style.fontSize = getRandom(12, 24) + 'px';
    flake.style.top = getRandom(0, height) + 'px';
    flake.style.left = getRandom(0, width) + 'px';
    flake.innerHTML = "•";
    newFlake = snowing.appendChild(flake);
    newFlake.speed = getRandom(1, 100);
    flakes.push(newFlake);
    currentFlake++;
}

function doAnimation() {
    for (var i = 0; i < flakes.length; i++) {
        newX = false;
        newY = false;
        // Calculate Y position
        newY = parseFloat(flakes[i].style.top) + (flakes[i].speed / 100) * gravity;
        if (newY > height) {
            newY = 0 - parseInt(flakes[i].style.fontSize);
            // If Y is at bottom, randomize X
            newX = getRandom(0, width);
        }
        // Calculate X position if it hasn't been set randomly
        if (!newX) newX = parseFloat(flakes[i].style.left) + Math.sin(newY / windSpeed);
        if (newX < -20) newX = width + 20;
        if (newX > width + 20) newX = -20;
        // Set new position
        flakes[i].style.top = newY + 'px';
        flakes[i].style.left = newX + 'px';
    }
}
setInterval(doAnimation, 10);

window.onresize = function(event) {
    width = getWidth();
    height = getHeight(); 
    }
 });
 });
 

 
 
 
 