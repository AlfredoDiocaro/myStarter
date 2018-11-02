import {restURL} from './constants'

export const listPersone = () => {
    let prom = new Promise((resolve, reject) => {
        $.get(restURL+'/persone').done(function(data){
            resolve(data);
        }).fail(function(e){
            console.log(e);
            reject(e);
        }); 
    })

    return prom;
}