// Função com erro: Altura e largura deveriam ser números, mas aqui não é feita nenhuma validação.
function calcularAreaRetangulo(altura, largura) {
  return parseFloat(altura * largura);
}

// Função com erro: A lógica de verificação de número par está invertida.
function ehNumeroPar(numero) {
  return (numero % 2) == 0;
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
  return str === reversedStr;
}

// Função com erro: Fórmula de conversão Celsius para Fahrenheit está incorreta.
function celsiusParaFahrenheit(celsius) {
  return (celsius * 1.8) + 32;
}

// Função com erro: A lógica de cálculo do MDC está incorreta.
function calcularMDC(a, b) {
  if (a % b) {
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
  return fibonacci(indice - 1) + fibonacci(indice - 2);
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
