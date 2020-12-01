// EX.1


const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)
~~ "a. false"

resultado = bool1 && bool2 && bool3
console.log("b. ", resultado)
~~ "b. false"

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado)
~~ "c. true"

console.log("e. ", typeof resultado)
~~ "e. Boolean"



// EX.2

let array
console.log('a. ', array)
~~~"a. undefined"

array = null
console.log('b. ', array)
~~~"b. null"

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
~~~"c. 11"


let i = 0
console.log('d. ', array[i])
~~~"d. 0"

array[i+1] = 19
console.log('e. ', array)
~~~"e. 18, 19"

const valor = array[i+6]
console.log('f. ', valor)
~~~"f. 24"


// **Exercícios de escrita de código**
// EX.1
idade = (prompt("Qual sua idade?"))
idade2 = (prompt("Qual a idade do seu melhor amigo?"))
if (idade > idade2) 
          idade3 =  true 
          else 
          idade3 = false
alert ("Sua idade é maior do que a do seu melhor amigo? " + idade3)

idade4 = idade - idade2
alert ("Sua idade é "+ idade4 +" anos maior do que a do seu melhor amigo?")

// EX.2

pair = prompt("insira um número par")

alert (pair % 2)

// d. retorna 0


// EX.3

let listaDeTarefas = []

listaDeTarefas [0] = prompt("Diga uma tarefa que vc precisa fazer hoje:")
listaDeTarefas [1] = prompt("Diga uma tarefa que vc precisa fazer hoje:")
listaDeTarefas [2] = prompt("Diga uma tarefa que vc precisa fazer hoje:")

alert (listaDeTarefas)

let tarefaRealizada = prompt("digite o índice de uma tarefa que ele já realizou: ex: 0, 1 ou 2")
Number(tarefaRealizada)
listaDeTarefas.splice(tarefaRealizada, 1)
alert (listaDeTarefas)

// EX.4

nome = (prompt("Qual seu nome?"))
email = (prompt("Qual seu email?"))

alert ("O e-mail " + email + " foi cadastrado com sucesso. Seja bem-vinda(o), "+nome+"!")