const resultado = document.getElementById('resultado');
const numero1 = 10;
const numero2 = 5;
console.log(typeof numero1, typeof numero2);
console.log(numero1/numero2);
console.log(Math.sqrt(-1));
const a = 0.1;
const b = 0.2;
console.log(a+b);
console.log((a+b).toFixed(2));
console.log(isFinite(numero1/numero2),isNaN(Math.sqrt(-1)),(a+b).toPrecision(1));
let tipo1 = typeof numero1;
let tipo2 = typeof numero2;
let divi = numero1/numero2; 
let raiz = Math.sqrt(-1);
let soma = a + b;
let fixed = (a+b).toFixed(2);
let finito = isFinite(numero1/numero2);
let nNumero = isNaN(Math.sqrt(-1));
let precision = (a+b).toPrecision(1);
resultado.innerHTML = `Tipo da variavel numero1: ${tipo1} <br>
Tipo da variavel numero2: ${tipo2} <br>
Resultado da divisao do numero 1 pelo numero 2: ${divi} <br>
O valor da raiz quadrada de -1: ${raiz} <br>
O resultado da soma de a + b: ${soma} <br>
Formatando o resultado da soma para 2 casas decimais: ${fixed} <br>
Verificando se a divisao do numero 1 pelo numero 2 e finita: ${finito} <br>
Verificando se a raiz quadrada de -1 e um numero: ${nNumero} <br>
Formatando o resultado da soma de a e b para ter um digito valido: ${precision}`;