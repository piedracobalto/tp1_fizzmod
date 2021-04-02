/* 
Realizar una función que permita contar la cantidad de vocales que tiene un texto que se recibe como parámetro. No habrá discriminación entre las vocales en mayúscula y en minúscula. Las vocales acentuadas no se contarán. El valor obtenido se retornará al terminar la función. Si se no se recibe un string retornará -1.
*/
function contarVocales(texto) {

  let numeroVocales = 0;
  const vocales = ['A', 'E', 'I', 'O', 'U']
  // Este condicional es para saber si el texto es un string o no
  if (typeof texto !== 'string') {
    numeroVocales = -1;
  } else {
    // la constante arrayTexto es para convertir todas las letras en mayusculas y dividirlas
    const arrayTexto = texto.toUpperCase().split('');
    // se recorre el texto dividido y se utiliza el includes para contar la cantidad de vocales
    for (let i = 0; i < arrayTexto.length; i++) {
      if (vocales.includes(arrayTexto[i])) {
        numeroVocales++;
      }
    }
  }
  return numeroVocales;
}

/* 
Crear un repo en github y subir todo el proyecto. Se ignorará la carpeta node_modules (para ellos está creado el archivo .gitignore en este proyecto) Esta función devolverá un string con la url del repo.
*/
function urlRepo() {
  return 'https://github.com/piedracobalto/tp1_fizzmod.git';
}

/* 
Crear una función arrow, que devuelva una clase en ES6 que contendrá dos métodos llamados contadorPalabras y hayNumeros. La clase recibirá un texto que se guardará en una propiedad llamada texto. contadorPalabras retornará la cantidad de palabras encontradas en la propiedad texto y hayNumeros devolverá true en caso de que encuentre un número en dicho texto, caso contrario retorna false. En ambos métodos, si el texto no es válido, se devolverá -1
Crear un propiedad estática contadorInstancias que me indique cuantas instancias hay de esa clase.
*/
const crearClase = () => {
  
  return class claseEnES6{

    constructor(input){
      this.texto = input;
      claseEnES6.contadorInstancias = (claseEnES6.contadorInstancias || 0 ) +1
     
    }

    // static contadorInstancias

    contadorPalabras(){
      //en el método contadorPalabras se utiliza un condicional para saber si el texto es un string o no
      if(typeof this.texto === 'string'){
        // en el caso de que sea string se vuelve hacer un condicional para saber si espacios (que es lo que esta entre las palabras) y contar esos espacios
        return this.texto === '' ? 0 : this.texto.split(' ').length;
      }else{
        return -1;
      }
    }

    hayNumeros(){
      if(typeof this.texto === 'string'){
        const arrayLetras = this.texto.split('');
        for(let i = 0; i<arrayLetras.length; i++){
          // en el caso del metodo hayNumeros es un condicional para saber si hay numeros en string 
            if(arrayLetras[i] > '0' && arrayLetras[i] < '9'){
              return true;
            }
        }
        return false
      }else{
      return -1
    }
  }
}
};


module.exports = {
  contarVocales,
  urlRepo,
  crearClase
};
