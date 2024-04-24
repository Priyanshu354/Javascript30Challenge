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
    }, 120);
    
}

window.addEventListener('keydown', playSound);
