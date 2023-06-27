let number1 = Number(prompt("Informe o primeiro número: "))
let number2 = Number(prompt("Informe o segundo número: "))

let sum = number1 + number2
let sub = number1 - number2
let mult = number1 * number2
let div = number1 / number2
let rema = number1 % number2

alert("A soma dos dois números é: " + sum)
alert("A subtração dos dois números é: " + sub)
alert("A multiplicação dos dois números é: " + mult)
alert("A divisão dos dois números é: " + div)
alert("O resto da divisão dos dois números é: " + rema)

if (sum % 2 == 0) alert("A soma dos números é par")
else alert("A soma dos números é ímpar")

if (number1 == number2) alert("Os números inseridos são iguais")
else alert("Os números inseridos são diferentes")
