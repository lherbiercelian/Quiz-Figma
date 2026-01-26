const timerInput = document.getElementById('timer');

timerInput.addEventListener('change', () => {
    if (timerInput.checked) {
        console.log('Timer active: true');
        localStorage.setItem("Timer", "true");
    } else {
        console.log('Timer active: false');
        localStorage.setItem("Timer", "false");
    }
});

function onLoad() {
    let timerEnabled = localStorage.getItem("Timer");
    console.log(timerEnabled);

    if (timerEnabled === 'true') {
        timerInput.checked = true;
    }
}

onLoad();