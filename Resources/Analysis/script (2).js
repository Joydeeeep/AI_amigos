let lessonProgress = 0;

function completeLesson(amount) {
    lessonProgress += amount;
    if (lessonProgress > 100) {
        lessonProgress = 100;
    }
    document.getElementById('lessonProgressBar').style.width = lessonProgress + '%';
    document.getElementById('lessonProgressBar').textContent = lessonProgress + '%';
    document.getElementById('learningProgress').textContent = lessonProgress + '%';
}