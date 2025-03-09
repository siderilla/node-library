// export serve a esportare la classe definita per utilizzarla in altri moduli
// creo una classe
export class Book {

// inizializzo la classe con constructor
// gli passo i parametri con this.
	constructor(isbn, title, author) {
		this.author = author;
		this.title = title;
		this.isbn = isbn;
	}

// stampo i dati assegnati al mio oggetto
	toString() {
		return  `ISBN: ${this.isbn}\n` +
				`Titolo: ${this.title}\n` +
				`Autore: ${this.author}`
	}

}

// con questo posso poi creare un'istanza e creare nuovi oggetti in relazione alla classe dichiarata (book in questo caso)



// sottoclasse che si estende da quella genitore
export class EBook extends Book {

// con super chiamo i parametri della classe genitore + quelli della classe estesa:
	constructor(isbn, title, author, fileFormat) {
		super(isbn, title, author);
		this.fileformat = fileFormat;
	}

	toString() {
		return super.toString() + `\n` +
				`Format: ${this.fileFormat}`
	}
}

export class PhysicalBook extends Book {
	constructor(isbn, title, author, shelfLocation) {
		super(isbn, title, author);
		this.shelfLocation = shelfLocation;
		this.isBorrowed = false;
	}

	toString() {
		return super.toString() + `\n` +
				`Shelf: ${this.shelfLocation}\n` +
				`Is borrowed: ${this.isBorrowed}`
	}
}