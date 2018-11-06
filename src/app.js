/* src/app.js */

//FANCYTREE
import 'jquery.fancytree/dist/skin-lion/ui.fancytree.css';  // CSS or LESS

import {createTree} from 'jquery.fancytree';

import 'jquery.fancytree/dist/modules/jquery.fancytree.edit';
import 'jquery.fancytree/dist/modules/jquery.fancytree.filter';

import 'jquery-ui';
import 'jquery-ui/ui/core';


// Styles
require('normalize.css');
import './assets/styles/_app.scss';
import 'bootstrap/dist/css/bootstrap.css'

import { listVeicoli } from './assets/scripts/veicoliServices'
import { restCall } from './assets/scripts/services'
import 'bootstrap'
import 'pivottable'

let veicoli = [];

$(window).on("load",function(){
    console.log("loading window");
    listVeicoli().then((data) => {
        this.veicoli = data;
        console.log(this.veicoli);

            $("#output").pivot(
                this.veicoli,
                {
                    rows: [this.veicoli.id, this.veicoli.targa, this.veicoli.telaio],
                    cols: ["id", "targa", "telaio"]
                }
            );

            $("#tree").fancytree({
                beforeActivate: console.log('Loading FANCYTREE'),
                checkbox: false,
                click: printData,
                source: this.veicoli
            });
         
    }).catch((e) => {
        console.log("Promise not ok " + e)
    }).finally(() => {
        console.log("promise end");
    });
})


$(function(){
    // using default options

});

$('.openModal').on('click', function(){

    listVeicoli().then((data) => {
        $('#myModal').modal({
            backdrop: 'static',
            keyboard: false
        });

        for(let elem of data){
            $('.modal-body').append(`<h2>TARGA : ${elem.targa}</h2></hr><p>TELAIO : ${elem.telaio}</p>`)
        }
         
    }).catch((e) => {
        console.log("Promise not ok " + e)
    }).finally(() => {
        console.log("promise end");
    });

})

let printData = function(event, data){
    //console.log(event);
    console.log(data);
}

/*
new HeaderTPL().loadHead();

window.addEventListener("popstate", function (e) {
    console.log(window.history.state);
})

$(window).on("hashchange", function () {
    console.log("launching hashchange");
    console.log(window.history.state);
})
*/