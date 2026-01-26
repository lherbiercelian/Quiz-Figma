let timerEnabled = localStorage.getItem("Timer");
let currentQuestionIndex = 0;
let score = 0;
let timerInterval;
const timeDisplay = document.getElementById("Time");

function startQuiz() {
    timeDisplay.innerText = "00";
    const startSection = document.getElementById("StarQuiz");
    startSection.classList.add("hidden");

    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("Score").innerText = score;

    displayQuestion(currentQuestionIndex);

    if (timerEnabled) {
        startTimer();
    }
}

function displayQuestion(index) {
    if (index >= questions.length) {
        finishQuiz();
        return;
    }

    const question = questions[index];
    const container = document.getElementById('Quizcontent');
    container.classList.remove('hidden');
    container.innerHTML = "";

    let cardsHTML = "";

    for (let i = 0; i < question.options.length; i++) {
        const option = question.options[i];
        let keysHTML = "";

        for (let j = 0; j < option.keys.length; j++) {
            const k = option.keys[j];

            keysHTML += `
            <div class="Touch">
                <p class="Mac">${k.mac}</p>
                <p class="Win hidden">${k.win}</p>
            </div>
            `;

            if (j < option.keys.length - 1) {
                keysHTML += '<p class="plus">+</p>';
            }
        }

        cardsHTML += `
            <label class="card" for="opt_${i}">
                ${keysHTML}
                <input type="radio" name="reponse" id="opt_${i}" value="${i}" class="radio-input">
            </label>
        `;
    }

    container.innerHTML = `
        <h2>${question.title}</h2>
        <h3>${question.subtitle}</h3>
        <article>${cardsHTML}</article>
        <button onclick="checkAnswer()" class="Next">Suivant</button>
    `;
}

function checkAnswer() {
    const selectedInput = document.querySelector('input[name="reponse"]:checked');

    if (selectedInput) {
        const selectedIndex = parseInt(selectedInput.value);
        const question = questions[currentQuestionIndex];

        if (question.options[selectedIndex].isCorrect) {
            score++;
            document.getElementById("Score").innerText = score;
        }

        currentQuestionIndex++;

        if (timerEnabled) {
            startTimer();
        }

        displayQuestion(currentQuestionIndex);
    }
}

function finishQuiz() {
    const container = document.getElementById('Quizcontent');
    container.classList.add('hidden');

    const endElement = document.getElementById("EndQuiz");
    endElement.classList.remove("hidden");

    NoteQuiz();
}

function Reset() {
    currentQuestionIndex = 0;
    score = 0;
    clearInterval(timerInterval);
    timeDisplay.innerText = "00";
    document.getElementById("Score").innerText = score;

    let endElement = document.getElementById("EndQuiz");
    endElement.classList.add("hidden");

    let startElement = document.getElementById("StarQuiz");
    startElement.classList.remove("hidden");
}

function NoteQuiz() {
    clearInterval(timerInterval);
    let element = document.getElementById("Scorecolor");
    let commentaire = document.getElementById("NoteQuiz");
    document.getElementById("ScoreFinal").innerText = score;

    if (score === 0) {
        element.style.color = "#4d0404ff";
        commentaire.innerText = "Tu l'as fait les yeux fermés ?";
    } else if (score >= 1 && score <= 3) {
        element.style.color = "#be0000ff";
        commentaire.innerText = "Peut mieux faire !";
    } else if (score >= 4 && score <= 6) {
        element.style.color = "#0515ebff";
        commentaire.innerText = "Tu cliques encore trop";
    } else if (score >= 7 && score <= 9) {
        element.style.color = "#1acc0aff";
        commentaire.innerText = "Ta souris prend la poussière ?";
    } else if (score === 10) {
        element.style.color = "#ffd500ff";
        commentaire.innerText = "Le dieu des raccourcis !";
    }
}

function startTimer() {
    clearInterval(timerInterval);
    let timeLeft = 30;
    timeDisplay.innerText = timeLeft;

    timerInterval = setInterval(() => {
        timeLeft--;
        timeDisplay.innerText = timeLeft

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            currentQuestionIndex++;
            if (timerEnabled) {
                startTimer();
            }
            displayQuestion(currentQuestionIndex);
        }
    }, 1000);
}