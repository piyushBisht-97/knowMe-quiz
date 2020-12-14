var readlineSync = require('readline-sync')
const chalk = require('chalk');
 const log = console.log
var score =0;

var userName = readlineSync.question(chalk.blueBright('May I have your name ? '));

if (readlineSync.keyInYN('Do you want play know your friend quiz ?')){
log(chalk.blue.bgWhiteBright.bold("HI " + userName + " Lets play........ "))

function play(question,answer)
{
  var userAnswer = readlineSync.question(question);
if(userAnswer.toUpperCase()===answer.toUpperCase()){
  score = score + 1;
  log(chalk.blue.bgWhiteBright.underline.bold("** your anser is correct **"))
  
}
else {
  log(chalk.red.underline.bgWhiteBright.bold("You are wrong !!! "))
}

log(chalk.bold.bgWhiteBright.greenBright("current score "+ score,))
log(chalk.red("--------------------------"))

}

var questions=[{question:"Piyush resides in which city ? ",answer:"noida"},{question:"Piyush works in ? ",answer:"TCS"},{question:"Piyush attained schooling in which city ? ",answer:"bareilly"},{question:"What is the year in which Piyush is born ?  ",answer:"1997"},{question:"Which anime Piyush likes the most ? ",answer:"Demon Slayer"},{question:"Which Bollywood movie he likes the most ? " ,answer:"Tumbaad"},{question:"Which sports Piyush plays the best ? ",answer:"Badminton"}]


for (i=0;i<questions.length;i++)
{
var currentQuestion = questions[i]
play(currentQuestion.question,currentQuestion.answer)
}

log(chalk.blue.bgWhiteBright.underline.bold("Well Done your final score is  "+ score))
}

else{

  log(chalk.red.underline.bgWhiteBright.bold("Search me on Wikipedia , Find me on Insatgram,FaceBook"))
}