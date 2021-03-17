// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()



/* Function for making table grid*/
function makeGrid(){
	const inputHt=$('#inputHeight').val(); //Getting input value for row
	const inputWt=$('#inputWidth').val(); //Getting input value for column

	for(var i=0;i<inputHt;i++){
		$('#pixelCanvas').append("<tr id=row" +i+ "></tr>"); //creating rows
		for(var j=0;j<inputWt;j++){
			$('#row'+i).append("<td></td>"); //creating columns
		}
	}
}

$( document ).ready(function() {

	$('#sizePicker').submit(function(event){
		$("#pixelCanvas").empty();//clear table just in case user wants to modify table with diff hegiht and width
		event.preventDefault();//To cancel submitting form before executing code
	});

	/* Submit Form and Calling makeGrid Func */
	$('#sizePicker').submit(makeGrid);

	/* Fill and unfill box/td */
	$('#pixelCanvas').click(function(event) {

		/*Getting input value from colorpicker/ user's preference*/
		let inputColor=$('#colorPicker').val();

		/*Saving current color to a data to be compared if user picks new color*/
		var origColor=$('#pixelCanvas').data('origColor', inputColor);

	    /* The method elem.closest(selector) returns the nearest ancestor that matches the selector.
	    In this case, we look for <td> on the way up from the source element.		
		let td = $(event.target.closest('td')); */		

		/* Condition if the specific box was not yet filled*/
		if(!(td.data('clickCount'))){
			td.data('clickCount', true);// assigning true to clickcount
			td.css( "background-color", inputColor );
		}else{ //Condition if the specific box was filled
			/* if user picks new color, the box filled with previously picked color will be filled with new color */				
			if (inputColor != origColor)
				td.css( "background-color", inputColor );
			else{// If box is filled with same color, will be unfilled
				td.data('clickCount', false);
				td.css( "background-color", 'transparent');					
			}
		}

	});
});

