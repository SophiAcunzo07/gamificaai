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

function mostrarSlideAnterior() {
    // Remover o slide anterior
    banner.classList.remove(slides[slideAtual])

    if (slideAtual > 0) {
        // Subtrair 1 na variavel slideAtual
        slideAtual--
    } else {
        // Voltar para o ultimo slide
        slideAtual = 2
    }

    // Mostrar slide de acordo com o slide atual
    banner.classList.add(slides[slideAtual])
}

function selecionarSlide(indiceSlide) {
    // Remove o slide atual
    banner.classList.remove(slides[slideAtual])
    
    // Atualiza a variavel com o indice de slide selecionado
    slideAtual = indiceSlide

    // Mostra o slide selecionado e salvo na variavel slideAtual
    banner.classList.add(slides[slideAtual])
}


// Carregamento dinâmico dos cases
let listaCases = [
    
]

function renderizarCases() {
    // Encontrar o elemento para inserir os cards
    let containerCards = document.querySelector(".container-cards")

    // Variavel para guardar o html dos cases montados
    let template = ""

    // Para cada case da listaCases
    listaCases.forEach(cardCase => {
        // Montar o html do card, passando os atributos do case
        template += `<div class="card">
            <img src=${ cardCase.imagem } alt="">
            <p>${ cardCase.descricao }</p>
            <button>Ver mais</button>
        </div>`
    })

    // Inserir html dos cases montados no elemento container-cards
    containerCards.innerHTML = template
}

function carregarCases() {
    //metodo htp gete - read/leitura - serve para mostrar um item da lista de intens 
    fetch("http://localhost:3000/cases")
    .then( (resposta) => resposta.json() )
    .then( (dadosTratados) => {
        console.log(dadosTratados)
        listaCases = dadosTratados
        renderizarCases()
    })
}

function solicitarOrcamento(event) {
    //pegar os valores dos inputs
    let valorNome = document.getElementById("campo-nome").value  
    let valorEmail = document.getElementById("campo-email").value  
    let valorDescricao = document.getElementById("campo-texto").value  

    console.log(valorNome, valorEmail, valorDescricao)
    //otgsnizar os valores de um objeto
    let dadosForm = {
        nome: valorNome,
        email: valorEmail,
        descricao: valorDescricao
    }
    //enviar a requisisicao para a api
     fetch("http://localhost:3000/solicitacoes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosForm)
     })
        //caso sucesso = limpar campos - mostrar um alert d sucesso (metodo http post -create/criar = cadastrar um novo registro (solicitacao de orcamento))
.then(resposta => {
    console.log(resposta);
    //limpar
    document.querySelector("#contato form").reset()
    //mostrar alert
    alert("solicitacao enviada com sucesso!!")

})
        //caso erro = mostrar alert de erro
.catch(erro => {
    console.log(erro);
    //mostrar alert
    alert("erro na requisicao")
})    

event.preventDefault()
}