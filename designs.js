// Define a bunch of constants
const sizePicker = $('#sizePicker'); //submit button
const inputHeight = $('#inputHeight');// contains value of width
const inputWeight = $('#inputWeight');// contains value of height
const canvas = $('#pixelCanvas'); // container for the grid
const pixelColor = $('#colorPicker'); // container for user chosen color 

// Class names for rows and cells
const rowClass = 'grid-row';
const cellClass = 'grid-cell';

// Cell default color
const defaultColor = 'white';

// Make grid function
function makeGrid() {
	canvas.empty(); // Empty the grid before drawing a new one
	let inputHeightVal = inputHeight.val();
	let inputWeightVal = inputWeight.val();
	for (let height = 0; height < inputHeightVal; height++){
		canvas.append('<tr></tr>'); // add row per height
		let lastRow = canvas.find('tr').last();
		lastRow.addClass(rowClass); // give row class
		for (let weight = 0; weight < inputWeightVal; weight++){
			lastRow.append('<td></td>'); // add cell to previous row
			let lastCell = lastRow.children().last();
			lastCell.addClass(cellClass); // give cell class
			lastCell.attr('bgcolor', defaultColor); // make cell default color 
		};
	};
};
// Submit button creates grid
sizePicker.submit(function(evt) {
	evt.preventDefault(); // Prevents the input field from getting reset
	makeGrid();
});
// Clicking on cell colors the grid
canvas.on('click','.grid-cell',function(event) {
	let cellColor = pixelColor.val();
	let currentCell = $(event.target);
	if (currentCell.attr('bgcolor')===defaultColor) {
		currentCell.attr('bgcolor',cellColor); // give blank cell a color
	} else {
		currentCell.attr('bgcolor',defaultColor); // turn colored cell blank
	};	
});
