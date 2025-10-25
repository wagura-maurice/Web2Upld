/* LMSOFT LMCentreInWindow Plugin
 * ---------------------------------------------------
 * Version 1.0 (March 2011)
 * Author: Luc Carreau (http://lmsoft.com)
 * ---------------------------------------------------
 * Centres an element in the centre of the window, both horizontally and vertically. Prevents
 * content from being positioned off the screen when the content is too large for the window.
 *
 */

(function ($) {

    $.fn.LMCentreInWindow = function () {
		var scrollTop = (document.documentElement && document.documentElement.scrollTop) || window.pageYOffset || self.pageYOffset || document.body.scrollTop;         
		var scrollLeft = (document.documentElement && document.documentElement.scrollLeft) || window.pageXOffset || self.pageXOffset || document.body.scrollLeft;         
		var popupHeight = this.height();         
		var popupWidth = this.width();    

		/* Viewport calculation */         
		var viewportwidth=$(window).width();
		var viewportheight=$(window).height();           

		//centering         
		divtop = viewportheight / 2 - popupHeight / 2 + scrollTop;
		if(divtop<scrollTop) divtop=scrollTop;
		divleft = viewportwidth / 2 - popupWidth / 2 + scrollLeft;
		if(divleft<scrollLeft) divleft=scrollLeft;
		this.css({'position':'absolute', 'top': divtop +'px', 'left': divleft +'px'}); 
    };
})(jQuery);

