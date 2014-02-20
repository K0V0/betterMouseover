(function($) {
	$.fn.betterMouseover = function (accidentTime, funkcia) {
		if (accidentTime == undefined || accidentTime == null) { accidentTime = 250; }
		if (funkcia == undefined || funkcia == null || typeof funkcia != 'function') { 
			funkcia = function() { 
				console.log("no callback action specified for betterMouseover()"); 
			}; 
		}
		
		return this.each(function() {
			var jeOut;
			$(this).mouseenter(function() { 
				var totok = this; 
				jeOut = false;
				setTimeout(function(){
					if (!jeOut) { $(totok).betterMouseoverHandler(funkcia); }
				}, accidentTime);
			}).mouseleave(function() { 
				jeOut = true;
			});
		});
	}
	$.fn.betterMouseoverHandler = function (fx) {
		fx.call(this);
	}
}(jQuery));
