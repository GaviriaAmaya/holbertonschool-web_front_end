// Function to change the DOM color mode
/**
 * Change the styles of the DOM
 * @param {number} size - Font size property
 * @param {string} weight - Font weight property
 * @param {string} transform - Text transform property
 * @param {string} background - Background color property
 * @param {string} color - Text color property
 * @returns {function} styling - Closure to allow the calling in a local scope
 */
function changeMode(size, weight, transform, background, color) {
	return styling => {
		document.body.style.fontSize = size;
		document.body.style.fontWeight = weight;
		document.body.style.textTransform = transform;
		document.body.style.backgroundColor = background;
		document.body.style.color = color;
	}
}

/**
 * Changes the dom based on different parameters
 */
function main() {
	let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
	let darkMode = changeMode(12, "bold", "capitalize", "black", "white");
	let screamMode = changeMode(12, "normal", "lowercase", "white", "black");

	/**
	 * Creates an element and appends to the dom. If element is a button, creates event on click
	 * according to the third parameter
	 * @param {string} element - HTML element to be created
	 * @param {string} innerHTML - Text to add to the HTML element created
	 * @param {function} changeFunction - [Optional] Function at click event
	 */
	function createSpecificElement(element, innerHTML, changeFunction) {
		let newElement = document.createElement(element);
		newElement.innerHTML = innerHTML;
		if (element == 'button') {
			newElement.addEventListener("click", function() {
				changeFunction();
		})};
		document.body.appendChild(newElement);
	}

	let paragraph = createSpecificElement('p', "Welcome Holberton!");
	let spkyButton = createSpecificElement('button', "Spooky", spooky);
	let darkButton = createSpecificElement('button', "Dark mode", darkMode);
	let scrmButton = createSpecificElement('button', "Scream mode", screamMode);
}
main();