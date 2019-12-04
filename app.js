let advice = document.getElementById('advice');
let day = document.getElementById('day');

let date = new Date();
day.innerText = date.toLocaleString();

const getAdvice = async () => {
    const response = await fetch ("https://api.adviceslip.com/advice");
    const data = await response.json();
    let adviceText = data.slip.advice;
    advice.innerHTML = adviceText;
}

getAdvice();


