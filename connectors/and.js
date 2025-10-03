// Exemplo do conector AND (&&)

// Este conector retorna 'true' apenas se TODAS as condições forem verdadeiras.


// Se eu tenho 18 anos e eu tenho CNH eu posso dirigir
//------CONTEXTO DE ATRIBUIÇÃO-----//
// let idade = 18
// let possuoCNH = true
// let nacionalidade = 'brasileira'

// //----------------------------------//
// //------ CONTEXTO DE VALIDAÇÃO -----//
// //----------------------------------//
// if(idade >= 18 && possuoCNH == true && nacionalidade === 'brasileira'){
//     console.log ("Eu posso dirigir.")
// }else {
//   console.log("Eu não posso dirigir.")
// }

// Eu posso votar caso:
// tenha titulo de eleitor
// seja homem ou mulher
// tenha mais de 16 anos

let sexo = 'H'; // ou 'M' pra mulher
let idade = 17
let possuiTituloEleitor = true

//------ CONTEXTO DE VALIDAÇÃO -----//

if ((sexo == 'H' || sexo == 'M') && (idade >= 16 && possuiTituloEleitor == true)){

    console.log('Voce pode votar')
}else{
  console.log ('Voce nao pode votar')
}



