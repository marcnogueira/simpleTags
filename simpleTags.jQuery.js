(function($){
	$.fn.simpleTags = function(options){
		var element = this;
		
		var defaults = {
			sizes: [100, 120, 140, 90, 180],
			colorNormal: "gray",
			colorHover: "red",
			tagsWidth: "300px",
			fonts: "courier" 
		}
		
		var options = $.extend(defaults, options); 
		
		
		$(element).css({
			width: options.tagsWidth,
			fontFamily: options.fonts
		});
		$(element).children("li").each(function(){
			var size = options.sizes[Math.floor(Math.random() * options.sizes.length)];
			$(this).css({
				fontSize: size + '%',
				margin: '0',
				padding: '0',
				listStyle: 'none',
				display: 'inline'
			});
			$(this).children("a").css({
				textDecoration: 'none',
				padding: '0 2px',
				color: options.colorNormal
			});
			$(this).children("a").hover(
				function(){
					$(this).css('color', options.colorHover)
			},
				function(){
					$(this).css('color', options.colorNormal)
			}
			);
		});
	};
}) (jQuery);