export default class User {

// definisco un limite di libri in prestito con una static
// è buona pratica nominare le static in MAIUSCOLO
    static MAX_BORROW_LIMIT = 3;

// parametri dell'istanza: id, nome, array di libri in prestito
    constructor(id, name, borrowedBooks = []) {
        this.name = name;
        this.id = id;
        this.borrowedBooks = borrowedBooks;
    }

// verifico il numero di libri in prestito con un getter della lenght dell'array
    get borrowedBooksNumber(){
        return this.borrowedBooks.length;
    }

// se il numero di libri è minore del limite impostato associato al nome utente
// allora posso dare in prestito un altro libro, ergo pusho il nome del nuovo libro da dare in prestito
// altrimenti logga un messaggio
	borrowBook(book){
        if (this.borrowedBooksNumber < User.MAX_BORROW_LIMIT) {
            this.borrowedBooks.push(book);
        } else {
            console.log('superato il limite, passa a premium!!');
        }
    }

// metodo restituzione libro con filter
// per ogni libro borrowed nell'array borrowedBooks verifica se l'isbn del libro (borrowed.isbn) è diverso dall'isbn del libro che si vuole restituire books.isbn
// se gli isbn corrispondono allora rimuovi (filter) il libro dall'array dei libri in prestito - poiché è stato restituito
    returnBook(book){
        this.borrowedBooks = this.borrowedBooks.filter(borrowed => borrowed.isbn !== book.isbn)
    }

    toString(){
        return `ID: ${this.id}\n` + 
               `Name: ${this.name}\n` +
               `Borrowed Number: ${this.borrowedBooksNumber}`
    }

}