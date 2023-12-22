function nextpage(){
    window.location="secondpage.html";
player1_name=document.getElementById("input1").value;
player2_name=document.getElementById("input2").value;
   localStorage.setItem("p1name",player1_name);
   localStorage.setItem("p2name",player2_name);
   
}