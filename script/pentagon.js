function pentagonArea() {
  let parameter = getValue("para1");
  let parameter2 = getValue("para2");
  let area = 0.5 * parameter * parameter2;

  display("showResult", area);
}
    
function getValue(input) {
  let inputText = document.getElementById(input);
  let inputValueText = inputText.value;
  let finalValue = parseFloat(inputValueText);
  return finalValue;
}

function display(input, out) {
  let something = document.getElementById(input);
  something.innerHTML = out;
} 


