(function(){

  //function constructor for Question

function Question(question,answers,correctAns){
   this.question=question;
   this.answers=answers;
   this.correctAns=correctAns;
}
//prototype for display
Question.prototype.displayQuestion=function(){

  console.log(this.question);
  for(var i=0;i< this.answers.length;i++)
  {
    console.log(i+':'+this.answers[i]);
  }
}

Question.prototype.checkAnswer=function(ans,callBack){
    var sc;
    if(ans === this.correctAns)
    {
      console.log('Answer is correct');
      sc=callBack(true);
    }
    else{
      console.log('Answer is not correct');
      sc=callBack(false);
    }
    this.displayScore(sc);
}


Question.prototype.displayScore=function(score){
  console.log('Current Score is:'+score);
  console.log('--------------------------------------------');
}


//Question generation
var q1=new Question('What is the capital of India?', ['New Delhi','Ohio','New York'], 0);
var q2=new Question('Are you interested in programming?',['Not Sure','Yes','No'],1);
var q3=new Question('Who is Narendra Modi?',['President','PM'],1);

var questions=[q1,q2,q3];

function score(){
  var sc=0;
  return function (correct){
     if(correct)
     {
      sc+=1;
     }
     return sc;
  }
}
var keepScore=score();

function nextQuestion(){

   //random number question
    var n=Math.floor(Math.random()*questions.length);

    questions[n].displayQuestion();

    //ask for answer
    var correctA=prompt(questions[n].question);

    if(correctA !== 'exit')
     {
       questions[n].checkAnswer(parseInt(correctA),keepScore);
       nextQuestion();
     }
      

}

nextQuestion();

})();
