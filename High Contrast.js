// Clear
function ContrastOff() {
    var x = document.querySelector('html');
        x.className = x.className.replace(" contrast", "");
		ColorUpdate();    
}


function ContrastOn() {
    var x = document.querySelector('html');
    if (x.className.indexOf("contrast") == -1) {
        x.className += " contrast";
    }
        x.className = x.className.replace(" classic", "");
		ColorUpdate();
}


function ContrastA() {
    var y = document.querySelector('html');
	ContrastOn();
    if (y.className.indexOf("classic") == -1) {
        y.className += " classic";
    }
		ColorUpdate();	
}

function ColorUpdate() {
/** Button Color **/
/* Set Vars */
var button_color = getComputedStyle(document.querySelector('html')).getPropertyValue("--button-color");

if ((chroma(button_color).luminance()) > 0.3) {
var buttoncolor1 = chroma(button_color).brighten(-0.6);
var buttoncolor2 = 'black';
document.querySelector('body').style.setProperty("--button-color-blend-light", button_color);
document.querySelector('body').style.setProperty("--button-color-blend", buttoncolor1);
} else {
var buttoncolor1 = chroma(button_color).brighten(0.6);
var buttoncolor2 = 'white';
document.querySelector('body').style.setProperty("--button-color-blend-light", buttoncolor1);
document.querySelector('body').style.setProperty("--button-color-blend", button_color);
}

/* Set Values */
document.querySelector('body').style.setProperty("--button-color-dark", buttoncolor1);
document.querySelector('body').style.setProperty("--button-color-text", buttoncolor2);
$('input[type="color"][name="buttoncolor"]').val(chroma(button_color));


/** Header Color **/
/* Set Vars */
var header_color =	'rgb(' + getComputedStyle(document.querySelector('html')).getPropertyValue("--community-header-bg") + ');';

if ((chroma(header_color).luminance()) > 0.3) {
var headercolor1 = chroma(header_color).brighten(-0.6);
var headercolor2 = '0,0,0';
var headercolor1final = chroma(headercolor1).get('rgb.r') + ',' + chroma(headercolor1).get('rgb.g') + ',' + chroma(headercolor1).get('rgb.b'); 
document.querySelector('body').style.setProperty("--community-header-bg-blend-light", header_color);
document.querySelector('body').style.setProperty("--community-header-bg-blend", headercolor1final);
} else {
var headercolor1 = chroma(header_color).brighten(0.6);
var headercolor2 = '255,255,255';
var headercolor1final = chroma(headercolor1).get('rgb.r') + ',' + chroma(headercolor1).get('rgb.g') + ',' + chroma(headercolor1).get('rgb.b'); 
document.querySelector('body').style.setProperty("--community-header-bg-blend-light", headercolor1final);
document.querySelector('body').style.setProperty("--community-header-bg-blend", header_color);
}

/* Set Values */
document.querySelector('body').style.setProperty("--community-header-dark", headercolor1final);
document.querySelector('body').style.setProperty("--community-header-text", headercolor2);
$('input[type="color"][name="header"]').val(chroma(header_color));

/** Link Color **/
/* Set Vars */
var link_color = 'rgb(' + getComputedStyle(document.querySelector('html')).getPropertyValue("--link-color") + ');';

if ((chroma(link_color).luminance()) > 0.3) {
var linkcolor1 = chroma(link_color).brighten(-0.6);
var linkcolor2 = 'black';
var linkcolor1final = chroma(linkcolor1).get('rgb.r') + ',' + chroma(linkcolor1).get('rgb.g') + ',' + chroma(linkcolor1).get('rgb.b'); 
document.querySelector('body').style.setProperty("--link-color-blend-light", link_color);
document.querySelector('body').style.setProperty("--link-color-blend", linkcolor1final);
} else {
var linkcolor1 = chroma(link_color).brighten(0.6);
var linkcolor2 = 'white';
var linkcolor1final = chroma(linkcolor1).get('rgb.r') + ',' + chroma(linkcolor1).get('rgb.g') + ',' + chroma(linkcolor1).get('rgb.b'); 
document.querySelector('body').style.setProperty("--link-color-blend-light", linkcolor1final);
document.querySelector('body').style.setProperty("--link-color-blend", link_color);
}


/* Set Values */
document.querySelector('body').style.setProperty("--link-color-dark", linkcolor1final);
document.querySelector('body').style.setProperty("--link-color-text", linkcolor2);
$('input[type="color"][name="linkcolor"]').val(chroma(link_color));

/** Content Border **/
/* Set Vars */
var border_color =	getComputedStyle(document.querySelector('html')).getPropertyValue("--content-border");

if ((chroma(border_color).luminance()) > 0.3) {
var bordercolor1 = chroma(border_color).brighten(-0.6);
var bordercolor2 = 'black';
document.querySelector('body').style.setProperty("--content-border-blend-light", border_color);
document.querySelector('body').style.setProperty("--content-border-blend", bordercolor1);
} else {
var bordercolor1 = chroma(border_color).brighten(0.6);
var bordercolor2 = 'white';
document.querySelector('body').style.setProperty("--content-border-blend-light", bordercolor1);
document.querySelector('body').style.setProperty("--content-border-blend", border_color);
}

/* Set Values */
document.querySelector('body').style.setProperty("--content-border-dark", bordercolor1);
document.querySelector('body').style.setProperty("--content-border-text", bordercolor2);
$('input[type="color"][name="border"]').val(chroma(border_color));

/** Dropdown BG **/
/* Set Vars */
var content_color =	getComputedStyle(document.querySelector('html')).getPropertyValue("--content-bg");
var content_text =	getComputedStyle(document.querySelector('html')).getPropertyValue("--content-color");
var body_bg =	getComputedStyle(document.querySelector('html')).getPropertyValue("--background-color");

if ((chroma(content_color).luminance()) > 0.8) {
	var dropdowncolor = 'white';
} else if ((chroma(content_color).luminance()) > 0.3) {
var dropdowncolor = chroma.mix(content_color, 'black', 0.1);
} else {
var dropdowncolor = chroma.mix(content_color, 'white', 0.1);
}


var emphasiscolor = chroma.mix(content_color, link_color, 0.6);


document.querySelector('body').style.setProperty("--dropdown-bg", dropdowncolor);
document.querySelector('body').style.setProperty("--emphasis-bg", emphasiscolor);
$('input[type="color"][name="bg"]').val(chroma(body_bg));
$('input[type="color"][name="contentbg"]').val(chroma(content_color));
$('input[type="color"][name="contentcolor"]').val(chroma(content_text));

}


