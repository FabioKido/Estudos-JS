// Robô I3PO - v0.1

let cont = 0;
let arr = document.querySelectorAll(".L3NKy");
arr.forEach((v, i) => {
	setTimeout(() => {
		if(!v.classList.contains("_8A5w5")){
			v.click();
			cont++;
			console.log("I3PO já seguiu "+cont+" Pessoas!");
		}else{
			console.log("Já estou seguindo essa pessoa!");		
		}
	}, i * 10000);
});
