let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")

function abreFechaMenu() {
    //menu fechado - tem a classe menu fechado
    //menu aberto - nao tem a classe menu fechdo
    
    //se tem a classe - menu fechado
    if ( menu.classList.contains("menu-fechado") ) {
        // abrir o menu - tirar a classe de menu fechado
        menu.classList.remove("menu-fechado")

        //mostrar icone de barras
        iconeBarras.style.display = "none"

        //esconder icone de x
        iconeX.style.display = "inline"

    } else {

        //fechar o menu - add classe de menu fechado
        menu.classList.add("menu-fechado")

        //mostara icone x 
        iconeBarras.style.display = "inline"

        //esconder icone barars
        iconeX.style.display = "none"
    }
}

onresize = () => {
    // abrir o menu - remover a classe menu fechado
    menu.classList.remove("menu-fechado")

    //esconder icone barras
    iconeBarras.style.display = "none"

    //mostrar icone de barras
    iconeBarras.style.display = "inline"
}

//carrossel

let banner = document.querySelector(".banner")

//let slides = [0, 1, 2]
// slides[0] -> primeiro-banner
//slide[1] -> segundo-banner
//slide [2] -> terceiro-banner

let slides = [
    "primeiro-banner",
    "segundo-banner",
    "terceiro-banner"
]

let slideAtual = 0 

banner.classList.add(slides[slideAtual])

function mostrarProximoSlide () {
    //remover o slide anterior
    banner.classList.remove(slides[slideAtual])

    //somar um na variavel alsideatua;
    slideAtual++

    //mostrar slide de acordo com a slide atual
    banner.classList.add(slides[slideAtual])

}