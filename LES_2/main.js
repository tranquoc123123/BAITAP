
class Animail {
    name
    constructor(name){
        this.name = name
    }
}
class rabbit extends Animail {
    Speak() {
        console.log("rabit rabit ...");
    } 
}


const convertToSecondTime = (seconds) => {
    let s = seconds%60
    let m = Math.floor(seconds/60)
    //console.log(s,m);
    if (s < 10) s = "0" + s;
    if (m < 10) m = "0" + m; 
    return m + ":" + s;
}

class Clock {
    id;
    count = 0;
    ctn;
    btnStart;
    btnStop;
    num;
    interval = null;
    txtime;
    btnPAS;

    constructor(id){
        this.id = id
        this.interval = setInterval(()=>{},0);
        this.num = document.createElement('num')
        this.num.innerHTML =  "" + id + ". "
        //
        this.ctn = document.createElement('div')
        //
        this.txtime = document.createElement('span')
        this.txtime.innerHTML =  "00:00"
        this.txtime.id ="txt"+id
        //
        this.btnStart = document.createElement('button')
        this.btnStart.innerHTML = "Start"
        this.btnStart.className = "Start"
        this.btnStart.id =  "btnSTT"+id
        this.btnStart.value = id
        //
        this.btnStop = document.createElement('button')
        this.btnStop.innerHTML = "Stop"
        this.btnStop.id =  "btnSTP"+id 
        this.btnStop.value = id
        //
        this.btnPAS = document.createElement('button')
        this.btnPAS.innerHTML = "PAUSE"
        this.btnPAS.id =  "btnPAS"+id 
        this.btnPAS.value = id
        //
        this.interval = document.createTextNode('counter');
        //

        this.ctn.appendChild(this.num)
        this.ctn.appendChild(this.txtime)
        this.ctn.appendChild(this.btnStart)
        this.ctn.appendChild(this.btnStop)
        this.ctn.appendChild(this.btnPAS)
    }
    // get interval() {
    //     return this.interval;
    // }
    // get count () {
    //     return this.count;
    // }
    // set interval(interval){
    //     this.interval = interval
    // }
    // set count(count){
    //     this.count = count
    // }
}

const clk = document.querySelector("#ClockErea")
const WG_NUMBER = 6;
let clkArr =[];
let intervalArr =[];
let countArr =[];
let Started =[];
for (let index = 1 ; index <= WG_NUMBER; index++) {
    let cl = new Clock(index);
    countArr[0] = 0;
    countArr[index] = 0;
    Started[index] = false;
    clk.appendChild(cl.ctn);   
}
const elements1 = document.querySelectorAll(`[id^="btnSTT"]`);
const elements2 = document.querySelectorAll(`[id^="btnSTP"]`);
const elements3 = document.querySelectorAll(`[id^="btnPAS"]`);
const btnStopAll = document.querySelector("#btnStopAll");
console.log(elements1);
elements1.forEach(element => {
    console.log(Started[element.value]);
        const txt = document.querySelector("#txt"+element.value);
        element.addEventListener("click", ()=>{ 
            if    (Started[element.value] === false) {
            intervalArr[element.value] = setInterval(()=>{ 
                countArr[element.value]++;
                txt.innerHTML = convertToSecondTime(countArr[element.value]);
            }
            , 1000);
            Started[element.value] = true; }
        });
  });

console.log(elements2);
elements2.forEach(element => {
        const txt = document.querySelector("#txt"+element.value);
        console.log(element.value);
        element.addEventListener("click", ()=>{ 
        txt.innerHTML = "00:00";
        clearInterval(intervalArr[element.value]);
        Started[element.value] = false;
        countArr[element.value]   = 0;
        });

});

console.log(elements3);
elements3.forEach(element => {
        const txt = document.querySelector("#txt"+element.value);
        element.addEventListener("click", ()=>{ 
            console.log(element.value);
            clearInterval(intervalArr[element.value]);
            Started[element.value] = false;
        });
});

btnStopAll.addEventListener("click",()=>{
    for (let index = 1; index <= WG_NUMBER; index++) {
        const txt = document.querySelector("#txt"+index);
        clearInterval(intervalArr[index]);
        Started[index] = false;
        clearInterval(intervalArr[index]);
        txt.innerHTML = "00:00";
        countArr[index]   = 0;
    }
});