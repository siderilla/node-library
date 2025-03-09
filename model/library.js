// importo la classe creata in book.js

import { PhysicalBook } from "./book.js";

// definisce ed esporta una classe Library
export default class Library {

// passa i parametri, un nome e due array
	constructor (name, books = [], users = []) {
		this.name = name;
		this.books = books;
		this.users = users;
	}

// il getter è un metodo speciale - legge il valore di una proprietà
// leggo il valore lenght della proprietà books: dunque il numero di libri presenti nella library
	get booksNumber() {
		return this.books.length;
	}

// leggo il numero di utenti registrati nella library
	get usersNumber() {
		return this.users.length;
	}

// metodo che pusha un libro (passato come parametro) all'array della lista dei libri
	addBook(book) {
		this.books.push(book);
	}

// con la funzione filter posso rimuovere un determinato elemento dall'array in lettura via arrow function
	removeBook(bookToRemove) {
		this.books = this.books.filter(book => book.isbn !== bookToRemove.isbn);
	}

// con la funzione find verifica se il libro è presente oppure no via booleano
// se il libro esiste, controlla se è stato preso in prestito
	isBookAvailable(isbn) {
		const book = this.books.find(book => book.isbn === isbn);
		if (!book) {
			return false;
		} else {
			if (!book.isBorrowed) {
				return true;
			} else {
				return false;
			}
		}
	}

// semplice funzione push per aggiungere nuovo utente
	addUser(user) {
		this.users.push(user);
	}

// semplice funzione filter per rimuovere un utente
	removeUser(userToRemove) {
		this.users = this.users.filter(user => user.id !== userToRemove.id);
	}

// semplice funzione forEach che fa una lista di tutti i libri presenti
    listBooks(){
        this.books.forEach(book => console.log(book.toString()));
    } 

// METODO ALTERNATIVO: semplice ciclo for che stampa tutti gli elementi presenti nell'array utenti
	listUsers(){
        for (const user of this.users) {
            console.log(user.toString());
        }
	}

// verifico se il libro è disponibile nel formato fisico (ergo se è un'istanza di PhysicalBook)
// imposto dunque il libro in prestito con un booleano
	borrowBook(user, book) {
		const isAvailable = this.isBookAvailable(book.isbn);
		if(!isAvailable) {
			console.log("Not available")
		} else {
			user.borrowBook(book);
			const isPhysical = book instanceof PhysicalBook;
			if (isPhysical) {
				book.isBorrowed = true;
			}
		}
	}

// se il libro è un'istanza di PhysicalBook allora imposto isBorrowed = false easypeasy
	returnBook(user, book) {
		user.returnBook(book);
		const isPhysical = book instanceof PhysicalBook;
		if (isPhysical) {
			book.isBorrowed = false;
		}
	}

// infine stampa una stringa con tutti i parametri
	toString() {
        return `Name: ${this.name}\n` + 
               `Books number: ${this.booksNumber}\n` +
               `User number: ${this.usersNumber}`
		}
}
