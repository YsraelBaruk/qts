

/*QUnit.module('calcularAreaRetangulo', function() {
  QUnit.test('calcularAreaRetangulo', function(assert) {
    assert.equal(calcularAreaRetangulo(5, 6), 30, "Área do retângulo correta");
    // assert.equal(calcularAreaRetangulo(-3, 4), -12, "Área do retângulo com valores negativos");
    //  assert.equal(calcularAreaRetangulo(-3, 4), -12, "Área do retângulo com valores negativos");
  });
});

QUnit.module('ehNumeroPar', function() {
  QUnit.test('ehNumeroPar', function(assert) {
    assert.ok(ehNumeroPar(4), "4 é par");
    assert.notOk(ehNumeroPar(7), "7 não é par");
  });
});

QUnit.module('calcularFatorial', function() {
  QUnit.test('calcularFatorial', function(assert) {
    assert.equal(calcularFatorial(5), 120, "Fatorial de 5 é 120");
    assert.equal(calcularFatorial(0), 1, "Fatorial de 0 é 1");
    assert.equal(calcularFatorial(1), 1, "Fatorial de 1 é 1");
  });
});

QUnit.module('ehPalindromo', function() {
  QUnit.test('ehPalindromo', function(assert) {
    assert.ok(ehPalindromo("radar"), "'radar' é um palíndromo");
    assert.ok(ehPalindromo("ana"), "'ana' é um palíndromo");
    assert.ok(ehPalindromo("sus"), "'sus' é um palíndromo");
    assert.ok(ehPalindromo("luzazul"), "'luzazul' é um palíndromo");
    assert.notOk(ehPalindromo("banana"), "'banana' não é um palíndromo");
  });
});

QUnit.module('celsiusParaFahrenheit', function() {
  QUnit.test('celsiusParaFahrenheit', function(assert) {
    assert.equal(celsiusParaFahrenheit(0), 32, "0°C é 32°F");
    assert.equal(celsiusParaFahrenheit(100), 212, "100°C é 212°F");
  });
});

QUnit.module('calcularMDC', function() {
  QUnit.test('calcularMDC', function(assert) {
    assert.equal(calcularMDC(48, 18), 6, "MDC de 48 e 18 é 6");
    assert.equal(calcularMDC(15, 25), 5, "MDC de 15 e 25 é 5");
  });
});

QUnit.module('contarVogais', function() {
  QUnit.test('contarVogais', function(assert) {
    assert.equal(contarVogais("Hello World"), 3, "Número de vogais corretas");
    assert.equal(contarVogais("Teste"), 2, "Número de vogais em 'Teste' é 2");
  });
});

QUnit.module('fibonacci', function() {
  QUnit.test('fibonacci', function(assert) {
    assert.equal(fibonacci(6), 8, "O sexto número de Fibonacci é 8");
    assert.equal(fibonacci(3), 2, "O terceiro número de Fibonacci é 2");
  });
});

QUnit.module('ehNumeroPrimo', function() {
  QUnit.test('ehNumeroPrimo', function(assert) {
    assert.ok(ehNumeroPrimo(7), "7 é primo");
    assert.notOk(ehNumeroPrimo(4), "4 não é primo");
  });
});

QUnit.module('inverterString', function() {
  QUnit.test('inverterString', function(assert) {
    assert.equal(inverterString("abcdef"), "fedcba", "String invertida correta");
    assert.equal(inverterString("QUnit"), "tinUQ", "String invertida em 'QUnit' é 'TniUQ'");
  });
});
*/


/*function calcularAreaRetangulo(altura, largura) {
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
*/