
var faker = require('faker')
faker.locale = 'it';

function generateData() {
    const data = {
        persone: [],
        veicoli: [],
        notizie: []
    };

    // Crea 1000 persone
    for (let i = 0; i < 1000; i++) {
        let persona = {
            id: i,
            nome: faker.name.firstName(),
            cognome: faker.name.lastName(),
            codiceFiscale: faker.random.alphaNumeric(16).toUpperCase(),
            partitaIva: faker.random.number(),
            luogoNascita: faker.address.city(),
            dataNascita: faker.date.past()
        };
        data.persone.push(persona);
    }

    // Crea 1000 veicoli
    for (let i = 0; i < 1000; i++) {
        let veicolo = {
            id: i,
            targa: faker.random.alphaNumeric(8).toUpperCase(),
            telaio: faker.random.alphaNumeric(8).toUpperCase(),
            conducente: faker.name.firstName()
        };
        data.veicoli.push(veicolo);
    }

    // Crea 5 notizie
    for (let i = 0; i < 5; i++) {
        let notizia = {
            id: i,
            titolo: faker.random.words(2),
            testo: faker.random.words(30),
            dataInizio: faker.date.past(),
            dataFine: faker.date.past()
        }
        data.notizie.push(notizia);
    }

    return data;
}

module.exports = generateData;
