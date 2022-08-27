


/*try {
    console.log('este es un parrafo') 


    console.log('2do texto')//aca el codigo

} catch (error) { //aca error
    console.log('Ocurrio un error')
    console.log(error.name)
    console.log(error.message)

} finally{
    console.log('este siempre se ejecuta')
}*/

/*try {

    let valor ="4"

    if (isNaN(valor)) {

        throw new Error("el valor no es un numero");

    }

    console.log(Math.pow(valor, 8));

} catch (error) {

    console.log(`Se produjo el siguiente error: ${error}`);

}*/


/*setTimeout(() =>{*/
/*console.log('hola mundo')*/
/*},3000)*/

const funcionB = function (){
    console.log('Funcion B ejecucion')
}

const funcionA = function(callBack) {
    callBack()
};

funcionA(funcionB)







