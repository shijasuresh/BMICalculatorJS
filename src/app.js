function calculateBMI()
{
    let weight = document.getElementById('weight');
    let height = document.getElementById('height');

    let bmi = (weight.value/(height.value*height.value)).toFixed(1);

    let bmiResult = document.getElementById('result');

    if(bmi < 18.5)
        bmiResult.innerText = "Underweight";
    else if (bmi >= 18.5 && bmi <= 24.9)
        bmiResult.innerText = "Normal Weight";
    else if(bmi >= 25 && bmi <= 29.9)
        bmiResult.innerText = "Overweight";
    else if(bmi >=30 && bmi <= 35)
        bmiResult.innerText = "Obesity";
    else if(bmi > 35)
        bmiResult.innerText = "Severe obesity";
    else
        bmiResult.innerText = "Not a valid value";
}