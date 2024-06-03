let numeroAleatorio = Math.floor ( Math.random()* 100 ) + 1; 
let tentativas = 0;

function jogoDeAdivinhacao() {
   const palpiteDigitado = pegarPalpiteDigitado();

}

if (!palpiteDigitado);{
    alert ("Digite um valor válido");
    reiniciarJogo();
    return;
}
    
{
if(palpiteDigitado === numeroAleatorio) 
    alert ("Parabéns, você adivinhou!")
reiniciarJogo();
return;

}

 else if (palpiteDigitado < numeroAleatorio)
    tentativas++;
   atualizarFeedback ("O número é muito baixo. Tente novamente!")
 

else if (palpiteDigitado > numeroAleatorio)
  tentativas++;
    atualizarFeedback("O número é muito alto. Tente novamente!")

 {

    const novaPontuacao = 100 - (tentativas * 10);
atualizarPontuacao(novaPontuacao);

    const palpitesFalhos =  pegarPalpitesFalhos()
    const novosPalpitesFalhos = palpitesFalhos + "" + palpiteDigitado
    atualizarPalpitesFalhos (novosPalpitesFalhos)

}

const pontuacaoAtual =  pegarPontuacao
if (pontuacaoAtual === "Você tem 0 pontos")
    alert("Deu ruim! Seus pontos esgotaram!")
reiniciarJogo();




 



 















   







function reiniciarJogo() {
const vaiReiniciar = confirm ("Deseja jogar novamente?")

if (vaiReiniciar === true) {
    tentativas = 0;
    Math.floor ( Math.random()* 100 ) + 1; 
    atualizarPalpitesFalhos("");
    atualizarPontuacao (100);
    limparPalpiteDigitado ();


   

}



}