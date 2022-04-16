/*var support = (function () {
	if (!window.DOMParser) return false;
	var parser = new DOMParser();
	try {
		parser.parseFromString('x', 'text/html');
	} catch(err) {
		return false;
	}
	return true;
})();
*/
var textToHTML= function (str) {

	// check for DOMParser support
	//if (support) {
		var parser = new DOMParser();
		var doc = parser.parseFromString(str, 'text/html');
		return doc.body.innerHTML;
	};

	// Otherwise, create div and append HTML
	/*var dom = document.createElement('div');
	dom.innerHTML = str;
	return dom;

};*/

document.getElementById("swagger").innerHTML= textToHTML('<h1>Hello</h1>');
