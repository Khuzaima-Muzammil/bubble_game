let timer = 5
let score = 0;
let hitrn = 0;
function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}
function getNewHit() {
     hitrn = Math.floor(Math.random() * 10)
    document.querySelector("#hitval").textContent = hitrn
}
function makebubble() {
    let clutter = ""
    for (let index = 1; index <= 160; index++) {
        let a = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble w-[30px] h-[30px] bg-amber-600 text-amber-50 rounded-full flex justify-center items-center hover:cursor-pointer hover:bg-amber-700">${a}</div>`
    }
    document.querySelector("#pbtm").innerHTML = clutter
}
function runtimer() {
    let intervalId = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else {
            clearInterval(intervalId); //interval bnd krdo wasai he memory me space lai rha hai
            document.querySelector("#pbtm").innerHTML = `<h1 class="font-bold font-black text-3xl">Game over</h1>`
        }
    }, 1000)
}

document.querySelector("#pbtm").addEventListener("click",(data)=>{
    let clickednum = (Number(data.target.textContent)) //hmai number string me mila tha lekin hum nai is ko number me bnana hai 
    if(clickednum === hitrn){
        increaseScore();
        makebubble();
        getNewHit();
    }
})

getNewHit();
runtimer();
makebubble();