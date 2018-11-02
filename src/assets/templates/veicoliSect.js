import { addVeicolo, listVeicoli, deleteVeicolo } from '../scripts/veicoliServices'

export class VeicoliSect {

    constructor() {
        console.log("Loading Veicolisect");
        const that = this;
        return that;
    }

    loadVeic() {

        $('.container').html(`
            <div class="row">
                <div class="col-6">
                    <input type="text" class="targa" placeholder="inserisci targa" minlength="8" maxlength="8">
                    <hr>
                    <input type="text" class="telaio" placeholder="inserisci telaio" minlength="8" maxlength="8">
                    <hr>
                    <input type="text" class="conducente" placeholder="inserisci conducente">
                    <button class="insVeic">INSERISCI</button>
                </div>
                <div class="col-6" id="veicoli">
                    
                </div>
            </div>
        `);

        $('.insVeic').on('click', function(e){
            let veicoloDaInserire = {
                id: Math.random() * 100,
                targa: $('.targa').val(),
                telaio: $('.telaio').val(),
                conducente: $('.conducente').val()
            };
            console.log(veicoloDaInserire);
            addVeicolo(veicoloDaInserire).then((data) => {
                console.log("Added :" + JSON.stringify(data));
            }).catch((e) => {
                console.log("Promise not ok " + e)
            }).finally(() => {
                console.log("promise end");
            });
        });

        listVeicoli().then((data) => {
            for (let veic of data) {
                $("#veicoli").append(`
                <div class="card" data-id="${veic.id}">
                    <div class="card-header">
                        <h1>targa: ${veic.targa}</h1>
                    </div>
                    <div class="card-body">
                        <b>telaio: </b>${veic.telaio} <b></b>
                    </div>
                    <div class="card-footer">
                        <b>conducente: ${veic.conducente}</b>
                    </div>
                </div>`)
            }
            $('.card').on('dblclick',function(e){
                let id = $(this).data('id');
                console.log(id);
                deleteVeicolo(id).then(function(data){
                    window.alert("Deleted element :" + id);
                    window.location.reload();
                }).catch(function(e){
                    console.log("Problem with deleting element: " + e);
                });
            })
        }).catch((e) => {
            console.log("Promise not ok " + e)
        }).finally(() => {
            console.log("promise end");
        });

    }

}