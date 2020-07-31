let time="00:00:00";
function set(){
    
    document.getElementById("time").style.backgroundColor = "whitesmoke";
    time=prompt("Set Timer(HH:MM:SS)");
    
    let sec=0,min=0,hr=0;
       let timearr=time.split(":");
       hr=parseInt(timearr[0]);
       min=parseInt(timearr[1]);
       sec=parseInt(timearr[2]);

       hr = hr || 0; 
       min = min || 0; 
       sec = sec || 0; 
       if(hr<10)
       hr="0"+hr;
       if(min<10)
       min="0"+min;
       if(sec<10)
       sec="0"+sec;
       
        time=hr+":"+min+":"+sec;
      
       let timetext=document.getElementById("time");
       timetext.innerHTML=time;

}
let mytimer;
function stopwatch(){
    let time_up=false;
    let timetext=document.getElementById("time");
    timetext.innerHTML=time;
     mytimer = setInterval(() => {
       let sec=0,min=0,hr=0;
       let timearr=time.split(":");
       hr=parseInt(timearr[0]);
       min=parseInt(timearr[1]);
       sec=parseInt(timearr[2]);
       hr = hr || 0; 
       min = min || 0; 
       sec = sec || 0; 

       if(sec==0){
        if(min>0){
            min--;
            sec=59;
        }else if(hr>0){
            min=59;
            sec=59;
            hr--;
        }else{
            time_up=true;
        }
       }else{
        sec--;
       }
        if(time_up){

        }
    
        timearr[0]=hr;
        timearr[1]=min;
        timearr[2]=sec;
        
        if(hr<10)
           hr="0"+hr;
        if(min<10)
           min="0"+min;
        if(sec<10)
           sec="0"+sec;
       
        time=hr+":"+min+":"+sec;
        if(time_up){
            time="TIME UP";
            clearInterval(mytimer);
            document.getElementById("time").style.backgroundColor = "Red";
        }
        let timetext=document.getElementById("time");
        timetext.innerHTML=time;
    }, 1000);
}
function stop(){

clearInterval(mytimer);
document.getElementById("time").style.backgroundColor = "lightgreen";

}


let btn=document.getElementById("btn");
btn.onclick=stopwatch;
let btn1=document.getElementById("btn1");
btn1.onclick=stop;
let btn2=document.getElementById("btn2");
btn2.onclick=set;
