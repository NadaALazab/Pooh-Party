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


function eraseAll(){
    checkboxes.forEach(function(checkbox){
        checkbox.checked = false;
    });

}
var checkboxes = document.querySelectorAll("input[type = 'checkbox']");


function counter(organizations){
     let counter = 0;
     var s = document.querySelectorAll('.card').hidden;

     organizations.forEach(function(organization){
        
       
        if(!organization.hidden)
        counter++   ;
      });

      tt.innerText = "(" +counter+")";


}
   function   getNotHidden(){
   var x = 0 ;
    var organizations = document.querySelectorAll(".card");
    organizations.forEach(function(org){
        if(!org.hidden)
    {
        x++;
    }
    })
    return x;
          
}

function showOrhide(filter){
    
    var x = getNotHidden();
    var organizations = document.querySelectorAll(".card");
          var check = document.getElementById(filter);
          console.log(check.checked);
          if(!check.checked){
            organizations = document.querySelectorAll("."+filter);
            console.log(organizations);
            organizations.forEach(function(organization){
                organization.hidden = true;
                x--;
            })
            tt.innerText = x;
          }
          else{
          
        organizations.forEach(function(organization){
            organization.hidden = true;
            x--;
        })
       
 
        checkboxes.forEach(function(checkbox){

            
           if(checkbox.checked){
            var ch = checkbox.id;
        
            organizations.forEach(function(organization){
            
                if(organization.classList.contains(ch) || organization.classList.contains(filter)){
                    organization.hidden = false;
                    x++; 
                }
               

           
        
        });
        tt.innerText = x;
    
        }
        
      
    

    });
    counter(organizations);
          }
   
    
}


