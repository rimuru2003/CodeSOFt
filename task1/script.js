var header = document.getElementById("header");
var mc = document.getElementById("Pani");
var m3 = document.getElementById("Ice");
var mx = document.getElementById("Vada");
var my = document.getElementById("Dabeli");
var model = document.getElementById("price"); // Changed variable name from 'model' to 'price'
var mph = document.getElementById("desc"); // Changed variable name from 'mph' to 'desc'

mc.onclick = function () {
  header.style.backgroundImage =
    "url('asset/pani_puri_90458_16x9.jpg')";

  price.innerHTML = "Pani Puri";
  desc.innerHTML = "$2.5";
};

m3.onclick = function () {
    header.style.backgroundImage =
    "url('asset/american-heritage-chocolate-PWwKJLHzekk-unsplash.jpg')";
  price.innerHTML = "Ice Cream";
  desc.innerHTML = "$3.5";
};

mx.onclick = function () {
    header.style.backgroundImage =
    "url('asset/shakti-rajpurohit-73L6wSNLpSk-unsplash.jpg')";
  price.innerHTML = "Pav Bhaji";
  desc.innerHTML = "$1.5";
};

my.onclick = function () {
    header.style.backgroundImage =
    "url('asset/anil-sharma-S6WyKp5jdkQ-unsplash.jpg')";
  price.innerHTML = "Dosa";
  desc.innerHTML = "$2.0";
};
