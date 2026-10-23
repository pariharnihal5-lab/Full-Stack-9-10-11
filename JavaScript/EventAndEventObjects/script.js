function ShowAlert(){
    alert("click me button clicked ysing html event")
}
document.getElementById("clickbutton").addEventListener("click",showalert2);
 function showalert2(){
    alert("click me button clicked using javascript event");
 }

 document.getElementById("box").addEventListener("click",() => {
    document.getElementById("box").innerText = "The box was clicked";
 });