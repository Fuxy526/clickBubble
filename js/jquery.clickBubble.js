/**
 *  @ Plugin Name: jquery-clickBubble
 *  @ Plugin URL: https://github.com/Fuxy526/clickBubble
 *  @ Version: 1.0.0
 *  @ Author: Fuxy526
 *  @ Author URL: https://github.com/Fuxy526
 *  @ License: Licensed under MIT
 */

(function( $ ) {
	'use strict';

	$.fn.clickBubble = function(opt) {

		var options = $.extend({
			color: '#000',
			size: 20,
			time: 500,
			borderWidth: 2
		}, opt);

		var id = 0;

		$(this).on('mousedown', function(e) {
			var x = e.clientX;
			var y = $(window).scrollTop() + e.clientY;
			$('<div>')
				.attr('id', 'clickBubble_' + id++)
				.css({
					'width': 0,
					'height': 0,
					'border': options.borderWidth + 'px solid ' + options.color,
					'position': 'absolute',
					'left': x,
					'top': y,
					'border-radius': '50%'
				})
				.animate({
					'width': options.size + 'px',
					'height': options.size + 'px',
					'left': x - 0.5 * options.size,
					'top': y - 0.5 * options.size,
					opacity: 0
				}, options.time, function() {
					$(this).remove();
				})
				.appendTo('body');
		});

		return this;

	}

}( jQuery ));