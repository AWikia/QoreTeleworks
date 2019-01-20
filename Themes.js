var isOptions = document.querySelector("body").className.indexOf("options") !== -1;
(function () {
document.querySelector('html').className += " theme-A"; // We begin with the first theme selected
})();

function HCa() {
    var x = document.querySelector('html');
    if (x.className.indexOf("theme-A") == -1) {
        x.className += " theme-A";
        if (isOptions) {
		document.getElementById("302").checked = true;
		}
    }
        x.className = x.className.replace(" theme-B", "");
        x.className = x.className.replace(" theme-C", "");
        x.className = x.className.replace(" theme-D", "");
        if (isOptions) {
		document.getElementById("303").checked = false;
		document.getElementById("304").checked = false;
		document.getElementById("305").checked = false;
		}
}

function HCb() {
    var x = document.querySelector('html');
    if (x.className.indexOf("theme-B") == -1) {
        x.className += " theme-B";
        if (isOptions) {
		document.getElementById("303").checked = true;
		}
    }
        x.className = x.className.replace(" theme-A", "");
        x.className = x.className.replace(" theme-C", "");
        x.className = x.className.replace(" theme-D", "");
        if (isOptions) {
		document.getElementById("302").checked = false;
		document.getElementById("304").checked = false;
		document.getElementById("305").checked = false;
		}
}

function HCc() {
    var x = document.querySelector('html');
    if (x.className.indexOf("theme-C") == -1) {
        x.className += " theme-C";
        if (isOptions) {
		document.getElementById("304").checked = true;
		}
    }
        x.className = x.className.replace(" theme-A", "");
        x.className = x.className.replace(" theme-B", "");
        x.className = x.className.replace(" theme-D", "");
        if (isOptions) {
		document.getElementById("302").checked = false;
		document.getElementById("303").checked = false;
		document.getElementById("305").checked = false;
	}
}

function HCd() {
    var x = document.querySelector('html');
    if (x.className.indexOf("theme-D") == -1) {
        x.className += " theme-D";
        if (isOptions) {
		document.getElementById("305").checked = true;
		}
    }
        x.className = x.className.replace(" theme-A", "");
        x.className = x.className.replace(" theme-B", "");
        x.className = x.className.replace(" theme-C", "");
        if (isOptions) {
		document.getElementById("302").checked = false;
		document.getElementById("303").checked = false;
		document.getElementById("304").checked = false;
		}
}
