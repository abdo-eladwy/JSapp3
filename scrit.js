
    
  function app() {
    let timer = prompt ("enter time")
   
    console.clear()
    if (timer <0){
        console.log("error");
        
    } else {
    function countdown (){
       
        console.log(`timer is ${timer=timer-1}`);
        if (timer <=0){
            clearInterval(counter)
            console.log("time out");
            
        }
       
    } }




let counter= setInterval(countdown,1000)
  }