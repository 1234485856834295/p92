function getscore(){
    player1=localStorage.getItem("p1name");
    player2=localStorage.getItem("p2name");
    document.getElementById("label1").innerHTML=player1;
    document.getElementById("label2").innerHTML=player2;
}


qsf=qs1*qs2;

function submit(){
qsp1=document.getElementById("ansinput").value;
qsp2=document.getElementById("qsinput").value;
qs=qsp1+qsp2;
document.getElementById("nice_label").innerHTML=qsp1+"x"+qsp2;


 question_word="<label id='nice_label'></label>";
input_box="<br>Answer:<input type='number' id='check_box'>";
check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";

row=question_word+input_box+check_button;
document.getElementById("output").innerHTML=row;
}



function check(){
    user_answer=document.getElementById("check_box").value;
    console.log(user_answer);
    
    if(user_answer==qsf){
    
    if(answer_turn=="player1"){
        score1=score1+1;
        document.getElementById("p1score").innerHTML=score1;
    
    }
    
    else{
        score2=score2+1;
        document.getElementById("p2score").innerHTML=score2;
    }
    
    }
    
    if(question_turn=="player1"){
        question_turn="player2";
        document.getElementById("questioner").innerHTML="question: "+p2name;
    }
    else{
        question_turn="player1";
        document.getElementById("questioner").innerHTML="question: "+p1name;
    }
    
    
    if(answer_turn=="player1"){
        answer_turn="player2";
        document.getElementById("answerer").innerHTML="answer: "+p2name;
    }
    else{
        answer_turn="player1";
        document.getElementById("answerer").innerHTML="answer: "+p1name;
    }
    
    document.getElementById("check_box").value = "";
}