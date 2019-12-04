//VARIABLES
let advice = document.getElementById('advice');
let day = document.getElementById('day');

// GET TODAY's DATE
let date = new Date();
day.innerText = date.toLocaleString();

// GET ADVICE API
const getAdvice = async () => {
    const response = await fetch ("https://api.adviceslip.com/advice");
    const data = await response.json();
    let adviceText = data.slip.advice;
    advice.innerHTML = adviceText;
}
getAdvice();

// GET MESSAGE EVERYDAY 86400 secs/day
setInterval(() => {
    getAdvice();
}, 86400 * 1000);