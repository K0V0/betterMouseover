(function($) {
	$.fn.betterMouseover = function (t, f) {
		if (t === undefined || t === null) { t = 250; }
		if (f === undefined || f === null || typeof f != 'function') { 
			f = function() { console.log("no callback action specified for betterMouseover()"); }; 
		}
		return this.each(function() {
			var u;
			$(this).mouseenter(function() { 
				var p = this;
				u = setTimeout(function(){ $(p).hnd(f); }, t);
			}).mouseleave(function() { clearTimeout(u); });
		});
	}
	$.fn.hnd = function (h) { h.call(this); }
}(jQuery));
