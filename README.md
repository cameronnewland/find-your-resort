find-your-resort
================

Find Your Resort is a resort discovery application, but it can be easily repurposed to serve as a multiple-choice quiz of any length, using either images or text as quiz answers.

Upon clicking 'Start Quiz', the first pair of question and answer are shown, and once the user has selected an answer, they can click 'Next', which displays the second pair of question and answer.

After answering the six questions, the user is prompted to enter their email address, which is then sent via jQuery's .post method to Wufoo's form data clearinghouse.

Then, the user's result is displayed on the last slide, and the user is given the option to take the quiz again by clicking 'Try Again'.

The questions are stored sequentially in appData.questions, the answers similarly in appData.answers, and quiz result options in appData.destinations.

The logic for determining which quiz result to display to the user is contined within the computeResult() function.
