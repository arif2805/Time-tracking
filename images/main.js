let daily = document.getElementById("daily");
let weekly = document.getElementById("weekly");
let monthly = document.getElementById("monthly");
let x=0;

function myFunction(){
    if (x=0){
        textWeekCurrnt.innerText="5hrs";
        textWeekPast.innerText="7hrs";
        x=1;
    }
    else{
        textWeekCurrnt.innerText="103hrs";
        textWeekPast.innerText="128hrs";
        x=2;
    }
    console.log(myFunction);
};

daily.addEventListener("click",myFunction);
weekly.addEventListener("click",myFunction);
weekly.addEventListener("click",myFunction);



  