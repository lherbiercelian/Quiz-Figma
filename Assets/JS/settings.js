const timerInput = document.getElementById('timer');
const randomInput = document.getElementById('randomquiz');
const keyboardInputs = document.querySelectorAll('input[name="radio"]');

timerInput.addEventListener('change', () => {
    if (timerInput.checked) {
        console.log('Timer active: true');
        localStorage.setItem("Timer", "true");
    } else {
        console.log('Timer active: false');
        localStorage.setItem("Timer", "false");
    }
});

randomInput.addEventListener('change', () => {
    if (randomInput.checked) {
        console.log('randomquiz active: true');
        localStorage.setItem("Random", "true");
    } else {
        console.log('randomquiz active: false');
        localStorage.setItem("Random", "false");
    }
});

keyboardInputs.forEach(input => {
    input.addEventListener('change', (e) => {
        if (e.target.checked) {
            console.log(`keyboard active: ${e.target.value}`);
            localStorage.setItem("keyboard", e.target.value);
        }
    });
});

function onLoad() {
    let timerEnabled = localStorage.getItem("Timer");
    let randomquizEnabled = localStorage.getItem("Random");
    let keyboardEnabled = localStorage.getItem("keyboard");

    console.log(timerEnabled);
    console.log(randomquizEnabled);
    console.log(keyboardEnabled);

    if (timerEnabled === 'true') {
        timerInput.checked = true;
    }

    if (randomquizEnabled === 'true') {
        randomInput.checked = true;
    }

    if (keyboardEnabled) {
        const radioButton = document.querySelector(`input[name="radio"][value="${keyboardEnabled}"]`);
        if (radioButton) {
            radioButton.checked = true;
        }
    }
}

onLoad();