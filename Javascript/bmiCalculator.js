function bmiCalculator(weight, height){
    var bmi = weight / Math.pow(height,2);
    return bmi;
}
var bmi = bmiCalculator(200, 5.7);
console.log(Math.round(bmi));