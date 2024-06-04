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
