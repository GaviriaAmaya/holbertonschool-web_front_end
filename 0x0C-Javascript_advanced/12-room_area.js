// Use of binding to get context
let roomDimensions = {
	width: 50,
	length: 100,
	getArea: () => {
		return (this.width * this.length);
	}
}
let boundGetArea = roomDimensions.getArea.bind(roomDimensions);
