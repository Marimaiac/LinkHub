function toggleMode() {
  const body = document.documentElement //document.documentElement seleciona o elemento do HTML
  body.classList.toggle("dark") // Pegue o elemento guardado em body, acesse a lista de classes dele e alterne (ligue/desligue) a classe "dark".

  const img = document.querySelector("#profile img")
  if (body.classList.contains("dark")) {
    img.setAttribute("src", "./assets/avatardarkmode.png")
  } else {
    img.setAttribute("src", "./assets/Avatar3.png")
  }
}
