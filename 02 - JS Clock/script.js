const hr = document.querySelector('.hour');
const min = document.querySelector('.minute');
const sc = document.querySelector('.second');
const Time = document.querySelector('.showTime');

const ShowTime = document.createElement('span');
ShowTime.classList.add('showDesign');
Time.appendChild(ShowTime); 


function setTime() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const scDeg = ((seconds / 60) * 360) - 90;
    const minDeg = ((minutes / 60) * 360) - 90;
    const hrDeg = ((hours / 60) * 360) + 171;

    sc.style.transform = `rotate(${scDeg}deg)`;
    min.style.transform = `rotate(${minDeg}deg)`;
    hr.style.transform = `rotate(${hrDeg}deg)`;

    ShowTime.textContent = `${hours} : ${minutes} : ${seconds}`;
}

setInterval(setTime, 1000);
