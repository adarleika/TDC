
/*const validator = {
  // ...
  	  
};

export default validator;
*/


  //const formulario = document.querySelector('#formulario-tarjeta');
/*
const validator = {

  //formulario.inputNumero.addEventListener("keyup", (e) => {
  
    formulario = document.querySelector('#formulario-tarjeta'),
    
    function isValid(inputNumero) {
      
    
    console.log (e);
    console.log (e.target.value);
    //aqui ya podriamos ver el numero completo /console.log (e.target.value);
  
    let valorInput = e.target.value;
  
    let valorNumeroArreglo = (valorInput.split (" "));
    console.log (valorNumeroArreglo);
    var pairNum = [];
    for(var i=0; i < valorNumeroArreglo.length; i++){
       if( i % 2 !== 0){ // Condición para obtener los números en las posiciones pares
         var multiply = valorNumeroArreglo[i] * 2; // Variable para multiplicar los números en posición par
           if(multiply >= 10) { // Condición para verificar los números con dos dígitos
             var sum = 0; // Variable para almacenar la suma de todos los digitos
             while (multiply){ // Condición para verificar los números en posición par que multiplicados den cifras con dos dígitos para obtener  un número de un solo dígito
              sum += multiply % 10; // Se extrae el residuo del número
              multiply = Math.floor(multiply/10); // Redondeamos el cociente de la división con Math.floor
            }
              pairNum.push(sum); // Colocamos los números en posición par en la variable sum
          } else{
           pairNum.push(multiply); // Colocamos los números en posición impar de la variable multiply
         }
      } else {
            pairNum.push(parseInt(valorNumeroArreglo[i])); // Convertimos el string en entero y los colocamos en el array
    }
    }
  
    var numToValidate = 0; // Creamos una variable numberToValidate para darle un valor de inicio
     for(var j = 0; j < pairNum.length; j++){ //Iterar los números pares
       numToValidate += pairNum[j]; //Se concatenan los números
     }
     if(numToValidate % 10 === 0){ // Deacuerdo al algoritmo, si al sumar todos los números, el residuo de la división de estos entre 10 es 0 entonces la tarjeta es
            return 'Valida'; // El número es valido
          }else{
            return 'Invalida'; // El número es invalido
          }
  
        document.write(isValidCard(numCard));
  
        
  
   });



/*
  var numeroTarjeta = document.getElementById("numeroTarjeta");

    function validator(inputNumero) {

    let numeroTarjeta = new Array(16);
    numeroTarjeta.length;

    let numtarjeta = 0;
    let suma = 0;
    let i = 0;

    for( i = 0; i <= 16; i++) {
      
    }

}

*/

const tarjeta = document.querySelector('#tarjeta'),

btnAbrirFormulario = document.querySelector('#btn-abrir-formulario'),
formulario = document.querySelector('#formulario-tarjeta'),
numeroTarjeta = document.querySelector('#tarjeta .numero'),
nombreTarjeta = document.querySelector('#tarjeta .nombre'),
logoMarca = document.querySelector('#logo-marca'),
mesExpiracion = document.querySelector('#tarjeta .mes'),
yearExpiracion = document.querySelector('#tarjeta .year');

btnAbrirFormulario.addEventListener('click', () => {
  btnAbrirFormulario.classList.toggle('active');
  formulario.classList.toggle('active');
});

// selector del Mes
for (i=1; i <= 12; i++){
console.log (i);
let opcion= document.createElement ("option");
opcion. value=i;
opcion.innerText=i;
formulario.selectMes.appendChild(opcion);

}

// selector del año
const yearActual = new Date ().getFullYear ();
for (let i=yearActual ; i<= yearActual+4; i++){
console.log (i);
let opcion = document.createElement("option");
opcion.value=i;
opcion.innerText= i;
formulario.selectYear.appendChild(opcion);

}



// input de la Tarjeta

formulario.inputNumero.addEventListener("keyup", (e) => {

console.log (e);
//aqui ya podriamos ver el numero completo /console.log (e.target.value);

let valorInput = e.target.value;


formulario.inputNumero.value = valorInput
// ojo que aqui en los replace si influye las dobles comillas, por lo que hay que poner una sola comilla'' si poneer "" cambia el resultado 
// elimiar espacios que esten en blanco
.replace(/\s/g, '')

// elimiar letras
.replace(/\D/g, '')
// ponemos espacios cada 4 numeros
.replace(/([0-9]{4})/g, '$1 ')
// ponemos este metodo para eliminar el ultimoespaciado de la cadena
.trim();

// es para visualizar en la pagina el numero de tarjeta   

numeroTarjeta.textContent = valorInput;
// cuando la persona borre lo escrito y que no se corra la palabra numero de tarjeta 
if(valorInput == ''){
  numeroTarjeta.textContent ='#### #### #### ####'
// descargar las imagenes de los logo
logoMarca.innerHTML = '';

}
if(valorInput[0] == 4){
  logoMarca.innerHTML = '';
  const imagen = document.createElement('img');
  imagen.src = 'img/visa.png';
  logoMarca.appendChild(imagen);
} else if(valorInput[0] == 5){
  logoMarca.innerHTML = '';
  const imagen = document.createElement('img');
  imagen.src = 'img/mastercard.png';
  logoMarca.appendChild(imagen);
}

});

//  Input nombre de tarjeta
formulario.inputNombre.addEventListener('keyup', (e) => {
let valorInput = e.target.value;

formulario.inputNombre.value = valorInput.replace(/[0-9]/g, '');
nombreTarjeta.textContent = valorInput; 
if(valorInput ==''){
  nombreTarjeta.textContent = 'xxxxx xxxxx';
}



mostrarFrente();
});

// para que cuando el usurio escriba la fecha se vea reflejada en la tarjeta 
formulario.selectMes.addEventListener('change', (e) => {
mesExpiracion.textContent = e.target.value;

});

// para que cuando el usurio escriba el año se vea reflejada en la tarjeta 
formulario.selectYear.addEventListener('change', (e) => {
yearExpiracion.textContent = e.target.value.slice(2);

});
