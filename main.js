
const timer = document.getElementById("timer");
const btn = document.getElementById("btn");

btn.onclick = function(){
    let input = document.getElementById("input").value;
    setInterval(() => {
        if(input >= 0){
            timer.innerText = input;
        }
        input--;
    }, 1000);
}