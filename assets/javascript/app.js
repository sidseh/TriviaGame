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

}, {
	question:"Michael Phelps is the most decorated Olympian of all time, the number of medals won by him?",
	answers:["24","25","27","28"],
	correctAns:"28"	

}, {
	quesiton:"For which movie did Leonardo Di Caprio win an Oscar?",
	answers:["Titanic","The Revenant","The Wolf of Wall Street","Blood Diamond"],
	correctAns:"The Revenant"
}, {
	question:"Francis J Underwood played by Kevin Spacey is a character from which popular TV show?",
	answers:["Mad Men","House of Cards","Reservoir Dogs","Narcos"],
	correctAns:"House of Cards"

}];


var game = {
	correct: 0,
	incorrect: 0,
	counter: 50,
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

		$('#subbod').prepend('<h2>Time Remaining: <span id= "counter" > 50 </span> Seconds</h2>');

		$('#start').remove();
		for(var i=0; i<questions.length;i++){
		
		$('#subbod').append('<h2>' +questions[i].question+ '</h2>');
		
		for (var j = 0; j<questions[i].answers.length;j++){

			$('#subbod').append("<input type='radio' name= 'question "+i+"' value=''" + questions[i].answers[j] + "'>" + questions[i].answers[j]);

			}
		}	
		$('#subbod').append('<br> <button id="end" >Done</button');
	},
	done: function() {

		$.each($('input[name="question-0]":checked'), function(){
			if($(this).val() == questions[0].correctAns){
				game.correct++;
			}
			else{
				game.incorrect++;
			}

			}),	
			$.each($('input[name="question-1]":checked'),function(){
			if($(this).val()==questions[1].correctAns){
				game.correct++;
			}
			else{
				game.incorrect++;
			}

			
		}),
			$.each($('input[name="question-2]":checked'),function(){
			if($(this).val()==questions[2].correctAns){
				game.correct++;
			}
			else{
				game.incorrect++;
			}

			
		}),
			$.each($('input[name="question-3]":checked'),function(){
			if($(this).val()==questions[3].correctAns){
				game.correct++;
			}
			else{
				game.incorrect++;
			}

			
		}),
			$.each($('input[name="question-4]":checked  '),function(){
			if($(this).val()==questions[4].correctAns){
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

			$('#subbod').hmtl("<h2>Done!</h2>");
			$('#subbod').append("<h3>Correct Answers: " +this.correct+ "</h3>");
			$('#subbod').append("<h3>incorrect Answers: " +this.incorrect+ "</h3>" );
			$('#subbod').append("<h3>Unanswered: " +(questions.length-(this.incorrect+this.correct))+"</h3> ");


		}	
	}


