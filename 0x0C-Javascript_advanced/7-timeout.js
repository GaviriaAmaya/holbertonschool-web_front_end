// Check the stack order in JS

console.log("Start of the execution queue");
setTimeout(() => {
	console.log("Final code block to be executed")
}
, 0);

for (let iterator = 1; iterator != 101; iterator++) {
	console.log(iterator);
}
console.log("End of the loop printing");
