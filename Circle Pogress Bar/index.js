let number = document.getElementById("number");
let counter = 0;

setInterval(() => {
  if (counter == 70) {
    clearInterval();
  } else {
    counter += 1;
    number.innerHTML = counter +"%"+ "<br/>" + "HTML";
  }
   
}, 20)
//Second Skillbar
let numberOne = document.getElementById("numberOne");
let count = 0;

setInterval(() => {
  if (count == 60) {
    clearInterval();
  } else {
    count += 1;
    numberOne.innerHTML = count +"%"+ "<br/>" + "CSS";
  }
   
}, 20)
//3rd Skillbar
let tree = document.getElementById("tree");
let down = 0;

setInterval(() => {
  if (down == 40) {
    clearInterval();
  } else {
    down += 1;
    tree.innerHTML = down +"%" + "<br/>" + "JAVASCRIPT";
  }
   
}, 30)