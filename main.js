let daily = document.getElementById("daily");
let weekly = document.getElementById("weekly");
let monthly = document.getElementById("monthly");

let x=0;

function dailyTime(){
//time for work
        textWorkCurrent.innerText="5hrs"
        textWorkPast.innerText="7hrs"
 //time for play   
        textPlayCurrent.innerText="1hrs"
        textPlayPast.innerText="2hrs"
//time for study
        textStudyCurrent.innerText="0 hrs"
        textStudyPast.innerText="1hrs"
        //time for exercise
        textExerciseCurrent.innerText="1hrs"
        textExercisePast.innerText="1hrs"
        //time for social
        textSocialCurrent.innerText="1hrs"
        textSocialPast.innerText="3hrs"
        //time for self care
        textSelfcareCurrent.innerText="0 hrs"
        textSelfcarePast.innerText="1hrs"
    }
    console.log(dailyTime);

function weeklyTime(){
    //time for work
    textWorkCurrent.innerText="32hrs"
    textWorkPast.innerText="36hrs"

    //time for play  
    textPlayCurrent.innerText="10hrs"
    textPlayPast.innerText="8hrs"
    //time for study
    textStudyCurrent.innerText="4hrs"
    textStudyPast.innerText="7hrs"
    //time for exercise
    textExerciseCurrent.innerText="4hrs"
    textExercisePast.innerText="5hrs"
    //time for social
    textSocialCurrent.innerText="5hrs"
    textSocialPast.innerText="10hrs"
    //time for self care
    textSelfcareCurrent.innerText="2hrs"
    textSelfcarePast.innerText="2hrs"
    }
    console.log(dailyTime);

function monthlyTime (){
    //time for work
    textWorkCurrent.innerText="103hrs"
    textWorkPast.innerText="128hrs"

    //time for play  
    textPlayCurrent.innerText="23hrs";
    textPlayPast.innerText="29hrs";
    //time for study
    textStudyCurrent.innerText="13hrs"
    textStudyPast.innerText="19hrs"
    //time for exercise
    textExerciseCurrent.innerText="11hrs"
    textExercisePast.innerText="18hrs"
    //time for social
    textSocialCurrent.innerText="21hrs"
    textSocialPast.innerText="23hrs"
    //time for self care
    textSelfcareCurrent.innerText="7hrs"
    textSelfcarePast.innerText="11hrs"
}
console.log(monthlyTime);
   


daily.addEventListener("click",dailyTime);
weekly.addEventListener("click",weeklyTime);
monthly.addEventListener("click",monthlyTime);



  