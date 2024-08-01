/*Ejercicio 1

num1=(prompt('Ingrese una cifra'));
ultimoDig=num1.charAt(num1.length - 1)
if(ultimoDig==='4'){
    document.write('La cifra ingresada termina en 4')
}
else{
    document.write('La cifra ingresada NO termina en 4')
}
*/

/*Ejercicio 2

num1=(prompt('Ingrese una cifra'));
if(num1<1000){
    document.write('La cifra ingresada tiene 3 digitos o menos')
}
else{
    document.write('La cifra ingresada tiene mas de 3 digitos')
}
*/

/*Ejercicio 3

num1=(prompt('Ingrese una cifra'));
if(num1<0){
    document.write('La cifra ingresada es negativa')
}
else{
    document.write('La cifra ingresada es positiva')
}
*/

/*Ejercicio 4
num1=(prompt('Ingrese una cifra de dos digitos'));
ultimoDig=parseInt(num1.charAt(num1.length - 1));
primerDig=parseInt(num1.charAt(num1.length - 2));
sum=(ultimoDig+primerDig)
document.write('La suma de ambos digitos es: '+sum)
*/


/*Ejercicio 5
num1=(prompt('Ingrese una cifra de dos digitos'));
ultimoDig=parseInt(num1.charAt(num1.length - 1))
primerDig=parseInt(num1.charAt(num1.length - 2))
if(primerDig % 2===0 && ultimoDig %2 ===0)
document.write('los dos numeros son pares')
else{
    document.write('los dos numeros no son pares')
}
*/


/*Ejercicio 5
num1=(prompt('Ingrese una cifra de dos digitos'));
ultimoDig=parseInt(num1.charAt(num1.length - 1));
primerDig=parseInt(num1.charAt(num1.length - 2));
if(primerDig % 2===0 && ultimoDig %2 ===0)
document.write('los dos numeros son pares')
else{
    document.write('los dos numeros no son pares')
}
*/

/*Ejercicio 6
num1=parseInt(prompt('Ingrese un numero inferior a 20'));
if(num1==2 || num1==3 || num1==3 || num1==5 || num1==7 || num1==11 || num1==13 || num1==17 || num1==19)
document.write('Es un numero primo')
else{
    document.write('no es numero primo')
}
*/

/*Ejercicio 7
num1 = parseInt(prompt('Ingrese un numero de dos digitos'));
if (num1 > 0) {
    if (num1 == 2 || num1 == 3 || num1 == 3 || num1 == 5 || num1 == 7 || num1 == 11 || num1 == 13 || num1 == 17 || num1 == 19 || num1 == 23 || num1 == 29 || num1 == 31 || num1 == 37 || num1 == 41 || num1 == 43 || num1 == 47 || num1 == 53 || num1 == 59 || num1 == 61 || num1 == 67 || num1 == 71 || num1 == 73 || num1 == 79 || num1 == 83 || num1 == 89 || num1 == 97) { document.write('Es un numero primo positivo'); }
    else {
        document.write('no es numero primo, pero es positivo');
    }
}
else if (num1 < 0) {
    if (num1 == -2 || num1 == -3 || num1 == -3 || num1 == -5 || num1 == -7 || num1 == -11 || num1 == -13 || num1 == -17 || num1 == -19 || num1 == -23 || num1 == -29 || num1 == -31 || num1 == -37 || num1 == -41 || num1 == -43 || num1 == -47 || num1 == -53 || num1 == -59 || num1 == -61 || num1 == -67 || num1 == -71 || num1 == -73 || num1 == -79 || num1 == -83 || num1 == -89 || num1 == -97) {
        document.write('Es un numero primo negativo') 
    } else {
        document.write('no es numero primo, pero es negativo')
    }
}
*/

/*Ejercicio 8
num1=(prompt('Ingrese una cifra de dos digitos'));
ultimoDig=parseInt(num1.charAt(num1.length - 1));
primerDig=parseInt(num1.charAt(num1.length - 2));
if((primerDig == 2 || primerDig == 3  || primerDig == 5 || primerDig == 7)&&(ultimoDig == 2 || ultimoDig == 3  || ultimoDig == 5 || ultimoDig == 7))
{
    document.write('Ambos numeros son primos') 
}
else{
    document.write('Ambos numeros no son primos')
}
*/

