import { listPersone } from '../scripts/personService';

export class HomeSect {

    constructor() {
        console.log("Loading Homesect");

    }

    loadHome() {

        $('.container').html(`
            <div class="row">
                <div class="col-12">
                    <button class="fetchPeople">FETCH PERSONE</button>
                </div>
            </div>
        `);
            
        $('.fetchPeople').on('click', function(e) {
            listPersone().then((data) => {
                for (let pers of data) {
                    $("#main").append(`
                    <div class="card" data-id="${pers.id}">
                    <div class="card-header">
                      <h1>mi chiamo: ${pers.nome}</h1>
                    </div>
                    <div class="card-body">
                      <b>eta: </b>${pers.codiceFiscale} <b> anni</b>
                    </div>
                    <div class="card-footer">
                      <b>${pers.cognome}</b>
                    </div>
                  </div>`)
                }
            }).catch((e) => {
                console.log("Promise not ok " + e)
            }).finally(() =>{
                console.log("promise end");
            })
        });

    }

}
