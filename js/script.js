/*
** Author: Oliver Jake Bajas
** Date: July 15, 2015
 */

$(function(){

	var operator = '';
	var tempval = 0;
	var readyForClearScreen = 0;

	function assignOperator(operation){
		if( $('#display').val() ){
			tempval = $('#display').val(); // store current value temporarily for later usess
			operator = operation;
		}
	}

	function resetOperator(){
		operator = '';
	}

	function resetTempval(){
		tempval = 0;
	}

	function resetReadyForClearScreen(){
		readyForClearScreen = 0;
	}

	function clearTextbox(){
		if(readyForClearScreen > 0)
		{
			$('#display').val('');
		}
	}

	function displayResult(){
		var total = 0;
		if( $('#display').val() && tempval ){
			if( operator == '+' ){
				total = parseFloat(tempval) + parseFloat(document.getElementById('display').value);
				$('#display').val(total);
			}else if( operator == '-' ){
				total = parseFloat(tempval) - parseFloat(document.getElementById('display').value);
				$('#display').val(total);
			}else if( operator == '/' ){
				total = parseFloat(tempval) / parseFloat(document.getElementById('display').value);
				$('#display').val(total);
			}else if( operator == '*' ){
				total = parseFloat(tempval) * parseFloat(document.getElementById('display').value);
				$('#display').val(total);
			}
		}
		resetTempval();
		resetOperator();
	}
	
	//buttons
	$('.calc-buttons > button').click(function(){

		//dont clear textbox if has dot on end
		if( document.getElementById('display').value.slice(-1) !== '.' ){
			clearTextbox();
		}
		
		resetReadyForClearScreen();

		$('#display').val($('#display').val() + $(this).text());
	});

	//dot button
	$('.dot').click(function(){
		if(document.getElementById('display').value.indexOf('.') === -1)
		{
		  $('#display').val($('#display').val() + '.');
		}
	});

	//BASIC OPERATIONS
	$('.operators > button').click(function(){
		readyForClearScreen++;
		displayResult();
		assignOperator($(this).text());
	});
	

	//equal functionalities
	$('.equals > button').click(function(){
		displayResult();
	});

	//delete
	$('.delete').click(function(){
		var eq = document.getElementById('display').value;
		eq = eq.substring(0, eq.length - 1);
		$('#display').val(eq);
	});

	//reset
	$('.clearbox > button').click(function(){
		$('#display').val('');
		resetOperator();
		resetTempval();
	});

	//square root
	$('.sqrt > button').click(function(){
		var sqrt = Math.sqrt(document.getElementById('display').value);
		$('#display').val(sqrt);
	});

});