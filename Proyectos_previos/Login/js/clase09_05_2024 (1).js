/*n1=parseInt(prompt('Ingrese numero 1'))
n2=parseInt(prompt('Ingrese numero 2'))
n3=parseInt(prompt('Ingrese numero 3'))
n4=parseInt(prompt('Ingrese numero 4'))
n5=parseInt(prompt('Ingrese numero 5'))
n6=parseInt(prompt('Ingrese numero 6'))
sum=(n1+n2)
multi=(n3*n2)
resta=(n4-n5)
divi=(n1/n6)
document.write('Suma:'+sum+'<br>'+'Multiplicacion:'+multi+'<br>'+'Resta:'+resta+'<br>'+'Division:'+divi+'<br>')
*/

/*
let dia = parseInt(prompt('Ingrese el dia (1-31)'))
let mes = parseInt(prompt('Ingrese el mes (1-12)'))
let año = parseInt(prompt('Ingrese el año (0-2024)'))

if (mes==10 && dia==31) {
    document.write('Es hallowen')
}
else if (mes <= 3 && mes > 0) {
    document.write('Usted esta en el primer trimestre del año')
}
else if (mes <= 6 && mes > 3) {
    document.write('Usted esta en el segundo trimestre del año')
}
else if (mes <= 9 && mes > 6) {
    document.write('Usted esta en el tercer trimestre del año')
}
else if (mes <= 12 && mes > 9) {
    document.write('Usted esta en el cuarto trimestre del año')
}
else if (mes==10 && dia==31) {
    document.write('Es hallowen')
}
else {
    document('Mes ingresado es incorrecto')
}
*/

/*
let n1 = parseInt(prompt('Ingrese numero 1'));
let n2 = parseInt(prompt('Ingrese numero 2'));
let n3 = parseInt(prompt('Ingrese numero 3'));
let sum12 = (n1 + n2);
let sum23 = (n3 + n2);
if (n1 == n2 && n2 == n3) {
    document.write('Los valores son iguales:' + sum12);
}
else {
    document.write('Los valores NO son iguales:' + sum23);
}
*/


/*
let salario=parseFloat(prompt('Ingrese su salario'));
let años=parseFloat(prompt('Ingrese su años de antiguedad'));
if(salario<=1500000 && años>=10)
    {document.write('Su salario con aumento de 20% es:$'+(salario*1.2))}
else if (salario<=2000000 && años<=10)
    {
        document.write('Su salario con aumento de 20% es:$'+(salario*1.05)) ; 
    }
else if (salario>=2000000)
    {
        document.write('Su salario NO tiene aumento:$'+salario) ; 
    }
else{
    document.write('Su datos estan fuera de rango');
}
*/

/*
let pal1 = String(prompt('Ingrese la palabra (Casa,Perro,Gato,Cabeza)'));
switch (pal1) {
    case 'Casa':
        document.write('Home')
        break
    case 'Perro':
        document.write('Dog')
        break
    case 'Gato':
        document.write('Cat')
        break
    case 'Cabeza':
        document.write('Head')
        break
    default:
        document.write('Introduciste una palabra incorrecta, revisa la ortografia')
        break
}
*/

/*
let multiplo10=10;
while(multiplo10<=1000){
    document.write(multiplo10);
    document.write('<br>');
    multiplo10=multiplo10+10;
}
*/
/*
let multiplo10=10;
for(multiplo10;multiplo10<=1000;multiplo10+=10)
    {
        document.write(multiplo10);
        document.write('<br>')
    }
*/

/*
let sum=0;
for (let i=1;i<=10;i++)
    {
        let num=parseInt(prompt('Ingrese un numero'));
        if(i>5)
            {sum+=num}
    }
document.write(sum)
*/

/*
let num=parseInt(prompt('Ingrese un numero para ver su tabla (1-10)'))
let tabla=num;
for (let i=1;i<=12;i++)
    {
        document.write(tabla)
        document.write('<br>')
        tabla=num*i;
    }
*/

/*
i=1
while (i<2) {
    let precio = parseInt(prompt('Ingrese el precio (si desea salir ingrese 0 ambas veces)'));
    let descuento = parseInt(prompt('Ingrese el descuento 0-100 (si desea salir ingrese 0 ambas veces)'));
    porciento = descuento / 100
    document.write('Articulo 1:'+precio * porciento)
    document.write('<br>')
    if(precio==0 && descuento==0)
        {
            break
        }
}
*/

/*
function mensaje(){
    document.write("Cuidado<br>");
    document.write("Ingrese su documento documento correctamente<br>");
}
mensaje();
mensaje();
*/
/*
function tablaMulti(){
let num=parseInt(prompt('Ingrese un numero para ver su tabla (1-10)'))
for (let i=1;i<=12;i++)
   {
       document.write(num*i,'<br>');
   }
}
tablaMulti();
*/

