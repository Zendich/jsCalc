function calculateSum(){
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const num3 = document.getElementById('num3').value;

    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    const number3 = parseFloat(num3);

    //calculate sun
    const sum =number1 + number2 + number3;
    
    //display the result
    document.getElementById('result').textContent='The sum is ' + sum;
}
function calculateMult(){
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const num3 = document.getElementById('num3').value;

    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    const number3 = parseFloat(num3);

    //calculate sun
    const sum =number1 * number2 * number3;
    
    //display the result
    document.getElementById('result').textContent='The sum is ' + sum;
}
