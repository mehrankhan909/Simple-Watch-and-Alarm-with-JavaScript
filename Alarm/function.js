
const time = document.querySelector("h1");

setInterval(()=>{
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    hour = hour < 10? `0${hour}` : hour;
    min = min < 10? `0${min}` : min;
    sec = sec < 10? `0${sec}` : sec;
    if(hour>=12){
        if(hour==12){
            hour = hour < 10? `0${hour}` : hour;
            time.innerHTML = `${hour}:${min}:${sec} PM`;
            return; 
        }
        hour = hour - 12;
        hour = hour < 10? `0${hour}` : hour;
        time.innerHTML = `${hour}:${min}:${sec} PM`;
        return;
    }
    time.innerHTML = `${hour}:${min}:${sec} AM`;
}, 1000);

let button = document.querySelector("button");
let input = document.querySelector("input");
button.addEventListener("click",()=>{
    let inputValue = input.value;
    if(inputValue>="12:00"){
        let li = document.createElement("li");
        li.innerHTML = `${inputValue} PM`;
        let ul = document.querySelector("ul");
        ul.appendChild(li);
        //close x icon for canceling the existing child
        let close = document.createElement("button");
        close.innerHTML = "X";
        close.classList.add("close");
        li.appendChild(close);
        close.addEventListener("click",()=>{
            ul.removeChild(li);
        })
        setInterval(function fate(){
            let date = new Date();
            let hour = date.getHours();
            hour = hour < 10? `0${hour}` : hour;
            let min = date.getMinutes();
            min = min < 10? `0${min}` : min;
            let times = `${hour}:${min}`;
        if(inputValue==times){
            alarm();
        }
        }, 1000)
       
        return;
    }
    else{
    let li = document.createElement("li");
    li.innerHTML = `${inputValue} AM`;
    let ul = document.querySelector("ul");
    ul.appendChild(li);
    let close = document.createElement("button");
        close.innerHTML = "X";
        close.classList.add("close");
        li.appendChild(close);
        close.addEventListener("click",()=>{
            ul.removeChild(li);
            setInterval(function fate(){
            let date = new Date();
            let hour = date.getHours();
            hour = hour < 10? `0${hour}` : hour;
            let min = date.getMinutes();
            min = min < 10? `0${min}` : min;
            let times = `${hour}:${min}`;
            if(inputValue==times){
                alarm();
            }
            }, 1000)
        })
    }
})

function alarm(){
    let alrm = document.querySelector("audio");
    alrm.muted = false;
    alrm.play();
}