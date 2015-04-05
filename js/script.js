var squares = 16;
var randomColor = "#000";
var random = "color";

$(document).ready(function(){
	drawGrid();
	color();
	black();
});

function drawGrid(){
	$('.wrapper').empty();
	
	for(var i = 1; i < squares + 1; i++){
	
		for(var j = 1; j < squares + 1; j++){
			var $cell = $("<div class = 'grid'></div>");
			$('.wrapper').append($cell);
		}
	}
	$('.grid').width(960/squares).height(960/squares);
	highlight();
};

function color (){
	$('#color').on('click',function(){
		random = "color";
		clear();
	});
};

function black (){
	$('#black').on('click',function(){
		random = "black";
		clear();
	});
};



function clear(){
		$('.wrapper').css('background','#f0f0f0');
		console.log("cleared");
		squares = parseInt(prompt("How many squares?"));
		drawGrid();
};

function highlight(){
	$('.grid').hover(function(){
		if (random === "black"){
			$(this).css('background','#000000');
			var op = $(this).css("opacity");
			$(this).css("opacity", ( op > 0.1 ) ? ( op - 0.1 ) : op );
		} else {
			$('.grid').css('opacity',1);
			randomColor = '#' + (Math.random()*0xFFFFFF << 0).toString(16);
			$(this).css('background',randomColor);
		}
	}, function(){
		
	});
};

/*function rotate(){
	$('#black').hover(function(){
		$(this).animate({
			transform: 'rotate(50deg)' 
		}, 1500 );
	});
};*/

