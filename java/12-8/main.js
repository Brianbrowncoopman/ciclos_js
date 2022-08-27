
//promesas
/*let comprar = '19';

let caramelos = new Promise((resolve, reject)  =>{
  setTimeout(()=>{
   if( comprar>=10) resolve(comprar);   
   else reject('no habia tiendas');
  },2000)
});

//console.log(caramelos)

//caramelos.then((patito)=> console.log(patito)),
//(error)=> console.log('fallo, $(err)')

function cuadradoPromesas(value, func) {
  if(typeof value !== 'number'){
    return Promise.reject(`Error, el valor ${value} ingresado no es un numero`)
  }

  return new Promise((resolve, reject)=>{
    setTimeout(()=>(
      resolve({
        value: value,
        result:Math.pow(value,2)
      })
    ), 0 | (Math.random() * 1000))
  })
}

cuadradoPromesas(0)
.then((obj)=>{
console.log('se inicia la Promesa')
console.log(`Promesa: ${obj.value}, ${obj.result}`)
return cuadradoPromesas(1)
})
.then((obj)=>{
  console.log(`Promesa: ${obj.value}, ${obj.result}`)
return cuadradoPromesas(2)
})
.then((obj)=>{
  console.log(`Promesa: ${obj.value}, ${obj.result}`)
return cuadradoPromesas(3)
})
.then((obj)=>{
  console.log(`Promesa: ${obj.value}, ${obj.result}`)
return cuadradoPromesas(4)
})
.then((obj)=>{
  console.log(`Promesa: ${obj.value}, ${obj.result}`)
return cuadradoPromesas(5)
})
.then((obj)=>{
  console.log(`Promesa: ${obj.value}, ${obj.result}`)
})
.then((obj)=>{
console.log('finalizacion de las promesas')
})
.catch((err)=>{
  console.log(err)
})*/


//funciones asincronas

function cuadradoPromesas(value, func) {
  if(typeof value !== 'number'){
    return Promise.reject(`Error, el valor ${value} ingresado no es un numero`)
  }

  return new Promise((resolve, reject)=>{
    setTimeout(()=>(
      resolve({
        value: value,
        result:Math.pow(value,2)
      })
    ), 0 | (Math.random() * 1000))
  })
}

async function funcionAsincronaDeclarada(){
  try {
    console.log(('inicio de la funcion Async'));

    let obj = await cuadradoPromesas(0);
    console.log(`Async function: ${obj. value}, ${obj.result}`);

    obj = await cuadradoPromesas(1);
    console.log(`Async function: ${obj. value}, ${obj.result}`);

    obj = await cuadradoPromesas(2);
    console.log(`Async function: ${obj. value}, ${obj.result}`);

    obj = await cuadradoPromesas(3);
    console.log(`Async function: ${obj. value}, ${obj.result}`);

    obj = await cuadradoPromesas(4);
    console.log(`Async function: ${obj. value}, ${obj.result}`);

    obj = await cuadradoPromesas(5);
    console.log(`Async function: ${obj. value}, ${obj.result}`);
  } catch(error) {
  console.log(error);
  }
}
funcionAsincronaDeclarada();

const funcionAsincronaExpresada = async()=>{
  try {
    console.log(('inicio de la funcion Async'));

    let obj = await cuadradoPromesas(6);
    console.log(`Async function: ${obj. value}, ${obj.result}`);

    obj = await cuadradoPromesas(7);
    console.log(`Async function: ${obj. value}, ${obj.result}`);

    obj = await cuadradoPromesas(8);
    console.log(`Async function: ${obj. value}, ${obj.result}`);

    obj = await cuadradoPromesas(9);
    console.log(`Async function: ${obj. value}, ${obj.result}`);

    obj = await cuadradoPromesas(10);
    console.log(`Async function: ${obj. value}, ${obj.result}`);

    obj = await cuadradoPromesas(11);
    console.log(`Async function: ${obj. value}, ${obj.result}`);
  } catch(error) {
  console.log(error);
  }
}

funcionAsincronaExpresada()


