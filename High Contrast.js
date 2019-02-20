// Clear
function ContrastOff() {
    var x = document.querySelector('html');
        x.className = x.className.replace(" contrast", "");
    
}


function ContrastOn() {
    var x = document.querySelector('html');
    if (x.className.indexOf("contrast") == -1) {
        x.className += " contrast";
    }
        x.className = x.className.replace(" classic", "");
}


function ContrastA() {
    var y = document.querySelector('html');
	ContrastOn();
    if (y.className.indexOf("classic") == -1) {
        y.className += " classic";
    }
	
}

