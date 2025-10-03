// Exemplo do conector OR (||)

// Este conector retorna 'true' se PELO MENOS UMA das condições forem verdadeiras.



//------CONTEXTO DE ATRIBUIÇÃO-----//
// Eu posso votar caso eu seja Homem ou Mulher.

let sexo = 'H'; // ou 'M' pra mulher

//------ CONTEXTO DE VALIDAÇÃO -----//

if (sexo == 'H' || sexo == 'M'){

    console.log('Voce pode votar')
}else{
  console.log ('Voce nao pode votar')
}
