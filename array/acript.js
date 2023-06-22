// Crie um array com 5 itens
let itens = [1,2,3,4,"indiosinhos"]
console.log(itens)

//Retorne no console o quarto item desse array.
console.log(itens[3])

//Adicione um item a esse array
itens.push("até que um virou o pequeno bote")
console.log(itens)

//Remova o ultimo item dessa arry
itens.pop()
console.log(itens)

//Remova o primeiro item desse arry
itens.shift()
console.log(itens)

//crie um arrar com 10 itens
let op1 = [0,1,2,3,4,5,6,7,8,9]
console.log(op1)

//Crie outro array, tembem com 10 itens, que seja o dobro dos itens criado no exercio 6
op1.map((n)=>{
    console.log(n*2)
})

//Crie uma função chamada addItem, que irá adicionar itens no array criado. A função deverá retornar o array atualizado.
let dados = []
let addItems = (item) => {
    dados.push(item)
    console.log(dados) 
}
//Crie um script que pergunte 3 números ao usuário, coloque em um array, depois exiba tal array.
let array = []

let a = window.prompt("Digite o primeiro valor : ")
let b = window.prompt("Digite o segundo valor: ")
let c = window.prompt("Digite o terceiro valor: ")

let s = [a,b,c]
console.log(s)
//Crie um array com 6 itens(apenas texto) e retorna apenas os itens que tem mais que 4 letras.

let filtro = ["São Paulo", "São Miguel Paulista","Santos","João Pessoa","Ílheus","São Matheus"]
              
let novo = filtro.filter(item => item.length > 6)



console.log(novo)