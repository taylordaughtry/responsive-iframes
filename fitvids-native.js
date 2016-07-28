var fitVids = {};

(function(FV) {
	'use strict';

	var _buildStyle = function() {
		var div = document.createElement('div'),
			css = '.fluid-wrapper{width:100%;position:relative;padding:0;}.fluid-wrapper iframe,.fluid-wrapper object,.fluid-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}',
			head = document.getElementsByTagName('head')[0];

		div.innerHTML = '<style>' + css + '</style>';

		head.appendChild(div);

		return div;
	};

	FV.respondify = function(selector) {
		var container = document.getElementsByClassName(selector.substr(1))[0],
			videos = container.getElementsByTagName('iframe'),
			styleDiv = _buildStyle(),
			wrapper = document.createElement('div');

		wrapper.className = 'fluid-wrapper';

		for (var i = 0; i < videos.length; i++) {
			var el = videos[i],
				ratio = videos[i].getAttribute('height') / videos[i].getAttribute('width');

			el.parentNode.insertBefore(wrapper, el.nextSibling);

			wrapper.appendChild(el);

			el.parentNode.style.paddingTop = ratio * 100 + '%';
		}
	};

	return FV;

})(fitVids);