# Lesson Skipper
This code is designed to rid people of this torment and will allow to skip through iready lessons and get 100% score on all quizzes (does not count diagnostic tests).

# How to use
Simply open an iReady lesson, use ctrl + shift + i or "inspect element" to open developer tools, click on "console" and paste the code from [lesson.js](lesson.js) into the console and hit enter. Exit the lesson, and when you open it again, it should have skipped to the next lesson/quiz.

If it's a quiz, you can get any score you want. By default, it's 100%, but you can change the `100` where it says `"{\"score\":100}";` on line 3 of [lesson.js](lesson.js) with any number.