/*Ejercicio 9
num1=(prompt('Ingrese una cifra de dos digitos'));
ultimoDig=parseInt(num1.charAt(num1.length - 1));
primerDig=parseInt(num1.charAt(num1.length - 2));
if((primerDig%ultimoDig==0)||(ultimoDig%primerDig==0))
{
    document.write('un numero es multiplo del otro') 
}
else{
    document.write('ningun numero es multiplo del otro')
}
*/

/*Ejercicio 10
num1=(prompt('Ingrese una cifra de dos digitos'));
ultimoDig=parseInt(num1.charAt(num1.length - 1));
primerDig=parseInt(num1.charAt(num1.length - 2));
if(primerDig==ultimoDig)
{
    document.write('Los dos numeros son iguales') 
}
else{
    document.write('Los dos numeros no son iguales')
}
*/

/*Ejercicio 11
num1=(prompt('Ingrese un numero'));
num2=(prompt('Ingrese otro numero'));
if(num1>num2)
{
    document.write('El primer numero ingresado es mayor')
}
else
{
    document.write('El segundo numero ingresado es mayor')
}
*/

/*Ejercicio 12
num1=(prompt('Ingrese una cifra de dos digitos'));
ultimoDig1=parseInt(num1.charAt(num1.length - 1));
primerDig1=parseInt(num1.charAt(num1.length - 2));
num2=(prompt('Ingrese una cifra de dos digitos'));
ultimoDig2=parseInt(num2.charAt(num2.length - 1));
primerDig2=parseInt(num2.charAt(num2.length - 2));
if(primerDig1==primerDig2 || primerDig1==ultimoDig2 || ultimoDig1==primerDig2 || ultimoDig1==ultimoDig2 )
{
    document.write('los dos numeros tiene digitos en comun')
}
else
{
    document.write('los dos numeros no tiene digitos en comun')
}
*/

/*Ejercicio 13
num1=parseInt(prompt('Ingrese un numero'));
num2=parseInt(prompt('Ingrese otro numero'));
sum=(num1+num2);
if(sum%2==0)
{
    document.write('La suma de ambos es par');
}
else
{
    document.write('la suma de ambos es impar');
}
*/


/*Ejercicio 14
num1=parseInt(prompt('Ingrese un numero'));
num2=parseInt(prompt('Ingrese otro numero'));
sum=(num1+num2);
document.write(sum);
*/

/*Ejercicio 15
num1 = (prompt('Ingrese una cifra de tres digitos'));
n1 = parseInt(num1.charAt(num1.length - 1));
n2 = parseInt(num1.charAt(num1.length - 2));
n3 = parseInt(num1.charAt(num1.length - 3));
sum=(n1+n2+n3);
document.write(sum)*/

/*Ejercicio 16
num1 = (prompt('Ingrese una cifra de tres digitos'));
n1 = parseInt(num1.charAt(num1.length - 1));
n2 = parseInt(num1.charAt(num1.length - 2));
n3 = parseInt(num1.charAt(num1.length - 3));
if(n1==n2 || n1==n3 || n2==n3)
    {
        document.write('Dos o mas de los digitos son iguales en la cifra') 
    }
    else{
document.write('Ninguno de los digitos de la cifra son iguales')
    }
*/

/*Ejercicio 17
num1 = (prompt('Ingrese una cifra de tres digitos'));
n1 = parseInt(num1.charAt(num1.length - 1));
n2 = parseInt(num1.charAt(num1.length - 2));
n3 = parseInt(num1.charAt(num1.length - 3));
if(n1<n2 && n1<n3)
    {
        document.write('El digito mayor es el primero') 
    }
    else if (n2<n1 && n2<n3){
document.write('El digito mayor es el segundo')
    }
    else{
        document.write('El digito mayor es el tercero')
    }
*/

/*Ejercicio 18
num1=(prompt('Ingrese una cifra de tres digitos'));
ultimoDig=parseInt(num1.charAt(num1.length - 1));
primerDig=parseInt(num1.charAt(num1.length - 2));
medioDig=parseInt(num1.charAt(num1.length - 3));
if(primerDig%ultimoDig==0||ultimoDig%primerDig==0||medioDig%ultimoDig==0||medioDig%primerDig==0)
{
    document.write('un numero es multiplo del otro') 
}
else{
    document.write('ningun numero es multiplo del otro')
}
*/

