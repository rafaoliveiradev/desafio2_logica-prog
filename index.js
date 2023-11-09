// Criando a nossa função para calcular o saldo das rankeadas

calcularPartidasRankeadas(100, 20) // Chamando a nossa função para retornar o valor final --> Nesse caso (80)

function calcularPartidasRankeadas(numVitorias, numDerrotas) {
   let resultado = numVitorias - numDerrotas
   console.log("Durante o campeonato, o nosso herói obteve " + numVitorias + " vitórias e " + numDerrotas + " derrotas.")
   const frase = "O herói tem um saldo de " + resultado + " vitórias e está no"

   // Estrutura para saber o nível do nosso herói
   if (resultado < 10) {
    console.log(frase + " nível ferro.")
   }

   else if (resultado >= 11 && resultado <= 20) {
    console.log(frase + " nível bronze.")
   }

   else if (resultado >= 21 && resultado <= 50) {
    console.log(frase + " nível prata.")
   }

   else if (resultado >= 51 && resultado <= 80) {
    console.log(frase + " nível ouro.")
   }

   else if (resultado >= 81 && resultado <= 90) {
    console.log(frase + " nível diamante.")
   }

   else if (resultado >= 91 && resultado <= 100) {
    console.log(frase + " nível lendário.")
   }

   else {
    console.log(frase + " nível imortal.")
   }
}
