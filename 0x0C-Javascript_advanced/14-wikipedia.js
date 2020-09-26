// Test a simple callback in JavaScript

/**
 * Create a paragraph and assign the content of the parameter
 * @param {string} data Content of the new element
 */
function createElement(data) {
	let pgrph = document.createElement("p");
	pgrph.innerHTML = data;
	document.body.appendChild(pgrph);
}

/**
 * Get an specific query of wikipedia API
 * @param {function} callback Process the extract of the callback
 */
function queryWikipedia(callback) {
	let getArticle = new XMLHttpRequest();
	let method = 'GET';
	let	url = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*";

	getArticle.open(method, url);
	getArticle.onload = function () {
		if (this.readyState === 4 && this.status === 200) {
			let response = JSON.parse(this.responseText);

			callback(response.query.pages[21721040].extract);
		}
	};

	getArticle.send();
}

queryWikipedia(createElement);
