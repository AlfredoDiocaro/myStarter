/* src/app.js */

// Styles
require('normalize.css');
import './assets/styles/_app.scss';
import 'bootstrap/dist/css/bootstrap.css'

import { HeaderTPL } from './assets/templates/header'
import 'bootstrap'


$(window).on("load",function(){
    console.log("loading window");
})

new HeaderTPL().loadHead();

window.addEventListener("popstate", function (e) {
    console.log(window.history.state);
})

$(window).on("hashchange", function () {
    console.log("launching hashchange");
    console.log(window.history.state);
})