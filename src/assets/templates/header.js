import{ HomeSect } from './homeSect'
import { VeicoliSect } from './veicoliSect'

export class HeaderTPL {
    constructor() {
        console.log("Loading Header");
    }
    loadHead() {
        let date = new Date();
        $('body').prepend(`
        <nav class="navbar navbar-expand-lg navbar-light bg-error">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                <a class="nav-item nav-link active" href="JavaScript:void(0);">Home <span class="sr-only">(current)</span></a>
                <a class="nav-item nav-link persone" href="JavaScript:void(0);">Pagina get persone</a>
                <a class="nav-item nav-link veicoli" href="JavaScript:void(0);">Veicoli</a>
                <b class="giveDate nav-item nav-link disabled">Tell me Date</b>
                <b class="nav-item disabled nav-link">${date}</b>
                <b class="year nav-item disabled nav-link"></b>
                </div>
            </div>
        </nav>
        `);

        $('.persone').on('click',function(){
            let home = new HomeSect();
            home.loadHome();
        });

        $('.giveDate').on('click',function(){
            console.log(date);
            $('.year').text(new Date().getFullYear());
        });

        $('.veicoli').on('click',function(){
            let veic = new VeicoliSect();
            veic.loadVeic();
        });
    }
}
