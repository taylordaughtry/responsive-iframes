var ResponsiveIframes = {};

(function(RI) {
	'use strict';

	var _buildStyle = function() {
		var div = document.createElement('div'),
			css = '.fluid-wrapper{width:100%;position:relative;padding:0;}.fluid-wrapper iframe,.fluid-wrapper object,.fluid-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}';

		div.innerHTML = '<style>' + css + '</style>';

		document.getElementsByTagName('head')[0].appendChild(div);

		return div;
	};

	var _render = function(element) {
		var wrapper = document.createElement('div');

		wrapper.className = 'fluid-wrapper';

		element.parentNode.insertBefore(wrapper, element.nextSibling);

		wrapper.appendChild(element);

		element.parentNode.style.paddingTop = (element.getAttribute('height') / element.getAttribute('width')) * 100 + '%';
	};

	RI.init = function(selector) {
		var query = document.querySelectorAll(selector),
			elements = query[0] ? query : document.getElementsByTagName('iframe');

		_buildStyle();

		for (var i = 0; i < elements.length; i++) {
			_render(elements[i]);
		}
	};

	return RI;

})(ResponsiveIframes);