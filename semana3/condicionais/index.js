// EX.1
//  teste de numero par usando floor division

// EX.2
// a. serve para setar a variavel preco com o valor da fruta
// b. será impresso: O preço da fruta Maçã é R$ 2.25
// c. será impresso: O preço da fruta Pêra é R$ 5

// EX.3
// a. declarando uma constante tipo numero
// b. nada
// c. pq a variavel contendo a mensagem foi criada num escopo filho

// // // //**Exercícios de escrita de código** // // //

// EX.4
// idade = Number(prompt("Qual sua idade??"))
// if (idade >= 18)
//     console.log("Você pode dirigir")
// else
//     console.log("Você não pode dirigir.")

// EX.5
// const turno = prompt("Qual turno voce estuda? Responda: M/V/N (Matutino/Vespertino/Noturno")

// if (turno == "M")
//         console.log("Bom Dia!")
//     else if (turno == "V")
//         console.log("Boa Tarde!")
//     else if (turno == "V")
//         console.log("Boa Noite!")
// EX.6

// turno = prompt("Qual turno voce estuda? Responda: M/V/N (Matutino/Vespertino/Noturno")
// switch (turno){
//     case "M":
//     console.log("Bom Dia!")
//     break
//     case "V":
//     console.log("Boa Tarde!")
//     break
//     case "N":
//     console.log("Boa Noite!")
//     break
// }
// EX.7

// tipo = prompt("qual o gênero de filme que vão assistir??")
// preco = Number(prompt("preço do ingresso?(R$)"))

// if (preco < 15 && tipo == "fantasia")
//     console.log("Bom filme!")
//     else
//     console.log("Escolha outro filme :(")

    // Desafios
// Desafio.1

// tipo = prompt("qual o gênero de filme que vão assistir??")
// preco = Number(prompt("preço do ingresso?(R$)"))

// if (preco < 15 && tipo == "fantasia"){
//     snack = prompt("que snack vai comprar?")
//     console.log("Bom filme! ... com ", snack)
//     }
//     else
//     console.log("Escolha outro filme :(")

Nome = prompt("Nome completo")
Tipo = prompt("Tipo de jogo: IN indica internacional; e DO indica doméstico;")



Etapa = prompt("Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final")
    if (Etapa == "SF") 
        Etapa = [1320, 880, 550, 220]
    else if (Etapa =="DT")  
        Etapa = [660, 440, 330, 170]
    else if (Etapa == "FI") 
        Etapa = [1980, 1320, 880, 330]
Categoria = Number(prompt("Categoria: pode ser as opções 1, 2, 3 ou 4;"))
ingressos = prompt("Quantidade de ingressos")

Categoria -=1
console.log(Categoria)

let preco = Etapa[Categoria]
let cotacao = 4.1
if (Tipo == "IN"){

    preco = preco * cotacao}

alert(`Valor do Ingresso: ${preco}`)
alert(`Valor total: ${ingressos * preco}`)
