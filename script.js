let currentLevel = 'easy';
let currentSetIndex = 0;
let score = 0;
let userName = '';

function startQuiz() {
    userName = document.getElementById('user-name').value;
    if (userName.trim() === '') {
        alert('Please enter your name to start the quiz.');
        return;
    }

    document.getElementById('intro-container').classList.add('hidden');
    document.getElementById('quiz-header').classList.remove('hidden');
    document.getElementById('question-form').classList.remove('hidden');

    loadQuestions();
}

function loadQuestions() {
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = '';

    const set = questions[currentLevel][currentSetIndex];
    set.forEach((question, index) => {
        const questionElement = document.createElement('div');
        questionElement.className = 'question';
        questionElement.innerHTML = `<p>${question.question}</p>`;
        
        const answersElement = document.createElement('div');
        answersElement.className = 'answers';
        question.answers.forEach(answer => {
            const answerElement = document.createElement('div');
            answerElement.innerHTML = `<input type="radio" name="question${index}" value="${answer}"> ${answer}`;
            answersElement.appendChild(answerElement);
        });
        questionElement.appendChild(answersElement);
        questionContainer.appendChild(questionElement);
    });
}

function nextSet() {
    const form = document.getElementById('question-form');
    const set = questions[currentLevel][currentSetIndex];

    let setScore = 0;
    set.forEach((question, index) => {
        const selectedAnswer = form[`question${index}`].value;
        if (selectedAnswer === question.correct) {
            setScore++;
        }
    });
    score += setScore;

    if (setScore >= 5) {
        currentLevel = 'hard';
    } else if (setScore >= 3) {
        currentLevel = 'medium';
    } else {
        currentLevel = 'easy';
    }

    currentSetIndex = 0;

    if (!questions[currentLevel] || questions[currentLevel].length === 0) {
        alert('No more questions available for this level. Quiz completed! Your total score: ' + score);
        return;
    }

    loadQuestions();
}

window.onload = loadQuestions;
