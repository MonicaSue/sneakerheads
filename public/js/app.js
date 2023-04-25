function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}

function randomRoom() {
  return Math.floor(Math.random() * (5-1 + 1) + 1)
}

console.log(randomRoom())
