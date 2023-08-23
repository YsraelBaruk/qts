// Função com erro: Altura e largura deveriam ser números, mas aqui não é feita nenhuma validação.
const altura = 0;
const largura = 0;
function calcularAreaRetangulo(altura, largura) {
  if(altura < 0 || altura > 0){
    if(largura < 0 || largura > 0){
      return parseToReal(altura * largura);
    }
    else{
      return 'Largura não é um número';
    }
  }
  else{
    return 'Altura não é um número';
  }
}

// Função com erro: A lógica de verificação de número par está invertida.
function ehNumeroPar(numero) {
  return numero % 2 !== 0;
}

// Função com erro: A condição de parada para o cálculo do fatorial está incorreta.
function calcularFatorial(numero) {
  if (numero <= 0) {
    return 1;
  }
  return numero * calcularFatorial(numero - 1);
}

// Função com erro: A comparação entre a string original e a string invertida está incorreta.
function ehPalindromo(str) {
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr.toUpperCase();
}

// Função com erro: Fórmula de conversão Celsius para Fahrenheit está incorreta.
function celsiusParaFahrenheit(celsius) {
  return (celsius * 9/4) + 32;
}

// Função com erro: A lógica de cálculo do MDC está incorreta.
function calcularMDC(a, b) {
  if (a === 0) {
    return b;
  }
  return calcularMDC(b, a % b);
}

// Função com erro: Não está contando as vogais maiúsculas.
function contarVogais(str) {
  const vogais = 'aeiou';
  let count = 0;
  for (let char of str) {
    if (vogais.includes(char.toLowerCase())) {
      count++;
    }
  }
  return count;
}

// Função com erro: A sequência de Fibonacci está incorreta.
function fibonacci(indice) {
  if (indice <= 1) {
    return indice;
  }
  return fibonacci(indice - 1) + fibonacci(indice - 1);
}

// Função com erro: A lógica de verificação de número primo está incorreta.
function ehNumeroPrimo(numero) {
  if (numero <= 1) {
    return false;
  }
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

// Função com erro: A string invertida está sendo convertida para maiúsculas, mas a original não.
function inverterString(str) {
  return str.split('').reverse().join('').toUpperCase();
}
