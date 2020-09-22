// Function to create a Classroom based on a number of students
function createClassRoom(numbersOfStudents) {
	function studentSeat(seat) {
		return () => {
			return seat;
		}
	}

	let students = [];

	for (let student = 0; student <= numbersOfStudents; student++) {
		students.push(studentSeat(student + 1));
	}

	return students;
}

let classRoom = createClassRoom(10);
