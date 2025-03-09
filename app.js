// importazione delle dipendenze
// question è la funzione del modulo readline-sync che permette di leggere input dall'utente in modo sincrono
import { question } from 'readline-sync';
import Library from './model/library.js'
import User from './model/user.js'
import PremiumUser from './model/premium-user.js'
import { PhysicalBook } from "./model/book.js";

// crea l'istanza library
const library = new Library('Berio')
console.log('Benvenuti in super library manager 4.2\n\n')

// loop principale del programma, che mantiene il programma in esecuzione finché l'utente non sceglie di uscire
while(true){

// menù delle funzionalità
    const introString = "Ecco le funzionalità:\n" +
                    "1)Aggiungi utente\n" +
                    "2)Aggiungi libro\n" +
                    "3)Lista utenti\n" +
                    "4)Aggiungi libri\n" +
                    "5)Presta libro\n" +
                    "6)Esci\n" +
                    "Inserisci il numero della funzionalità desiderata\n"
// e le stampa
    const answer = question(introString)

// gestione scelta utente con la funzione switch
// nel caso di 1, chiama funzione x, etc...
    switch (answer) {
        case '1':
            addUser()
            break;
        case '2':
            addBook()
            break;
        case '3':
            listUsers()
            break;
        case '4':
            listBooks()
            break;
        case '5':
            borrowBook()
            break;
        case '6':
            process.exit(0)
            break;
        default:
            console.log('Scelta non valida')
            break;
    }


}

// di seguito tutte le funzioni disponibili che possono essere chiamate
function addUser(){

    const newUser = createUser();

    if(newUser){
        console.log('Complimenti, operazione riuscita!')
        library.addUser(newUser);
    } else {
        console.log('Utente non creato')
    }

}

function createUser(){
    const name = question("Inserire il nome dell'utente\n");
    if(!name){
        return null;
    }
    const id = library.usersNumber + '';

    let newUser;

    const answer = question("Vuoi creare un utente Premium? (Y)es (N)o\n");
    if(answer.toUpperCase() === 'Y'){
        newUser = new PremiumUser(id, name);
    } else {
        newUser = new User(id, name);
    }

    return newUser;
}

function addBook(){
    const newBook = createBook();

    if(newBook){
        console.log('Complimenti, operazione riuscita!!!')
        library.addBook(newBook);
    } else {
        console.log('Libro non creato')
    }
}

function createBook(){
    const isbn = question("Inserire l'isbn\n");
    const title = question("Inserire il titolo\n");
    const author = question("Inserire l'autore\n");
    const shelf= question("Inserire lo scaffale\n");


    if(isbn && title && author && shelf){
        const newBook = new PhysicalBook(isbn, title, author, shelf);
        return newBook;
    }

    return null;
}

function listUsers(){

    for (const user of library.users) {
        console.log(user)
        console.log(user.toString() + '\n\n')
    }


}

function listBooks(){
    
}

function borrowBook(){
    const isbn = question("Inserire l'isbn del  libro\n");
    const id = question("Inserire l'id dell'utente\n");

    if (isbn && id) {
        const result = library.borrowBoowWithIdAndIsbn(id, isbn)
        if (result) {
            console.log('Tutto ok!')
        } else {
            console.log('sticazzi 1')
        }
    } else {
        console.log('sticazzi 2')
    }
}