/*Ejercicio 19
num1=parseInt(prompt('Ingrese un numero'));
num2=parseInt(prompt('Ingrese otro numero'));
num3=parseInt(prompt('Ingrese otro numero'));
if(num1>num2 && num1>num3)
    {
        document.write('El digito mayor es el primero') 
    }
    else if (num2>num1 && num2>num3){
document.write('El digito mayor es el segundo')
    }
    else{
        document.write('El digito mayor es el tercero')
    }
*/

/*Ejercicio 20
num1=parseInt(prompt('Ingrese un numero'));
num2=parseInt(prompt('Ingrese otro numero'));
num3=parseInt(prompt('Ingrese otro numero'));
if(num1>num2 && num1>num3)
    {
        document.write(num3+'<br>'+num2+'<br>'+num1) 
    }
    else if (num2>num1 && num2>num3){
document.write(num2+'<br>'+num1+'<br>'+num3)
    }
    else{
        document.write(num3+'<br>'+num1+'<br>'+num2)
    }
*/

/*Ejercicio 21
num1=parseInt(prompt('Ingrese un numero'));
n1a = parseInt(num1.charAt(num1.length - 1));
n2a = parseInt(num1.charAt(num1.length - 2));
num2=parseInt(prompt('Ingrese otro numero'));
n1b = parseInt(num2.charAt(num2.length - 1));
n2b = parseInt(num2.charAt(num2.length - 2));
num3=parseInt(prompt('Ingrese otro numero'));
n1c = parseInt(num3.charAt(num3.length - 1));
n2c= parseInt(num3.charAt(num3.length - 2));
if(num1>num2 && num1>num3)
    {
        document.write(num3+'<br>'+num2+'<br>'+num1) 
    }
    else if (num2>num1 && num2>num3){
document.write(num2+'<br>'+num1+'<br>'+num3)
    }
    else{
        document.write(num3+'<br>'+num1+'<br>'+num2)
    }

*/
/*Ejercicio 22
num1=(prompt('Ingrese una cifra de tres digitos'));
ultimoDig=parseInt(num1.charAt(num1.length - 1));
primerDig=parseInt(num1.charAt(num1.length - 3));
if(primerDig==ultimoDig)
{
    document.write('el primer y ultimo digito son iguales') 
}
else{
    document.write('el primer y ultimo digito no son iguales')
}
*/

/*Ejercicio 23
num1=(prompt('Ingrese una cifra de tres digitos'));
n1=parseInt(num1.charAt(num1.length - 1));
n2=parseInt(num1.charAt(num1.length - 2));
n3=parseInt(num1.charAt(num1.length - 3));
contador=0
if(n1 == 2 || n1 == 3 || n1 == 3 || n1 == 5 || n1 == 7)
{
    contador+=1
}
if(n2 == 2 || n2 == 3 || n2 == 3 || n2 == 5 || n2 == 7)
    {
        contador+=1
    }
if(n3 == 2 || n3 == 3 || n3 == 3 || n3 == 5 || n3 == 7)
        {
            contador+=1
        }
document.write('cantidad de digitos primos: '+contador
)
*/

/*Ejercicio 24
num1=(prompt('Ingrese una cifra de tres digitos'));
n1=parseInt(num1.charAt(num1.length - 1));
n2=parseInt(num1.charAt(num1.length - 2));
n3=parseInt(num1.charAt(num1.length - 3));
contador=0
if(n1%2==0)
{
    contador+=1
}
if(n2%2==0)
    {
        contador+=1
    }
if(n3%2==0)
        {
            contador+=1
        }
document.write('cantidad de digitos pares: '+contador
)
*/

/*Ejercicio 25*/
num1=(prompt('Ingrese una cifra de tres digitos'));
n3=parseInt(num1.charAt(num1.length - 1));
n2=parseInt(num1.charAt(num1.length - 2));
n1=parseInt(num1.charAt(num1.length - 3));
sum12=n1+n2
sum23=n2+n3
sum13=n1+n3
if(sum12==n3)
{
    document.write('La suma del primer y segundo digito es igual al tercer digito')
}
if(sum23==n1)
    {
        document.write('La suma del tercer y segundo digito es igual al primer digito')
    }
if(sum13==n2)
        {
            document.write('La suma del tercer y primer digito es igual al segundo digito')
        }