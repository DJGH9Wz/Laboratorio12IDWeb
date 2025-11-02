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

<<<<<<< HEAD
const ejer13 =() =>{
    function procesarTexto(texto){
        const limpiarEspacios = texto =>{
            return texto.replace(/\s+/g,'');
        }
        const contarPalabras = texto =>{
            return texto.split(' ').length;;
        }

        console.log('Palabras sin espacio '+limpiarEspacios(texto));
        const conteo = contarPalabras(texto);
        return conteo;
    }

    texto=prompt('Ingrese el texto');

    console.log('Palabras en total: '+procesarTexto(texto));
}

const ejer14 = ()=>{
    function operacionesMatematicas(){
        const sumar =(a,b) => a+b;
        const restar =(a,b) => a-b;
        const dividir =(a,b) => a/b;
        const multiplicar =(a,b) => a*b;

        return{
            sumar,restar,multiplicar,dividir
        };
    }

    const operaciones=operacionesMatematicas();

    console.log('La suma es '+operaciones.sumar(2,2444));
    console.log('La resta es '+operaciones.restar(2,2444));
    console.log('La division es '+operaciones.dividir(200000,2444));
    console.log('La multiplicacion es '+operaciones.multiplicar(2,2444));
}

const ejer15 =()=>{
    function crearContador(a){
        const incrementar =() => a++;
        const resetear =() => a=0;

        return{
            incrementar,resetear
        };
    }

    const contador = crearContador(8);
    contador.incrementar();
    contador.incrementar();
    contador.incrementar();
    contador.incrementar();
    console.log('Aumento: '+contador.incrementar());
    console.log('Reseteo: '+contador.resetear()); 
}

const ejer16 =()=>{
    function acumulador(valorInicial){
        const sumar =(a) => valorInicial+=a;

        return{
            sumar
        };
    }

    const contador = acumulador(8);
    console.log('Suma del contador: '+contador.sumar(4));
    console.log('Suma del contador: '+contador.sumar(2));
    console.log('Suma del contador: '+contador.sumar(6));
    console.log('Suma del contador: '+contador.sumar(7));
}

const ejer17 =()=>{
    function saludo(nombre='Amigo'){
        console.log('Hola, '+nombre);
    }

    saludo();
    saludo('Manuel')
    
}

const ejer18 =()=>{
    function media(...numeros){
        const suma= numeros.reduce((a,b)=>{
            return a+b;
        },0);

        return suma/numeros.length;
    }
    console.log('La media es '+media(15,15,19,20,12));
    
}

const ejer19 =()=>{
    function mostrarDatos(nombre,edad,...hobbies){
        console.log('Nombre: '+nombre);
        console.log('Edad: '+edad);
        console.log('Hobbies: ');
        hobbies.forEach((hobby,index)=>{
            console.log((index+1)+'. '+hobby);
        });
    }

    mostrarDatos('Manuel',18,'comer','dormir','jugar');
}

const ejer20=()=>{
    function ejecutarOperacion(fn,x,y){
        return fn(x,y);
    }

    const sumar =(a,b) => a+b;
    const restar =(a,b) => a-b;
    const dividir =(a,b) => a/b;
    const multiplicar =(a,b) => a*b;

    console.log('Suma: '+ejecutarOperacion(sumar,8,9));
    console.log('Resta: '+ejecutarOperacion(restar,8,9));
    console.log('Division: '+ejecutarOperacion(dividir,27,9));
    console.log('Producto: '+ejecutarOperacion(multiplicar,8,9));
    
}

const ejer21 =()=>{
    function filtrarArreglo(arr,callback){
        for(const i of arr){
            if(i%2==0){
            callback(i);
            }
        }
    }
    console.log('Numeros Pares:');
    filtrarArreglo([2,23,21,4,2,15,53,4,32], n=> console.log(n));
}

const ejer22 =()=>{
    function descargarArchivo(url,callback){
        console.log('Descargando...');      
        callback(url);
        }

    descargarArchivo('tarea12.pdf', n=> console.log('Descarga completa de '+n));

}

const ejer23 =()=>{
    const potencia = (base,exponente) =>{
        if(exponente==0)
            return 1;
        if(exponente>0)
            return base * potencia(base,exponente-1);
        if(exponente<0)
            return 1/(potencia(base,-exponente));
    }

    console.log('2 elevado a 3 es: '+(potencia(2, 3)));
    
}

const ejer24 =()=>{
    const crearSecuencia= (inicio, paso)=>{
    let valorActual=inicio;
    return () =>{
        const valorADevolver=valorActual;
        valorActual+=paso;
        return valorADevolver;
        };
    };

    const secuencia = crearSecuencia(2, 3);
    console.log(secuencia()); 
    console.log(secuencia()); 
    console.log(secuencia()); 
    console.log(secuencia()); 
    
}
=======

>>>>>>> 14f78f76ea8897b18c1ad334b637532f3e4dfaf7


