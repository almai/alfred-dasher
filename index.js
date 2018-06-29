'use strict';
const alfy = require('alfy');
const dashify = require('dashify');

(function () {
	var text = alfy.input;
	var textReplaced = text
		.replace(/ä/g, 'ae')
		.replace(/ö/g, 'oe')
		.replace(/ü/g, 'ue')
		.replace(/Ä/g, 'Ae')
		.replace(/Ö/g, 'Oe')
		.replace(/Ü/g, 'Ue')
		.replace(/ß/g, 'ss')
		.replace(/[ !"#$%&'()*+,\-.:;<=>?@[\\\]^_`{|}~„“]/g, '-');
	var strDashed = dashify(textReplaced, {condense: true});

	alfy.output([{
		title: strDashed,
		subtitle: text + ' => ' + strDashed,
		arg: strDashed,
		icon: {
			type: 'fileicon',
			path: '~/Desktop'
		}
	}]);
})();
