// Use binding and closure
let user = {
	hobby: "Calligraphy",
	favoriteSport: "Hockey",
	astrologicalSign: "Aries",
	firstName: "Buillaume",
	lastName: "Ialva",
	location: "Telaviv",
	occupation: "Engineer"
}

/**
 * Takes some object data and prints in console a message
 * @param {string} welcomeString First welcome message for the user
 */
function logWelcomeUser(welcomeString) {
	console.log(`${welcomeString} ${this.firstName}. Your occupation is: ${this.occupation}`);
}

let bindLogWelcomeUser = logWelcomeUser.bind(user);

logWelcomeUser("Welcome")

bindLogWelcomeUser("Hello");
