$(document).ready(function () {
    $('#startquiz').click(function () {
        startQuiz();
    });
    $('#navigation').click(function () {
        nextQuestion();
    });
});
// Data object
var appData = {
        'questions' : ['1) How would you describe this animal? Blue_Spot_Lion_Fish2_1.jpg','2) How would you prefer your food?','3) It\'s time to take a dip. Where do you want to swim?','4) Which activity would you most enjoy?','5) If you could see just one thing while in Australia, what would it be?','6) Where would you rather spend an evening?','Enter your email address to receive your Australian travel destination:','Your Australian travel destination is...'],
        'answers' : ['<ul><li><a onclick="setAnswer(\'a\');">Amazing</a></li><li><a onclick="setAnswer(\'l\');">Alien</a></li><li><a onclick="setAnswer(\'s\');">Scary</a></li><li><a onclick="setAnswer(\'p\');">Playful</a></li><li><a onclick="setAnswer(\'e\');">Exotic</a></li></ul>','<ul><li><a onclick="setAnswer(\'c\');">Campfire Cooking [IMAGE]</a></li><li><a onclick="setAnswer(\'f\');">Fine Dining [IMAGE]</a></li></ul>','3<ul><li><a onclick="setAnswer(\'g\');">A natural gorge</a></li><li><a onclick="setAnswer(\'o\');">The ocean</a></li><li><a onclick="setAnswer(\'p\');">The pool</a></li></ul>','<ul><li><a onclick="setAnswer(\'s\');">Snorkeling</a></li><li><a onclick="setAnswer(\'f\');">Fine Dining</a></li><li><a onclick="setAnswer(\'o\');">Touring the Outback</a></li></ul>','<ul><li><a onclick="setAnswer(\'f\');">This amazing fish!</a></li><li><a onclick="setAnswer(\'The Australian Outback\');">The Australian Outback</a></li><li><a onclick="setAnswer(\'g\');">Great Barrier Reef</a></li></ul>','<ul><li><a onclick="setAnswer(\'b\');">Beach sunset</a></li><li><a onclick="setAnswer(\'o\');">Outdoors dining</a></li><li><a onclick="setAnswer(\'l\');">Lake sunset</a></li></ul>','<link href="http://cdn-images.mailchimp.com/embedcode/slim-081711.css" rel="stylesheet" type="text/css"><div id="mc_embed_signup"><form action="http://attentionspan.us1.list-manage.com/subscribe/post?u=2d1c68690b0297a10ee19c2d0&amp;id=aeebe77275" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate><label for="mce-EMAIL">Subscribe to our mailing list</label><input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required><div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div></form></div>','Final Answer'],
        'userAnswers': ['','','','','','','EMAIL','ANSWER']
}
var questionCount = 0;
var userAnswer = "";
// Begin Quiz App
var startQuiz = function () {
    var questionCount = 0;
    $('#quiz').show();
    insertQuestion();
}
var insertQuestion = function () {
    $('#question').html(appData['questions'][questionCount]);
    $('#answers').html(appData['answers'][questionCount]);
}
var nextQuestion = function () {
    if (appData['userAnswers'][questionCount] != '') {
        questionCount++;
        insertQuestion();
    } else {
        alert('Please select an answer before going on to the next question.');
    }

    // alert(appData['userAnswers'][questionCount-1]);
}
var setAnswer = function (answer) {
    appData['userAnswers'][questionCount] = answer;
}
var oldCode = function () {
    /* var answerHandler = function (userAnswer) {
    appData['userAnswers'][questionCount] = userAnswer;
    questionCount++;
    insertQuestion();
    alert(appData['userAnswers'][0]);
    } */
}