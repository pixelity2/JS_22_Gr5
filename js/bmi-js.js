function calculateBMI_m(){
    let kg = document.getElementById("kg").value;
    let cm = document.getElementById("cm").value;
    let status;
    kg = ~~kg; cm = ~~cm; cm = cm / 100;    
    let result = kg / (cm * cm) + 0.3;
    if(result <= 18.5){
        status = "underweight";
    }
    else if(result > 18.5 && result <= 25){
        status = "normal";
    }
    else if (result > 25){
        status = "overweight";
    }
    let newResult = result.toFixed(2);
    document.getElementById("result").innerHTML = "Your BMI is " + newResult + " which means you are " + status;
}