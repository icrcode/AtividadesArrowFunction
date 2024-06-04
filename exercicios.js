
function ex1(){
    const dobrarValores = (array) => 
    array.map((numero) => numero * 2);
    
    const numeros = [10, 20, 30, 40];
    const numerosDobrados = dobrarValores(numeros);
    console.log(numerosDobrados); 
};

function ex2(){
    const ordenarPorComprimento = (array) => 
    array.sort((a, b) => a.length - b.length);

    const palavras = ["Lightning McQueen", "The King", "Cop", "Fabulous Hudson Hornet"];
    const palavrasOrdenadas = ordenarPorComprimento(palavras);
    console.log(palavrasOrdenadas);
}; 


function ex3_1(){
    function filtrarNumerosPares(array) {
        const numerosPares = [];
        for (const numero of array) {
          if (numero % 2 === 0) {
            numerosPares.push(numero);
          }
        }
        return numerosPares;
      }
      
      const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const pares = filtrarNumerosPares(numeros);
      console.log(pares);
};

function ex3_2(){
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const pares = numeros.filter((num) => num % 2 === 0);

    console.log(pares);
};

