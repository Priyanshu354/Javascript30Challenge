const pannels = document.querySelectorAll('.pannel');
let lastClickedPannel = null;

function toggleOpen() {
    if (lastClickedPannel !== null) {
        lastClickedPannel.classList.remove('open');
        lastClickedPannel.querySelector(':first-child').classList.remove('in');
        lastClickedPannel.querySelector(':nth-child(3)').classList.remove('in');
    }

    this.classList.toggle('open');
    this.querySelector(':first-child').classList.toggle('in');
    this.querySelector(':nth-child(3)').classList.toggle('in');

    lastClickedPannel = this;
}

pannels.forEach(pannel => pannel.addEventListener('click', toggleOpen));
