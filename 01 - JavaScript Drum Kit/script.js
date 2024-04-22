function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

    if (!audio) {
        alert("Press right Key Please");
        return;
    }
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
    setTimeout(() => {
        key.classList.remove('playing');
    }, 120); // 0.07 seconds in milliseconds is 70 milliseconds
    
}

window.addEventListener('keydown', playSound);
