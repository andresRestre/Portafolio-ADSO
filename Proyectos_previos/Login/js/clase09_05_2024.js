let nombre;
let nota1;
let nota2;
let nota3;
let promedio

nombre = prompt('Ingrese su nombre:');
nota1 = parseInt(prompt('Ingrese su primera nota:'));
nota2= parseInt(prompt('Ingrese su segunda nota:'));
nota3 = parseInt(prompt('Ingrese su tercera nota:'));
promedio=(parseInt(nota1+nota2+nota3)/3);
if (promedio>=4){
    document.write(nombre+' esta aprobado con un :'+promedio);
}


