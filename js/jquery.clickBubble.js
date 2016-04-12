/**
* jquery.clickBubble
*
* @Version 1.0.0
* @Author Fuxy526
*/

(function($) {

	$.fn.clickBubble = function(options) {

		var defaultOptions = {
			color: '#000',
			size: 20,
			time: 500,
			borderWidth: 2
		}

		var id = 0;

		options = $.extend(defaultOptions, options);

		$(this).on("mousedown", function(e) {
			var x = e.clientX;
			var y = $(window).scrollTop() + e.clientY;
			$('<div>')
				.attr('id', 'clickBubble_' + id++)
				.css({
					'width': 0,
					'height': 0,
					'border': defaultOptions.borderWidth + 'px solid ' + options.color,
					'position': 'absolute',
					'left': x,
					'top': y,
					'border-radius': '50%'
				})
				.animate({
					'width': defaultOptions.size + 'px',
					'height': defaultOptions.size + 'px',
					'left': x - 0.5 * defaultOptions.size,
					'top': y - 0.5 * defaultOptions.size,
					opacity: 0
				}, defaultOptions.time, function() {
					$(this).remove();
				})
				.appendTo('body');
		});

		return this;

	}

})(jQuery);