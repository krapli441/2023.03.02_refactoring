const circle = document.getElementById('move-btn');

circle.style.width = "200px";
circle.style.height = "200px";
circle.style.backgroundColor = "#fff";
circle.style.borderRadius = "50%";
circle.style.position = "fixed";
circle.style.bottom= "10px";
circle.style.left= "50vw";
circle.style.transform = "translate(-50%, 0)";
circle.style.display = "flex";
circle.style.justifyContent = "center";
circle.style.alignItems = "center"

circle.addEventListener("click", function() {
  circle.style.left = "10vw";
})