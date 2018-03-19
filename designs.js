// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
const submit = $('#submitButton');
const inputWeight = $('#inputWeight');
const inputHeight = $('#inputHeight');
const canvas = $('#pixelCanvas');

submit.on("click",function(evt) {
	evt.preventDefault(); // Prevents the input field from getting reset
	makeGrid();
});

function makeGrid() {
	canvas.empty();
	let inputHeightVal = inputHeight.val();
	let inputWeightVal = inputWeight.val();
	for (var height = 0; height < inputHeightVal; height++){
		canvas.append('<tr class=\"grid-row\"></li>');
		for (var weight = 0; weight < inputWeightVal; weight++){
			$('.grid-row').last().append('<td>hi</td>');
		};
	};
};

