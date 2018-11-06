import {restURL} from './constants'

export const listVeicoli = () => {
    let prom = new Promise((resolve, reject) => {
        $.getJSON(restURL+'/veicoli').done(function(data){
            resolve(data);
        }).fail(function(e){
            console.log(e);
            reject(e);
        }); 
    })
    return prom;
}

export const addVeicolo = (veicolo) => {
    let prom = new Promise((resolve, reject) => {
        $.post(restURL+'/veicoli', veicolo).done(function(data){
            resolve(data);
        }).fail(function(e){
            console.log(e);
            reject(e);
        }); 
    })
    return prom;
}

export const deleteVeicolo = (id) => {

    let eliminaVeicolo = function (id) {
        let ritorno = $.ajax({
            url: restURL + '/veicoli/' + id,
            method: 'DELETE'
        });
        return ritorno;
    };
    
    let prom = new Promise((resolve, reject) => {
        eliminaVeicolo(id).done(function(data){
            resolve(data);
        }).fail(function(e){
            console.log("ERROR");
            reject(e);
        }); 
    })
    return prom;
}


