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
        x.className = x.className.replace(" YB", "");
        x.className = x.className.replace(" GB", "");
        x.className = x.className.replace(" Black", "");
        x.className = x.className.replace(" White", "");
}


function ContrastA() {
    var y = document.querySelector('html');
	ContrastOn();
    if (y.className.indexOf("YB") == -1) {
        y.className += " YB";
    }
	
}

function ContrastB() {
    var y = document.querySelector('html');
	ContrastOn();
    if (y.className.indexOf("GB") == -1) {
        y.className += " GB";
    }
	
}

function ContrastC() {
    var y = document.querySelector('html');
	ContrastOn();
    if (y.className.indexOf("Black") == -1) {
        y.className += " Black";
    }
	
}

function ContrastD() {
    var y = document.querySelector('html');
	ContrastOn();
    if (y.className.indexOf("White") == -1) {
        y.className += " White";
    }
	
}