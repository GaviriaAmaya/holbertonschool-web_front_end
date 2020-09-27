// Multiple callbacks
let stock = {
	macbook: 2,
	iphone: 4
}

function processPayment(itemName) {
	stock[itemName] -= 1;
	console.log(`Payment is processed for ${itemName}`);
}

function processError(itemName) {
	if (stock[itemName] === 0) {
		console.log(`No more ${itemName} in stock`);
	}

	if (!stock[itemName]) {
		console.log(`${itemName} is not available in our actual stock`);
	}

	console.log(`Payment is not being proceessed`);
}

function processOrder(itemName, callbackPayment, callbackError) {
	console.log(`Verifying the stock of ${itemName}`);
	if (stock[itemName] !== 0 && stock[itemName]) {
		callbackPayment(itemName);
	}
	else {
		callbackError(itemName);
	}
}

let item = prompt(`Please enter the item you want to purchase(Macbook, iPhone)`);

while (!item) {
	prompt(`Please enter the item you want to purchase(Macbook, iPhone)`);
}
item = item.toLowerCase();

processOrder(item, processPayment, processError);
