window.onload = function(){
 
    document.getElementById("download1").addEventListener("click",()=>{
        const subm = document.getElementById("report");

        html2pdf().from(subm).save();
    })

}