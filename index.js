document.addEventListener('visibilitychange' , (e)=>{
    if (document.visibilityState == "visible") {
        console.log("tab is active")
        
    }
       else {
        window.alert("You Have Violated The Rule!! In 5 Seconds The Page Wil Close");
        window.setInterval(fun =>{
            window.close();
        }, 6000);
        // window.close();
        console.log("tab is inactive");
      }
})

