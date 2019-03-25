
var beasts = ['penguin1', 'penguin2', 'penguin3', 'penguin4', 'penguin5', 'penguin6', 'penguin7', 'penguin8', 'yeti']
var score = 0
var lives = 3

var touched = [false, false, false, false, false, false, false, false, false]



function shuffleArray(array) {
	for (var i = array.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
}

var render = function(array){
	shuffleArray(array)
	for(i=0; i<array.length; i++){
		$('#title').after(`<div class='${beasts[i]}'></div>`)
	}
}

function gameOver(){
   alert("game over 😔")
}

$(document).ready( function() {
	render(beasts)

	console.log('score', score)

	$("#score").html("Score: " +score);
	$("#lives").html("Lives: " +lives);
	

 	  
		$(".penguin1").mousedown(function() {
			if(score==8){
				alert("You won!!!");
			}else{
		
				if(touched[0]==false){
				score = score + 1;
				$("#score").html("Score: " +score);
				//alert("Hello, I am #1!!");
				
				touched[0]=true;
				}else{
		    	alert("You already found me!");
    			// setTimeout(function(){ location.reload(); }, 2000);
				}
			}
    	});

		$(".penguin2").mousedown(function() {

			if(score==8){
				alert("You won!!!");
			}else{

				if(touched[1]==false){
				score = score + 1;
				$("#score").html("Score: " +score);
				//alert("Hello, I am #2!!");
				touched[1]=true;
				}else{
		
				alert("You already found me!");
    	
				}
			}
    	
    	});

		$(".penguin3").mousedown(function() {
			if(score==8){
				alert("You won!!!");
			}else{
				if(touched[2]==false){
				score = score + 1;
				$("#score").html("Score: " +score);
			//	alert("Hello, I am #3!!");
				touched[2]=true;
				}else{
		
				alert("You already found me!");
    	
				}
			}
    	});

		$(".penguin4").mousedown(function() {

			if(score==8){
				alert("You won!!!");
			}else{
				if(touched[3]==false){
				score = score + 1;
				$("#score").html("Score: " +score);
				//alert("Hello, I am #4!!");
				touched[3]=true;
				}else{
		
				alert("You already found me!");
    			}
			}
    	});

		$(".penguin5").mousedown(function() {
			if(score==8){
				alert("You won!!!");
			}else{
				if(touched[4]==false){
				score = score + 1;
				$("#score").html("Score: " +score);
			//	alert("Hello, I am #5!!");
				touched[4]=true;
				}else{
		
				alert("You already found me!");
    			}
			}
    	});

		$(".penguin6").mousedown(function() {
			if(score==8){
				alert("You won!!!");
			}else{
				if(touched[5]==false){
				score = score + 1;
				$("#score").html("Score: " +score);
				//alert("Hello, I am #6!!");
				touched[5]=true;
				}else{
		
				alert("You already found me!");
    			}
			}
    	});

		$(".penguin7").mousedown(function() {
			if(score==8){
				alert("You won!!!");
			}else{
				if(touched[6]==false){
				score = score + 1;
				$("#score").html("Score: " +score);
				//alert("Hello, I am #7!!");
				touched[6]=true;
				}else{
		
				alert("You already found me!");
    		}
		}
    	});

		$(".penguin8").mousedown(function() {
			if(score==8){
				alert("You won!!!");
			}else{
				if(touched[7]==false){
				score = score + 1;
				$("#score").html("Score: " +score);
				
	            //alert("Hello, I am #8!!");
				touched[7]=true;
				}else{
		
				alert("You already found me!");
				setTimeout(function(){ location.reload(); }, 2000);
    			}
			}
    	});

		$(".yeti").mousedown(function() {


				if (lives == 0){
				 gameOver()
				localStorage.setItem('score', score) // score is a string
				localStorage.setItem('lives', lives) // break with lives=0
				$("#score").html("Score: " +score);
				$('#lives').html("lives : "+lives);

				setTimeout(function(){ location.reload(); }, 2000);
				}else{ 
				alert("Yaaaarrrr!");
				lives = lives - 1
                
				$("#score").html("Score: " +score);
				$('#lives').html("lives : "+lives);
				}

		});

	  	

});

var min = 1;
var sec = 30;

function timer(){

   var x = setInterval(function() {

         if( sec > 0 ){ sec = sec-1 }

         if( sec === 0 && min === 1){ sec = 60; min = 0; }

         if( sec === 0 && min === 0){ clearInterval(x) }

         if( sec < 10 ){
            document.getElementById("timer").innerHTML = `0${min} : 0${sec}`
         }else{
         	document.getElementById("timer").innerHTML = `0${min} : ${sec}`
         }

   }, 1000)
 

}

timer()



function show_message(){
	var message = document.getElementById("message")

	setTimeout(function(){
		message.innerHTML = 'Hello'
	}, 1000);

	setTimeout(function(){
		message.innerHTML = 'Let`s play!!!'
	}, 2000)

		setTimeout(function(){
		message.innerHTML = ''
	}, 3500);
}













