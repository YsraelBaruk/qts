// Funções criadas por Israel e Michel

//Para formar um circulo no plano cartesiano  x² + y²
const circulo = (x, y)=>{
  circunferencia = (x*x) + (y*y);
  return circunferencia;
}

//area do triagulo (base * altura)/2
const areaTriangulo = (base, altura)=> {
  areaTr = (base * altura)/2;
  return areaTr;
}

//Trapezio (bz + bnho)/2
const areaTrapezio = (bao, binho)=>{
  areaTrap = (bao + binho)/2;
  return areaTrap;
}

//Função para inserir um valor de celsius para depois retornar em kelvin
const kelvinPraCelsius = (celsius)=>{
  kel = celsius + 273;
  return kel;
}

//força resultante
const forca = (massa, aceleracao) => {
  forc = massa * aceleracao;
  return forc;
}