/*
function Compnum(){
    let n1=parseInt(prompt('Ingrese el primer valor'));
    let n2=parseInt(prompt('Ingrese el primer valor'));
    let menor
    if(n1>n2)
        {
            document.write('El mayor fue el primer numero'+'<br>');
            menor=n2;
            mayor=n1;
        }
        else{
            document.write('El mayor fue el segundo numero'+'<br>');
            menor=n1;
            mayor=n2;
        }
    for(menor;menor<=mayor;menor++)
        {
            document.write(menor+'<br>')
        }
}
Compnum();
*/
/*
function compara3() {
    let n1 = parseInt(prompt('Ingrese el primer valor'));
    let n2 = parseInt(prompt('Ingrese el segundo valor'));
    let n3 = parseInt(prompt('Ingrese el tercer valor'));
    let menor, medio, mayor;
    if (n1 > n2 && n1 > n3) {
        mayor = n1;
    }
    else if (n1 < n2 && n1 < n3) {
        menor = n1;
    }
    else if ((n1 > n2 && n1 < n3) || (n1 > n3 && n1 < n2)) {
        medio = n1
    }
    if (n2 > n1 && n2 > n3) {
        mayor = n2;
    }
    else if (n2 < n1 && n2 < n3) {
        menor = n2;
    }
    else if ((n2 > n1 && n2 < n3) || (n2 > n3 && n2 < n1)) {
        medio = n2
    }
    if (n3 > n2 && n3 > n1) {
        mayor = n3;
    }
    else if (n3 < n2 && n3 < n1) {
        menor = n3;
    }
    else if ((n3 > n2 && n3 < n1) || (n3 > n1 && n3 < n2)) {
        medio = n3
    }

    document.write('menor:' + menor + '<br>');
    document.write('medio:' + medio + '<br>');
    document.write('mayor:' + mayor);
}
compara3();
*/

/*
function saludar(nombre){
    console.log('hola mundito',+nombre);
}
saludar("Jose");
*/

/*
let saludar=function(nombre){
    console.log("hola,"+nombre+"!")
    saludar("Ana");
}

()=>{}
*/


/*
let saludo = (nombre) => {
    document.write("hola, " +nombre+"!")
}
saludo("Marcela");
*/

/*
(function(){
    document.write("funcion anonima,autoejecutable")
})(); 
*/

/*
function nombre(nombre,apellid){
    document.write(" Mi nombre es: "+nombre)
    function apellido(apellido)
    {
        document.write(" y Mi apellido es: "+apellido)
    }  
    apellido(apellid)
}
nombre("Andres","Restrepo");
*/


/*
function area(base,pAltura){
    function altura(altura)
    {
      document.write(base*altura/2)  
    }  
    altura(pAltura)
}
area((15.5),(20));
*/

/*
function mostrarfechayhora(){
    let fecha;
    fecha=new Date();
    document.write('Hoy es: ');
    document.write((fecha.getDate()-9)+'/');
    document.write((fecha.getMonth()+1)+'/');
    document.write((fecha.getFullYear()-36)+'/');
    document.write(' Es la hora: ');
    document.write(fecha.getHours()+':');
    document.write((fecha.getMinutes())+':');
    document.write((fecha.getSeconds())+':');
    document.write((fecha.getMilliseconds())+'');


}
mostrarfechayhora();
*/

/*
function cargar(salarios) {
    for (let i = 0; i<salarios.length; i++) {
        let v = prompt('Ingrese su salario:');
        salarios[i] = parseInt(v);
    }
}
function calcularSalarios(salarios) {
    let total = 0
    for (let i = 0; i < salarios.length; i++) {
        total = total + salarios[i]
    }
    document.write('listado salarios <br>');
    for (let i = 0; i < salarios.length; i++) {
        document.write(salarios[i] + '<br>')
    }
    document.write('Total de gastos en salarios' + total)
}
let salarios;
salarios = new Array(5);
cargar(salarios);
calcularSalarios(salarios)
*/

/*
function cargar(numeros) {
    for (let i = 0; i<numeros.length; i++) {
        let v = prompt('Ingrese numero:');
        numeros[i] = parseInt(v);
    }
}
function calcularTotal(numeros) {
    let suma = 0
    for (let i = 0; i < numeros.length; i++) {
        suma = suma + numeros[i]
        
    }
    document.write('El total de los tres sumados es: '+suma)
    }
let numeros;
numeros = new Array(3);
cargar(numeros);
calcularTotal(numeros);
document.write('El total de los tres sumados es:'+suma);
*/


/*
function mostrar(){
    let nom= document.getElementById('nombre').value;
    let edad=document.getElementById('edad').value;
    alert('Ingreso el nombre: '+nom);
    alert('Ingreso la edad: '+edad)
}
*/

function Calcular() {
    let n1 = parseInt(document.getElementById('n1').value);
    let n2 = parseInt(document.getElementById('n2').value);
    if (document.querySelector('input[name="option"]:checked').value == 1) {
        document.write('Suma: ', n1 + n2);
    }
    if (document.querySelector('input[name="option"]:checked').value == 2) {
        document.write('Resta: ', n1 - n2);
    }
    if (document.querySelector('input[name="option"]:checked').value == 3) {
        document.write('Multiplicacion: ', n1 * n2);
    }
    if (document.querySelector('input[name="option"]:checked').value == 4) {
        document.write('Division: ', n1 / n2);
    }
}