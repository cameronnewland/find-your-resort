$(document).ready(function () {
    $('#startquiz').click(function () {
        $(this).hide();
        startQuiz();
    });
    $('#navigation').click(function () {
        nextQuestion();
        insertResult();
    });
});
// Data object
var appData = {
    'questions': ['1) How would you describe this animal?<br><img src="images/Blue_Spot_Lion_Fish2_1.jpg" style="margin-top:15px;">',
            '2) How would you prefer your food?',
            '3) It\'s time to take a dip. Where do you want to swim?',
            '4) Which activity would you most enjoy?',
            '5) If you could see just one thing while in Australia, what would it be?',
            '6) Where would you rather spend an evening?', 'Enter your email address to receive your Australian travel destination:',
            'Your ideal Australian travel destination is:'],
    'answers': ['<ul><li><a onclick="setAnswer(\'a\');">Amazing</a></li><li><a onclick="setAnswer(\'l\');">Alien</a></li><li><a onclick="setAnswer(\'s\');">Scary</a></li><li><a onclick="setAnswer(\'p\');">Playful</a></li><li><a onclick="setAnswer(\'e\');">Exotic</a></li></ul>',
            '<ul><li style="float:left;"><a onclick="setAnswer(\'c\');"><img src="images/campfire.jpg" style="height:250px;width:250px;"><br>Campfire Cooking</a></li><li style="float:right;"><a onclick="setAnswer(\'f\');"><img src="images/main.jpg" style="height:250px;width:250px;"><br>Fine Dining</a></li><br style="clear:both"></ul>',
            '<ul><li style="float:left;"><a onclick="setAnswer(\'g\');"><img src="images/Guy_swimming_Emma_Gorge_on_El_Questro_Station.jpg" style="height:165px;width:165px;"><br>A natural gorge</a></li><li style="float:left;"><a onclick="setAnswer(\'o\');"><img src="images/Turtle_Bay_1_Hi_Res.jpg" style="height:165px;width:165px;"><br>The ocean</a></li><li style="float:left;"><a onclick="setAnswer(\'p\');"><img src="images/pool_and_sun_seats.jpg" style="height:165px;width:165px;"><br>The pool</a></li><br style="clear:both"></ul>',
            '<ul><li style="float:left;"><a onclick="setAnswer(\'s\');"><img src="images/Snorkeling_1.jpg" style="height:165px;width:165px;"><br>Snorkeling</a></li><li style="float:left;"><a onclick="setAnswer(\'f\');"><img src="images/main.jpg" style="height:165px;width:165px;"><br>Fine Dining</a></li><li style="float:left;"><a onclick="setAnswer(\'o\');"><img src="images/Activity_4WD_or_Bushtculture_Tour_HIGH_Res.JPG" style="height:165px;width:165px;"><br>Touring the Outback</a></li><br style="clear:both"></ul>',
            '<ul><li style="float:left;"><a onclick="setAnswer(\'f\');"><img src="images/scuba_diving_with_big_fish.jpg" style="height:165px;width:165px;"><br>This amazing fish!</a></li><li style="float:left;"><a onclick="setAnswer(\'o\');"><img src="images/aerial_cockburn_range_El_Questro_Station.jpg" style="height:165px;width:165px;"><br>The Australian Outback</a></li><li style="float:left;"><a onclick="setAnswer(\'g\');"><img src="images/Reef_1_1.jpg" style="height:165px;width:165px;"><br>Great Barrier Reef</a></li><br style="clear:both"></ul>',
            '<ul><li style="float:left;"><a onclick="setAnswer(\'b\');"><img src="images/Hero_019_Heron_Sunset.jpg" style="height:165px;width:165px;"><br>Beach sunset</a></li><li style="float:left;"><a onclick="setAnswer(\'o\');"><img src="images/Under_a_desert_moon.jpg" style="height:165px;width:165px;"><br>Outdoors dining</a></li><li style="float:left;"><a onclick="setAnswer(\'l\');"><img src="images/sunset_4.jpg" style="height:165px;width:165px;"><br>Lake sunset</a></li><br style="clear:both"></ul>',
            '<link href="http://cdn-images.mailchimp.com/embedcode/slim-081711.css" rel="stylesheet" type="text/css"><div id="mc_embed_signup"><form action="http://attentionspan.us1.list-manage.com/subscribe/post?u=2d1c68690b0297a10ee19c2d0&amp;id=aeebe77275" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate><label for="mce-EMAIL">Subscribe to our mailing list</label><input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required><div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div></form></div>',
            ''],
    'userAnswers': ['', '', '', '', '', '', 'EMAIL', 'ANSWER'],
    'destinations': [
        '<h2>El Questro Emma Gorge</h2><p>Learn more online at <a href="http://www.kingscanyonresort.com.au/">http://www.kingscanyonresort.com.au/</a></p>',
        '<h2>El Questro Homestead</h2><p>Learn more online at <a href="http://www.kingscanyonresort.com.au/">http://www.kingscanyonresort.com.au/</a></p>',
        '<h2>El Questro The Station</h2><p>Learn more online at <a href="http://www.kingscanyonresort.com.au/">http://www.kingscanyonresort.com.au/</a></p>',
        '<h2>Kings Canyon</h2><p>Learn more online at <a href="http://www.kingscanyonresort.com.au/">http://www.kingscanyonresort.com.au/</a></p>',
        '<h2>Heron Island</h2><p>Learn more online at <a href="http://www.kingscanyonresort.com.au/">http://www.kingscanyonresort.com.au/</a></p>',
        '<h2>Lizard Island</h2><p>Learn more online at <a href="http://www.kingscanyonresort.com.au/">http://www.kingscanyonresort.com.au/</a></p>',
        '<h2>Wilson Island</h2><p>Learn more online at <a href="http://www.kingscanyonresort.com.au/">http://www.kingscanyonresort.com.au/</a></p>'
        ]
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
var insertResult = function () {
    if (questionCount === 7) {
        computeResult();
    }
}
var computeResult = function () {
    var userAnswerString = appData['userAnswers'].join("");
    userAnswerString = userAnswerString.slice(0, 6);
    //  $('#answers').append("<br>" + userAnswerString);
    // console.log(userAnswerString.slice(0,3));
    if (userAnswerString.slice(0, 2) === "ef") {
        $('#answers').html(appData['destinations'][6]);
    } else if (userAnswerString.slice(0, 3) === "ecg" || userAnswerString.slice(0, 3) === "ecp") {
        $('#answers').html(appData['destinations'][3]);
    } else if (userAnswerString.slice(0, 3) === "eco") {
        $('#answers').html(appData['destinations'][5]);
    } else if (userAnswerString.slice(0, 3) === "pcg" || userAnswerString.slice(0, 3) === "pcp") {
        $('#answers').html(appData['destinations'][0]);
    } else if (userAnswerString.slice(0, 3) === "pco") {
        $('#answers').html(appData['destinations'][5]);
    } else if (userAnswerString.slice(0, 3) === "lfg" || userAnswerString.slice(0, 3) === "lfp") {
        $('#answers').html(appData['destinations'][1]);
    } else if (userAnswerString.slice(0, 3) === "lco" || userAnswerString.slice(0, 3) === "lfo") {
        $('#answers').html(appData['destinations'][4]);
    } else if (userAnswerString.slice(0, 3) === "lcp") {
        $('#answers').html(appData['destinations'][3]);
    } else if (userAnswerString.slice(0, 3) === "lcg") {
        $('#answers').html(appData['destinations'][2]);
    } else if (userAnswerString.slice(0, 2) === "pf") {
        var myRando = Math.floor(Math.random() * 3);
        if (myRando === 0) {
            $('#answers').html(appData['destinations'][1]);
        } else if (myRando === 1) {
            $('#answers').html(appData['destinations'][2]);
        } else {
            $('#answers').html(appData['destinations'][5]);
        }
    } else {
        $('#answers').html(appData['destinations'][Math.floor(Math.random()*7)]);
    }
}
var oldCode = function () {
    /* var answerHandler = function (userAnswer) {
    appData['userAnswers'][questionCount] = userAnswer;
    questionCount++;
    insertQuestion();
    alert(appData['userAnswers'][0]);
    } */
}