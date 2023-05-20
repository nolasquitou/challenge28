let calculadora = prompt("Que calculo quieres hacer?");

if (calculadora == "suma"){
    let numero1 = parseInt(prompt("Ingrese el primer numero"));
    let numero2 = parseInt(prompt("Ingrese el segundo numero numero"));
    console.log(`La suma es : ${numero1 + numero2}`);
}else if(calculadora == "resta"){
    let numero1 = parseInt(prompt("Ingrese el primer numero"));
    let numero2 = parseInt(prompt("Ingrese el segundo numero numero"));
    console.log(`La resta es : ${numero1 - numero2}`);
}else if(calculadora == "multiplicacion"){
    let numero1 = parseInt(prompt("Ingrese el primer numero"));
    let numero2 = parseInt(prompt("Ingrese el segundo numero numero"));
    console.log(`La multiplicacion es : ${numero1 * numero2}`);
}else if(calculadora == "division"){
    let numero1 = parseInt(prompt("Ingrese el primer numero"));
    let numero2 = parseInt(prompt("Ingrese el segundo numero numero"));
    console.log(`La division es : ${numero1 / numero2}`);
}else{
    alert(`ingrese para cada calculo : (\"suma\" \"resta\" \"multiplicacion\" \"division\")`)
}