/*const novoCliente = 'Joao'

function tipo_pessoa(resolve, err){
    if( novoCliente =='Joao'  ){
        resolve({
        nome: novoCliente,
        mens: ', é um cliente!'
        });
    }else {
        err({
            name: novoCliente,
            nome: "Não encontrado em nossa base de dados!"
            });
    }
}

tipo_pessoa((result) => {console.log(result.nome + ' ' +result.mens) }, () => {
        console.log(err.nome + ' ' +err.mens)
    }
)

*/



/*
const novoCliente = 'Joao'

function tipo_pessoa(callback, errorCallback){
    
    return new Promise((resolve, reject)=> { 
        if( novoCliente =='Joao'  ){
            resolve({
                nome: novoCliente,
                mens: ', é um cliente!'
            });
        }else{
            reject({
                name: novoCliente,
                nome: "Não encontrado em nossa base de dados!"
            });
        }
    })
}

tipo_pessoa()
    .then((result) => {
        console.log(result.nome + ' ' +result.mens) 
    })
    .catch((error) => {
        console.log(error.nome + ' ' +error.mens)
    })

*/

/*
let randomNumber = 9
setTimeout(() => {
   randomNumber += 100 
   console.log(randomNumber)
}, 2000);

console.log(randomNumber);
*/


function sayMayname (name){
    console.log('' + name)
    name()
    name()
    name()
}

sayMayname(
    () => {
        console.log('Estou em uma callBack')
    }
)

