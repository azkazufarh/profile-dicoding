var modal = document.getElementById("myModal");
var btn = document.querySelectorAll("#contactBtn");

for (let i = 0; i < btn.length; i++) {
  var span = document.getElementsByClassName("close")[0];

  btn[i].onclick = function () {
    modal.style.display = "block";
  };

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "nav-wrapper") {
    x.className += " responsive";
  } else {
    x.className = "nav-wrapper";
  }
}
