const TesteImparPar = (n) => {
    let calculoteste = n % 2

    if (calculoteste == 1) {
        return "Numero Impar" 
    } else {
        return "Numero Par"
    }
 }
 console.log(TesteImparPar(17))
 console.log(TesteImparPar(64))
 console.log(TesteImparPar(1500))
 console.log(TesteImparPar(5 ))

 //return processa e entrega a informação; substitui else. 

 const TestImparPar = (n) => {
    let CalculoTeste = n % 2

    return (CalculoTeste ==1) ?  "Numero Impar" :"Numero Par"
 }
 console.log("espaço ",TestImparPar(17))
 console.log(TestImparPar(64))
 console.log(TestImparPar(1500))
 console.log(TestImparPar(5 ))

 //return processa e entrega a informação; substitui else. 
