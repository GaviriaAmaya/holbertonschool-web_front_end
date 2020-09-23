// Defining a Hogwarts class and play with points

/**
 * Module that changes score of an student with private methods
 */
function studentHogwarts() {
	let privateScore = 0;
	let name = null;

	/**
	 * Private method to deduce or add points
	 * @param {number} points Amount of points deduce or add
	 */
	function changeScoreBy(points) {
		privateScore = privateScore + points;
	}

	return {
		setName: (newName) => {
			name = newName;
		},

		rewardStudent: () => {
			changeScoreBy(1);
		},

		penalizeStudent: () => {
			changeScoreBy(-1);
		},

		getScore: () => {
			return `${name}: ${privateScore}`;
		}
	};
}

/**
 * Reward a studentHogwarts instance by an specific amount
 * @param {studentHogwarts} student Student of Hogwarts. Object
 * @param {number} amount Points to reward
 */
function reward(student, amount) {
	while (amount > 0) {
		student.rewardStudent();
		amount -= 1;
	}
}

/**
 * Penalize a studentHogwarts object
 * @param {studentHogwarts} student Student of Hogwarts. Object
 * @param {number} amount Points to reward
 */
function penalize(student, amount) {
	while (amount > 0) {
		student.penalizeStudent();
		amount -= 1;
	}
}

let harry = studentHogwarts();

harry.setName("Harry");
reward(harry, 4);

let draco = studentHogwarts();

draco.setName("Draco");
reward(draco, 1);
penalize(draco, 3);

console.log(harry.getScore());
console.log(draco.getScore());
