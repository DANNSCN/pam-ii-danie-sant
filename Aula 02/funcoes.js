let num1 = 2
const num2 = 3
var msg = "ola! esse é o numero:"

console.log(num1 + num2)
console.log(msg , num1)
console.log(typeof num1)
console.log(typeof msg)
//typeof tipo da variavel 


function Somar () {
    n1=1
    n2=2
    console.log("O resultado de some é:",n1 + n2)

}
Somar()
//mocar:forjar

function SomarComParametro (n1, n2) {
    let resultado = "O resultado é "+(n1+n2)
    console.log (resultado)
}

SomarComParametro (16,30)

const Test  = n => {
    let result = n % 2

    if (result ==1){
        return "numero impar"
    }
    return "NUMERO par"
}
console.log (Teste(2))
console.log (Teste(5))
Teste (5)