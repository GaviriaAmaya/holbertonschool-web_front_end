// Function to display an alert with a name. Interpolation used
let welcomeMessage = fullName => {
	return () => {
		alert(`Welcome ${fullName}`);
	}
}

let guillaume = welcomeMessage("Guillaume");
let alex = welcomeMessage("Alex");
let fred = welcomeMessage("Fred");
