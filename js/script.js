/*
** Author: Oliver Jake Bajas
** Date: July 15, 2015
 */

$(function(){

	function displayResult(){
		var total = eval(document.getElementById('display').value);
		$('#display').val(total);
	}
	
	//buttons
	$('.calc-buttons > button').click(function(){
		$('#display').val($('#display').val() + $(this).text());
	});

	//equal functionalities
	$('.equals > button').click(function(){
		displayResult();
	});

	//Enter
	$(document).keypress(function(e){
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
	});

	//square root
	$('.sqrt > button').click(function(){
		var sqrt = Math.sqrt(document.getElementById('display').value);
		$('#display').val(sqrt);
	});

});