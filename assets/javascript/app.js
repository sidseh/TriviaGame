$('#start').on('click',function(){

	 game.start();
}) 


var questions = [{
	question:"What is the capital of Australia?",
	answers:["Melbourne", "Sydney", "Wellington", "Canberra"],
	correctAns: "Canberra"
}, {
	question:"Which country won the 2010 FIFA World Cup?",
	answers:["Germany","Brazil","Spain","Argentina"],
	correctAns:"Spain"

}];


var game = {
	correct: 0,
	incorrect: 0,
	counter: 20,
	countdown: function(){
		game.counter--;
		$('#counter').html(game.counter);
		if(game.counter<=0){
			console.log("Time's up");
			game.done();
		}
	},

	start: function(){

		timer = setInterval(game.countdown, 1000);

		$('#subbod').prepend('<h2>Time Remaining: <span id= "counter" > 120 </span> Seconds</h2>');

		$('#start').remove();
		for(var i=0; i<questions.length;i++){
		
		$('#subbod').append('<h2>' +questions[i].question+ '</h2>');
		
		for (var j = 0; j<questions[i].answers.length;j++){

			$('#subbod').append("<input type='radio' name= 'question "+i+"' value=''" + questions[i].answers[j] + "'>" + questions[i].answers[j]);

			}
		}	
	},
	done: function() {

		$.each($('input[name="question-0]":'),function(){
			if($(this).val()==questions[0].correctAns){
				game.correct++;
			}
			else{
				game.incorrect++;
			}

			}),	
			$.each($('input[name="question-1]":'),function(){
			if($(this).val()==questions[1].correctAns){
				game.correct++;
			}
			else{
				game.incorrect++;
			}

			
		});
		this.result();
		},
		result: function(){
			clearInterval(timer);

			$('#subbod h2').remove();

			$('#subbod').hmtl("<h2>All done!</h2>");
			$('#subbod').append("<h3>Correct Answers: " +this.correct+ "</h3>");
			$('#subbod').append("<h3>incorrect Answers: " +this.incorrect+ "</h3>" );
			$('#subbod').append("<h3>Unanswered: " +(questions.length-(this.incorrect+this.correct))+"</h3> ");


		}	
	}

