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
