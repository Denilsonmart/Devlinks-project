function toggleMode(){
  const html = document.documentElement
  const img = html.querySelector("#profile img")

  if(html.classList.contains("light")){
    html.classList.remove("light")
    img.setAttribute("src","./assets/avatar-dark.png")
  }
  else{
    html.classList.add("light")
    img.setAttribute("src","./assets/avatar-light.png")
  }
}