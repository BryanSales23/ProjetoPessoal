const botao = document.querySelector("#botao")

botao.addEventListener("click", () => {
    const menu = document.getElementById("menu")
    menu.classList.toggle("hidden")
})