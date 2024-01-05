//about
var clientHappy = document.getElementsByClassName('counter')[0]
var projectDone = document.getElementsByClassName('counter')[1]
var cupOfCoffee = document.getElementsByClassName('counter')[2]
var workingHours = document.getElementsByClassName('counter')[3]
function counters(){
    var count1=4513;
    var count2=756;
    var count3=123;
    var count4=12;
    function update1(){
        clientHappy.textContent=count1;
        count1+=1;
        if(count1<=5000)
        {
            setTimeout(update1,0.1);
        }
    }
    function update2(){
        projectDone.textContent=count2;
        count2+=1;
        if(count2<=1200)
        {
            setTimeout(update2,1);
        }
    }
    function update3(){
        cupOfCoffee.textContent=count3;
        count3+=1;
        if(count3<=500)
        {
            setTimeout(update3,2);
        }
    }
    function update4(){
        workingHours.textContent=count4;
        count4+=1;
        if(count4<=120)
        {
            setTimeout(update4,20);
        }
    }
    update1();
    update2();
    update3();
    update4();
}
window.onload = counters;