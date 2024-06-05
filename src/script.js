let numeroAleatorio = 100
/* Math.floor ( Math.random()* 100 ) + 1; */
let tentativas = 0;

function pegarPalpiteDigitado() {
  return parseInt(prompt("Digite um número entre 1 e 100"));
}

function jogoDeAdivinhacao() {
  const palpiteDigitado = pegarPalpiteDigitado();


  if (!palpiteDigitado) {
    alert("Digite um valor válido");
    reiniciarJogo();
    return;
  }

  if (palpiteDigitado === numeroAleatorio) {
    alert("Parabéns, você adivinhou!");
    reiniciarJogo();
    return;
  }

  if (palpiteDigitado < numeroAleatorio) {
    tentativas++;
    atualizarFeedback("O número é muito baixo. Tente novamente!");
  } else if (palpiteDigitado > numeroAleatorio) {
    tentativas++;
    atualizarFeedback("O número é muito alto. Tente novamente!");
  }

  const novaPontuacao = 100 - (tentativas * 10);
  atualizarPontuacao(novaPontuacao);

  const palpitesFalhos = pegarPalpitesFalhos();
  const novosPalpitesFalhos = palpitesFalhos + "" + palpiteDigitado;
  atualizarPalpitesFalhos(novosPalpitesFalhos);

  const pontuacaoAtual = pegarPontuacao();
  if (pontuacaoAtual === 0) {
    alert("Deu ruim! Seus pontos esgotaram!")

    const (numeroAleatorio >= 100); 






 















   







    function reiniciarJogo() {
        const reiniciarJogo = confirm("Deseja jogar novamente?");
        if (reiniciarJogo === true) {
          tentativas = 0
          atualizarPalpitesFalhos("");
          atualizarPontuacao(100);
   
    
        }
      }





    }
  }
