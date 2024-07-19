
let lessonProgress = 0;
let quizProgress = 0;
let quizScore = 0;

function completeLesson(amount) {
    lessonProgress += amount;
    if (lessonProgress > 100) {
        lessonProgress = 100;
    }
    document.getElementById('lessonProgressBar').style.width = lessonProgress + '%';
    document.getElementById('lessonProgressBar').textContent = lessonProgress + '%';
    document.getElementById('learningProgress').textContent = lessonProgress + '%';
}

function takeQuiz(score) {
    quizScore = score;
    quizProgress = (lessonProgress + quizScore) / 2;
    document.getElementById('quizProgressBar').style.width = quizProgress + '%';
    document.getElementById('quizProgressBar').textContent = quizProgress + '%';
    document.getElementById('quizScore').textContent = quizScore + '%';
}
