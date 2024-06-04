//Criamos uma arrow function que recebe um Array e usamos o 
//array.map para iterar sobre cada elemento do array original.
//Ditamos o Array pelo JS.
function ex1(){
    const dobrarValores = (array) => 
    array.map((numero) => numero * 2);
    
    const numeros = [10, 20, 30, 40];
    const numerosDobrados = dobrarValores(numeros);
    console.log(numerosDobrados); 
};

//Criamos uma arrow function que recebe um Array e usamos o 
//array.sort com uma função de comparação que verifica o comprimento de cada palavra.
//Ditamos o Array pelo JS.
function ex2(){
    const ordenarPorComprimento = (array) => 
    array.sort((a, b) => a.length - b.length);

    const palavras = ["Lightning McQueen", "The King", "Cop", "Fabulous Hudson Hornet"];
    const palavrasOrdenadas = ordenarPorComprimento(palavras);
    console.log(palavrasOrdenadas);
}; 

