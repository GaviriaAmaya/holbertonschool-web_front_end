// Show an alert on the web browser based on two parameters
function welcome(firstName, lastName) {
	fullName = firstName + ' ' + lastName;

	function displayFullName() {
		alert("Welcome " + fullName + '!');
	}

	displayFullName();
}
