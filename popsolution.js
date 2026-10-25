//change 5 to the total number of questions
var total=10
var question=new Array()
for (i=1;i<=total+1;i++){
temp="choice"+i+"=new Array()"
eval(temp)
}
var solution=new Array()

/*Below lists the phrases that will be randomly displayed if the user correctly answers the question. You may extend or shorten this list as desired*/
var compliments=new Array()
compliments[0]="Wahoo!"
compliments[1]="Super!"
compliments[2]="Amazing!"
compliments[3]="AWESOME."
compliments[4]="Perfect!"
compliments[5]="Yippee!"
compliments[6]="Yessss!"
compliments[7]="You're on FIRE!"
compliments[8]="FABULOUS!"
compliments[9]="You ROCK!"
compliments[10]="Yabadabadoo!"


/*Below lists the questions, its choices, and finally, the solution to each question. Folow the exact format below when editing the questions. You may have as many questions as needed. Check doc at http://javascriptkit.com/script/script2/comboquiz.htm for more info
*/

question[1]="Which iconic golf course hosts The Masters every year?"
choice1[1]="Augusta National"
choice1[2]="Pebble Beach"
choice1[3]="St Andrews"
choice1[4]="Pinehurst"

question[2]="Which country was first to win back-to-back FIFA World Cups?"
choice2[1]="Italy"
choice2[2]="Uruguay"
choice2[3]="Brizil"
choice2[4]="Argentina"

question[3]="Which NFL player is the all time record holder for regular season rushing yards?"
choice3[1]="Fred Taylor"
choice3[2]="Barry Sanders"
choice3[3]="Ricky Williams"
choice3[4]="Emmitt Smith"

question[4]="What year was the first winter Olympics?"
choice4[1]="1896"
choice4[2]="1924"
choice4[3]="776 BC"
choice4[4]="2026"

question[5]="What country hosted the first modern Olyimpic games?"
choice5[1]="Germany"
choice5[2]="Italy"
choice5[3]="Greece"
choice5[4]="Pakistan"

question[6]="In the MLB what is the distance from the pitcher's mound to homeplate?"
choice6[1]="60ft 6in"
choice6[2]="55ft 0in"
choice6[3]="63ft 3in"
choice6[4]="50ft 9in"

question[7]="How many teams are picked for the NCAA basketball tournament?"
choice7[1]="24"
choice7[2]="100"
choice7[3]="68"
choice7[4]="76"

question[8]="What NHL team hass the tallest goalie to play in a game in?"
choice8[1]="Tampa Bay Lightning"
choice8[2]="Philadelphia Flyers"
choice8[3]="Edmondton Oilers"
choice8[4]="Florida Panthers"

question[9]="What School is the Pickleball National Champion? (Not though the NCAA)"
choice9[1]="Northwestern Wildcats"
choice9[2]="SDSU Aztecs"
choice9[3]="FAU Owls"
choice9[4]="Houston Cougars"

question[10]="Which FBS team has the longest active scoring streak"
choice10[1]="TCU Horned Frogs"
choice10[2]="Florida Gators"
choice10[3]="Virgia Tech Hokies"
choice10[4]="Bosie State Broncos"

solution[1]="a"
solution[2]="a"
solution[3]="d"
solution[4]="b"
solution[5]="c"
solution[6]="a"
solution[7]="c"
solution[8]="d"
solution[9]="c"
solution[10]="b"
