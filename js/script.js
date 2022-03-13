// CLOCK
const hour = document.querySelector('.clock__hour'),
      minutes = document.querySelector('.clock__minutes'),
      seconds = document.querySelector('.clock__seconds'),
      hourText = document.querySelector('.clock__text_hour'),
      minutesText = document.querySelector('.clock__text_minutes'),
      secondsText = document.querySelector('.clock__text_seconds'),
      ampmText = document.querySelector('.clock__text_ampm'),
      dateDay = document.querySelector('.date__day'),
      dateMonth = document.querySelector('.date__month'),
      dateYear = document.querySelector('.date__year'),
      themeBtn = document.querySelector('.clock__theme');


function getTime() {
    const date = new Date();

    return {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
        year: date.getFullYear(),
        month: date.getMonth(),
        day: date. getDate()
    };
}

function clock(date) {
    hour.style.transform = `rotateZ(${date.hours*30 + date.minutes*6/12}deg)`;
    minutes.style.transform = `rotateZ(${date.minutes*6}deg)`;
    seconds.style.transform = `rotateZ(${date.seconds*6}deg)`;

    console.log(date.hours);
    console.log(date.minutes);
    console.log(date.seconds);

}

function getAMorPM(date) {
    return date.hours >= 12 ? 'PM' : 'AM';
}

function addZero(time) {
    return time < 10 ? `0${time}` : time;
}

function clockText(date) {
    hourText.textContent = `${addZero(date.hours)}:`;
    minutesText.textContent = `${addZero(date.minutes)}`;
    ampmText.textContent = getAMorPM(date);
    
}

function dateText(date) {
    dateDay.textContent = `${addZero(date.day)}`;
    dateMonth.textContent = `${addZero(date.month+1)}`;
    dateYear.textContent = date.year;
}

function renderClock() {
    let timeInfo;
    setInterval(() => {
        timeInfo = getTime();
        clock(timeInfo);
        clockText(timeInfo);
        dateText(timeInfo);
    }, 1000);
}

renderClock();

themeBtn.addEventListener('click', () => {
    themeBtn.classList.toggle('dark__theme');
});

if (themeBtn.classList.contains('dark__theme')) {
    document.body.classList.add('dark-theme');
}