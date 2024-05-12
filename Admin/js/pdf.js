window.onload = function(){
    document.getElementById("download").addEventListener("click",()=>{
        const subm = document.getElementById("submissions");

        html2pdf().from(subm).save();
    })

}