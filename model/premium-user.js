import User from "./user.js";

export default class PremiumUser extends User {

    constructor(id, name, borrowedBooks = []) {
        super(id, name, borrowedBooks);
        this.premiumLimit = User.MAX_BORROW_LIMIT;
    }

// in app.js questo metodo verrà chiamato per impostare il numero di libri in prestito su un utente specifico
    extendBorrowLimit(newLimit){
        this.premiumLimit = newLimit;
    }

    borrowBook(book){
        if (this.borrowedBooksNumber < this.premiumLimit) {
            this.borrowedBooks.push(book);
        } else {
            console.log('superato il limite, passa a premium!!');
        }
    }

    toString(){
        return super.toString() + '\n' +
               `Borrow Limit: ${this.premiumLimit}`
    }

}