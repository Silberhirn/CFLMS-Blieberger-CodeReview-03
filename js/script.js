
document.getElementById("calc").onclick=function calculateInsurance(){
	var country = document.getElementById("country").value;
	var PS = Number(document.getElementById("ps").value);
	var age = Number(document.getElementById("age").value);
	var name = document.getElementById("name").value;

	switch (country) {
		case "Austria":
			var insurance = (PS*100/age+50).toFixed(2);
			break;		
		case "Hungary":
			var insurance = (PS*120/age+100).toFixed(2);
			break;
		case "Greece":
			var insurance = (PS*150/(age+3)+50).toFixed(2);
			break;
		default:
			var insurance = "Error";
			break;
	}
	document.getElementById("result").innerHTML = name+", your insurance costs "+insurance+"€";
}