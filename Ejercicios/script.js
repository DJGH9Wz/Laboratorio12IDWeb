const ejer3 =() =>{
    function esPar (num){
        return (num%2==0) ;
    }
    numero=parseInt(prompt('Ingrese el numero'));
    if(esPar(numero)){
        alert('El numero es par');
    }else{
        alert('El numero no es par')
    }
}

const ejer4 =() =>{
    function areaRectangulo(altura,base){
        return base*altura;
    }
    base=parseFloat(prompt('Ingrese la base'));
    altura=parseFloat(prompt('Ingrese la altura'));
    
    alert('El area del rectangulo es '+areaRectangulo(altura,base));
}

const ejer5 =() =>{
    function esMultiplo(num, mod){
        return num%mod==0;
    }
    numero=parseInt(prompt('Ingrese el numero'));
    modulo=parseInt(prompt('Ingrese el modulo'));
    
    if(esMultiplo(numero,modulo)){
        alert('El numero si es multiplo de '+numero);
    }else{
        alert('El numero no es multiplo de '+numero);
    }
}

const ejer6 =() =>{
    function mayorDeTres(a,b,c){
        return Math.max(a,b,c);
    }
    numero1=parseInt(prompt('Ingrese el numero 1'));
    numero2=parseInt(prompt('Ingrese el numero 2'));
    numero3=parseInt(prompt('Ingrese el numero 3'));

        alert('El numero mayor es '+mayorDeTres(numero1,numero2,numero3));
}


const ejer7 =() =>{
    const promedio = function(a,b,c){
        return ((a+b+c)/3);
    }

    num1=parseFloat(prompt('Ingrese el numero 1'));
    num2=parseFloat(prompt('Ingrese el numero 2'));
    num3=parseFloat(prompt('Ingrese el numero 3'));

    alert('El promedio es '+promedio(num1,num2,num3));
}

const ejer8 =() =>{
    const convertirAMayusculas = function(text){
        return text.toUpperCase();
    }

    texto=prompt('Ingrese el texto');
    

    alert(convertirAMayusculas(texto));
}

const ejer9 =() =>{
    const calcularDescuento = function(precio, descuento){
        return precio*descuento;
    }

    precio=parseFloat(prompt('Ingrese el precio'));
    porcentaje=parseFloat(prompt('Ingrese el porcentaje en decimal'));

    alert('El descuento es de '+calcularDescuento(precio,porcentaje));
}

const ejer10 =() =>{
    const saludo = nombre => {
        alert('Hola '+nombre);
    }

    nombre=prompt('Ingrese su nombre');
    saludo(nombre);
}

const ejer11 =() =>{
    const esPositivo = numero => {
        return numero>0;
    }

    numero=parseFloat(prompt('Ingrese el numero'));

    if(esPositivo(numero)){
        alert('El numero es positivo');
    }else{
        alert('El numero es negativo o 0');
    }
}

const ejer12 =() =>{
    const componerTransformaciones = text => {
        const convertirAMayusculas = text =>{
        return text.toUpperCase();
        }
        const agregarSigno = text =>{
        return text+'!';
        }

        return agregarSigno(convertirAMayusculas(text));
    }

    texto=prompt('Ingrese el texto');

    alert(componerTransformaciones(texto));
}




