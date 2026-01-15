let currentQuestion = 0;
let score = 0;
let timerInterval;
const timeDisplay = document.getElementById("Time");

function startQuiz() {
    const startSection = document.getElementById("StarQuiz");
    startSection.classList.add("hidden");

    currentQuestion = 1;

    let questionElement = document.getElementById("Question" + currentQuestion);

    questionElement.classList.remove("hidden");
    console.log("Quiz started");
    startTimer();
}

function NextQuestion() {
    let questionElement = document.getElementById("Question" + currentQuestion);

    if (currentQuestion === 1) {
        Q1();
    }
    if (currentQuestion === 2) {
        Q2();
    }
    if (currentQuestion === 3) {
        Q3();
    }
    if (currentQuestion === 4) {
        Q4();
    }
    if (currentQuestion === 5) {
        Q5();
    }
    if (currentQuestion === 6) {
        Q6();
    }
    if (currentQuestion === 7) {
        Q7();
    }
    if (currentQuestion === 8) {
        Q8();
    }
    if (currentQuestion === 9) {
        Q9();
    }
    if (currentQuestion === 10) {
        Q10();
        questionElement.classList.add("hidden");
        let endElement = document.getElementById("EndQuiz");
        endElement.classList.remove("hidden");
        NoteQuiz();
    }

    questionElement.classList.add("hidden");
    currentQuestion++;
    let nextElement = document.getElementById("Question" + currentQuestion);
    nextElement.classList.remove("hidden");
    startTimer();
}

function Reset() {
    currentQuestion = 0;
    score = 0;
    clearInterval(timerInterval);
    timeDisplay.innerText = "00.00";
    document.getElementById("Score").innerText = score;
    let endElement = document.getElementById("EndQuiz");
    endElement.classList.add("hidden");
    let startElement = document.getElementById("StarQuiz");
    startElement.classList.remove("hidden");
}

function Q1() {
    let Q1option1 = document.getElementById("Q1Option1")
    let Q1option2 = document.getElementById("Q1Option2")
    let Q1option3 = document.getElementById("Q1Option3")
    let Q1option4 = document.getElementById("Q1Option4")

    if (Q1option3.checked) {
        score++;
        document.getElementById("Score").innerText = score;
        console.log("Score: " + score);
    }
}

function Q2() {
    let Q2option1 = document.getElementById("Q2Option1")
    let Q2option2 = document.getElementById("Q2Option2")
    let Q2option3 = document.getElementById("Q2Option3")
    let Q2option4 = document.getElementById("Q2Option4")

    if (Q2option2.checked) {
        score++;
        document.getElementById("Score").innerText = score;
        console.log("Score: " + score);
    }
}

function Q3() {
    let Q3option1 = document.getElementById("Q3Option1")
    let Q3option2 = document.getElementById("Q3Option2")
    let Q3option3 = document.getElementById("Q3Option3")
    let Q3option4 = document.getElementById("Q3Option4")

    if (Q3option4.checked) {
        score++;
        document.getElementById("Score").innerText = score;
        console.log("Score: " + score);
    }
}

function Q4() {
    let Q4option1 = document.getElementById("Q4Option1")
    let Q4option2 = document.getElementById("Q4Option2")
    let Q4option3 = document.getElementById("Q4Option3")
    let Q4option4 = document.getElementById("Q4Option4")

    if (Q4option2.checked) {
        score++;
        document.getElementById("Score").innerText = score;
        console.log("Score: " + score);
    }
}

function Q5() {
    let Q5option1 = document.getElementById("Q5Option1")
    let Q5option2 = document.getElementById("Q5Option2")
    let Q5option3 = document.getElementById("Q5Option3")
    let Q5option4 = document.getElementById("Q5Option4")

    if (Q5option2.checked) {
        score++;
        document.getElementById("Score").innerText = score;
        console.log("Score: " + score);
    }
}

function Q6() {
    let Q6option1 = document.getElementById("Q6Option1")
    let Q6option2 = document.getElementById("Q6Option2")
    let Q6option3 = document.getElementById("Q6Option3")
    let Q6option4 = document.getElementById("Q6Option4")

    if (Q6option2.checked) {
        score++;
        document.getElementById("Score").innerText = score;
        console.log("Score: " + score);
    }
}

function Q7() {
    let Q7option1 = document.getElementById("Q7Option1")
    let Q7option2 = document.getElementById("Q7Option2")
    let Q7option3 = document.getElementById("Q7Option3")
    let Q7option4 = document.getElementById("Q7Option4")

    if (Q7option3.checked) {
        score++;
        document.getElementById("Score").innerText = score;
        console.log("Score: " + score);
    }
}

function Q8() {
    let Q8option1 = document.getElementById("Q8Option1")
    let Q8option2 = document.getElementById("Q8Option2")
    let Q8option3 = document.getElementById("Q8Option3")
    let Q8option4 = document.getElementById("Q8Option4")

    if (Q8option2.checked) {
        score++;
        document.getElementById("Score").innerText = score;
        console.log("Score: " + score);
    }
}

function Q9() {
    let Q9option1 = document.getElementById("Q9Option1")
    let Q9option2 = document.getElementById("Q9Option2")
    let Q9option3 = document.getElementById("Q9Option3")
    let Q9option4 = document.getElementById("Q9Option4")

    if (Q9option4.checked) {
        score++;
        document.getElementById("Score").innerText = score;
        console.log("Score: " + score);
    }
}

function Q10() {
    let Q10option1 = document.getElementById("Q10Option1")
    let Q10option2 = document.getElementById("Q10Option2")
    let Q10option3 = document.getElementById("Q10Option3")
    let Q10option4 = document.getElementById("Q10Option4")

    if (Q10option3.checked) {
        score++;
        document.getElementById("Score").innerText = score;
        console.log("Score: " + score);
    }
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

const timer = document.getElementById('timer');
const timerInput = document.querySelector('input');

timerInput.addEventListener('change', () => {
    if (timerInput.checked) {
        console.log('Timer active: true');
        localStorage.setItem("Timer", "true");
    } else {
        console.log('Timer active: false');
        localStorage.setItem("Timer", "false");
    }
});

function startTimer() {
    clearInterval(timerInterval);

    let timerEnabled = localStorage.getItem("Timer");

    if (timerEnabled === "true") {
        let timeLeft = 30;
        timeDisplay.innerText = timeLeft + ".00";

        timerInterval = setInterval(() => {
            timeLeft--;

            if (timeLeft < 10) {
                timeDisplay.innerText = "0" + timeLeft + ".00";
            } else {
                timeDisplay.innerText = timeLeft + ".00";
            }

            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                NextQuestion();
            }
        }, 1000);
    } else {
        timeDisplay.innerText = "00.00";
    }
}