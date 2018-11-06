import {restURL} from './constants'

export const restCall = (urlToInvoke, methodType, dataToPass, headersOptions, statusCodesToHandle) => {

    const dati = dataToPass || {};
    const headers = headersOptions || {};
    const codiciStato = statusCodesToHandle || {};
    
    let prom = new Promise((resolve, reject) => {
        $.ajax({
            url : restURL + '/' + urlToInvoke,
            method : methodType,
            data : dati,
            headers : headers,
            statusCode: codiciStato
        }).done(function(data){
            resolve(data);
        }).fail(function(e){
            console.log(e);
            reject(e);
        }); 
    })
    return prom;
}