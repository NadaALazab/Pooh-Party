function remove(id){
   
    
    
    //window.location.assign("../Admin/DonorsList1.html")
    var num = document.getElementById("total").innerText;
    var x = tt.innerText;
    x  = x.slice(1,-1);
    console.log(x);
    var integer = Number(x);
    integer--;
 
    tt.innerText = "("+integer+")";
    var donor = document.getElementById(id);
    donor.remove();
   
}
function accept(acceptID,rejectID,profileID){
   
    
    
    //window.location.assign("../Admin/DonorsList1.html")
    var accept = document.getElementById(acceptID);
    accept.remove();
    var reject = document.getElementById(rejectID);
    reject.remove();
    var profile = document.getElementById(profileID);
    profile.hidden= false;
       
}
const tt = document.querySelector(".number");
