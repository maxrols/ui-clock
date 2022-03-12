// CLOCK
const hour = document.querySelector('.clock__hour'),
      minutes = document.querySelector('.clock__minutes'),
      seconds = document.querySelector('.clock__seconds');

const clock = () => {
    let date = new Date();

    let hh = date.getHours() * 30,
        mm = date.getMinutes() * 6,
        ss = date.getSeconds() * 6;
    hour.style.transform = `rotateZ(${hh + mm /12}deg)`;
    minutes.style.transform = `rotateZ(${mm}deg)`;
    seconds.style.transform = `rotateZ(${ss}deg)`;

};

setInterval(clock, 1000);