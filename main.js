tg = window.Telegram.WebApp;
function cointiup(){
let value =Number( document.getElementById('coin-my').textContent);
    document.getElementById('coin-my').textContent = value+1;
    console.log(value);
    console.log(tg.initData)
}