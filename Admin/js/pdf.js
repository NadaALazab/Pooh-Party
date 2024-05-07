window.onload = function(){
    document.getElementById("download").addEventListener("click",()=>{
        const subm = document.getElementById("Submissions");

        html2pdf().from(subm).save();
    })
}