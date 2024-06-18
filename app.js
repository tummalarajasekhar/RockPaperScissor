let u_score=0;
let c_score=0;
const choices=document.querySelectorAll(".choice");

const comp_generated_choice=()=>{
		let options=["rock","paper","scissor"];
		let index=Math.floor(Math.random()*3);
		
		return options[index];
		
		
	};
const whoWon=(w,u,c)=>{
	if(w===true){
		console.log("user_win");
		document.getElementById("msg").innerText=`You Win! your ${u} beats ${c}`;
		
		u_score+=1;
		document.getElementById("user-score").innerText=u_score;
		document.getElementById("msg").style.backgroundColor="green";
	}else{
		console.log("comp_win");
		document.getElementById("msg").innerText=`You lose! ${c} beats your ${u}`;
		document.getElementById("msg").style.backgroundColor="red";
		c_score+=1;
		document.getElementById("comp-score").innerText=c_score;
	}
	if(u_score>=c_score){
		document.getElementById("user-score").style.color="green";
		document.getElementById("comp-score").style.color="black";
	}
	else{
		document.getElementById("comp-score").style.color="green";
		document.getElementById("user-score").style.color="black";
	}
		
	};
	
const playGame=(user_choice)=>{
		
		com_choice=comp_generated_choice()
		if(user_choice===com_choice){
			console.log("draw",user_choice,com_choice);
			document.getElementById("msg").innerText="Draw !  Play again";
			document.getElementById("msg").style.backgroundColor="orange";
		}
		else{
			let userWin=true;
			if(user_choice==="rock"){
				userWin=com_choice==="scissor"?true:false;
			}
			else if(user_choice==="paper"){
				userWin=com_choice==="rock"?true:false;
			}
			else {
				userWin=com_choice==="paper"?true:false;
			}
			console.log(user_choice,com_choice);
		whoWon(userWin,user_choice,com_choice);
				
		}	
		
		
	};
choices.forEach((choice)=>{
	
	
	let choiceId=choice.getAttribute("id");
	choice.addEventListener("click",()=>{
		//console.log(choiceId);	
		playGame(choiceId);
		
	});
		
});