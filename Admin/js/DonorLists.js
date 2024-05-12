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
    showAll();

}
var checkboxes = document.querySelectorAll("input[type = 'checkbox']");


function counter(x){
     let counter = 0;
    // var s = document.querySelectorAll('.card:hidden');
     

     
      tt.innerText = "(" +x+")";


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
function isAllNotChecked(){
    let count = 0;
    checkboxes.forEach(function(checkbox){
         if(checkbox.checked){
            count++;
         }
    });
  return count;


}
function isTypeNotChecked(){
    let count = 0;
    var cc = document.querySelectorAll(".type:checked");
    cc.forEach(function(checkbox){
         if(checkbox.checked){
            count++;
         }
    });
  return count;


}
function isAreaNotChecked(){
    let count = 0;
    var cc = document.querySelectorAll(".area:checked");
    cc.forEach(function(checkbox){
         if(checkbox.checked){
            count++;
         }
    });
  return count;


}
function isArNotChecked(){
    let count = 0;
    var cc = document.querySelectorAll(".ar:checked");
    cc.forEach(function(checkbox){
         if(checkbox.checked){
            count++;
         }
    });
  return count;


}
function showAll(){

    var organizations = document.querySelectorAll(".card");
    organizations.forEach(function(organization){
          organization.hidden = false;
    });
    tt.innerText = "(" +6+")";
    
}

      
function showOrhide(filter){
    var x = 0;

    var organizations = document.querySelectorAll(".card");

    if(isAllNotChecked()==0){
        showAll();
        
    }
    else{
        var cc = document.querySelectorAll(".area:checked");
        organizations.forEach(function(organization){
            organization.hidden = true;
            
        })

        cc.forEach(function(checkbox){
              
             organizations.forEach(function(organization){
                var id = checkbox.id;
                if(organization.classList.contains(id)){
                    organization.hidden = false;
                    x++;
                  }
              

             });



        });


       if(isAreaNotChecked()!=0){
        var ccType = document.querySelectorAll(".type:checked");
        ccType.forEach(function(checkbox){
              
            organizations.forEach(function(organization){
               var id = checkbox.id;
               if(!organization.hidden &  !organization.classList.contains(id)){
                   organization.hidden = true;
                   x--;
                 }
             

            });



       });


        
            
        }
        else{
            var ccT = document.querySelectorAll(".type:checked");
        organizations.forEach(function(organization){
            organization.hidden = true;
            
        })

        ccT.forEach(function(checkbox){
              
             organizations.forEach(function(organization){
                var id = checkbox.id;
                if(organization.classList.contains(id)){
                    organization.hidden = false;
                    x++;
                  }
              

             });



        });
        }
      
        if(isArNotChecked()!=0){
    if(isAreaNotChecked()!=0 | isTypeNotChecked()!=0){
        var ccAR = document.querySelectorAll(".ar:checked");
        ccAR.forEach(function(checkbox){
              
            organizations.forEach(function(organization){
               var id = checkbox.id;
               console.log(id);
               if(!organization.hidden &  !organization.classList.contains(id)){
                   organization.hidden = true;
                   x--;
                 }
             

            });



       });


        
            
        }
        else{
            var ccAR = document.querySelectorAll(".ar:checked");
        organizations.forEach(function(organization){
            organization.hidden = true;
            
        })

        ccAR.forEach(function(checkbox){
              
             organizations.forEach(function(organization){
                var id = checkbox.id;
                if(organization.classList.contains(id)){
                    organization.hidden = false;
                    x++;
                  }
              

             });



        });
    }
        
        }
        counter(x);
    }

}
        
