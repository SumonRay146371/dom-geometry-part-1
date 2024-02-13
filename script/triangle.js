function sumon(){

  let triangleInput = document.querySelector("#triangle-base");
  let triangleInput2 = document.querySelector("#triangle-height");
   
}





function triangleCalculate(value) {
  let triangleText = triangleInput.value;
  let tringleBase = parseFloat(triangleText);
  //   base
  let triangleText2 = triangleInput2.value;
  let tringleHeight = parseFloat(triangleText2);
  let result = 0.5 * tringleBase * tringleHeight;
  let output = document.querySelector("#show");
  let show = (output.innerHTML = result);
  return show
}
































// function rectangleCalculate() {
//   let rectangleInput = document.querySelector("#rec-width");
//   let rectangleText = rectangleInput.value;
//   let width = parseFloat(rectangleText);

//   let rectangleInput2 = document.querySelector("#rec-height");
//   let rectangleText2 = rectangleInput2.value;
//   let heigth2 = parseFloat(rectangleText2);

//   let area = width * height2;

//   let show = document.querySelector("#show2");
//   show.innerText = area;
//   console.log("helo");
// }
