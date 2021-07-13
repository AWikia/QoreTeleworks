function GNavSearch() {
    var x = document.getElementById("GlobalNavigation");
    if (x.className.indexOf("active-search") == -1) {
        x.className += " active-search";
    } else {
        x.className = x.className.replace(" active-search", "");
    }
}

function GNavSearchOff() {
    var x = document.getElementById("GlobalNavigation");
        x.className = x.className.replace(" active-search", "");
}

function ToggleModule1() {
    var x = document.querySelector(".mpisto-module.activity-module");
    if (x.className.indexOf("hidden-module") == -1) {
        x.className += " hidden-module";
    } else {
        x.className = x.className.replace(" hidden-module", "");
    }
}
function ToggleModule2() {
    var x = document.querySelector(".mpisto-module.help-module");
    if (x.className.indexOf("hidden-module") == -1) {
        x.className += " hidden-module";
    } else {
        x.className = x.className.replace(" hidden-module", "");
    }
}

/* Workspaces Exclusive */
function __theme_modal(tick) {

    var x = document.querySelector('body');
    if (tick === 'Y') {
			if (x.className.indexOf("theme-on") == -1) {
				x.className += " theme-on";
				console.log("Q.Qore theme management has been enabled. Support for changing slots B to D in Theme designer has been enabled as well")
			}
    }

    if (tick === 'N') {
			if (x.className.indexOf("theme-on") > -1) {
				x.className = x.className.replace(" theme-on", "");
				console.log("Q.Qore theme management has been disabled. All theme management features have been shut down. Type '__theme_modal('Y')' in the console to enable it at anytime")
			}
    }

}


function __commands() {
	var expr = prompt("What can I do for you?");
	switch (expr) {
	case 'Activate Theme Management':
	case 'Enable Theme Management':
	case 'themeon':
		 __theme_modal("Y");
		 break
	case 'Deactivate Theme Management':
	case 'Disable Theme Management':
	case 'themeoff':
		 __theme_modal("N");
		 break
	case 'Toggle Article Width':
		 ToggleWidth();
		 break
	case 'Toggle Wiki Mode':
		 ToggleMode();
		 break
	case 'Theme A':
	case 'Theme 1':
		 HCa();
		 break
	case 'Theme B':
	case 'Theme 2':
		 HCb();
		 break
	case 'Theme C':
	case 'Theme 3':
		 HCc();
		 break
	case 'Theme D':
	case 'Theme 4':
		 HCd();
		 break
	default:
		alert('Sorry but the requested command does not exist');
	}
}