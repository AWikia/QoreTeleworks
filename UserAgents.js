/* Make SmartTVs recognize cursors */
if (navigator.userAgent.match("SmartTV")) {
document.querySelector("body").className += " smart"
}

if (navigator.userAgent.match("Macintosh")) {
document.querySelector("body").className += " osx"
}

if (navigator.userAgent.match("Linux")) {
document.querySelector("body").className += " xubuntu"
}

/* (navigator.userAgent.match("Trident")) {
document.querySelector("body").className += " explorer"
}
*/
if (navigator.userAgent.match("Edge")) {
document.querySelector("body").className += " edge"
}

/* Mobile Only CSS */
if (navigator.userAgent.match("Mobile")) {
document.querySelector("body").className += " phone"
}

if ((navigator.userAgent.match("Trident")) || (navigator.userAgent.match("Presto")) || (navigator.userAgent.match("Tessera")) || (navigator.userAgent.match("MINERVOULA")) || (navigator.userAgent.match("Silk")) || (navigator.userAgent.match("PLAYSTATION 3")) || (navigator.userAgent.match("Nintendo DSi")) || (navigator.userAgent.match("Nintendo 3DS")) || (navigator.userAgent.match("PLAYSTATION PORTABLE")) ) {
window.location.replace("https://hm100.github.io/UnsupportedBanners/Mpisto.html");window.location.href = "https://hm100.github.io/UnsupportedBanners/Mpisto.html";
}


//$(' .wds-dropdown__toggle').attr('onclick', 'DropdownSwitch()')

function DropdownSwitch() {
		$(' .wds-dropdown.wds-is-active')
				.click(function() {
					var $this = $(this);
					if ($this.hasClass('wds-is-active')) {
						$this.removeClass('wds-is-active');
							$(' .wds-dropdown.wds-is-active').click();
						return;
					}
				});
}

(function () {



$(' .wds-dropdown')
        .click(function(e) {
            var $this = $(this);
			if ($this.hasClass('wds-is-active')) {
				return;
			}
			e.preventDefault();
			$this.addClass('wds-is-active');
        }).mouseleave(function() {
            $(this).removeClass('wds-is-active');
        });

})();


