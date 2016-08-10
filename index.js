function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function myFunction() {
    var x = Math.floor((Math.random() * 1000) + 1);
    document.getElementById("demo").innerHTML = x;
}