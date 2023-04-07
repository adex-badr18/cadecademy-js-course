class Book {
    constructor(author, title, pages) {
        this._author = author;
        this._title = title;
        this._pages = pages;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    // getter methods
    get author() {
        return this._author;
    }

    get title() {
        return this._title;
    }

    get pages() {
        return this._pages;
    }

    get ratings() {
        return this._ratings;
    }

    get isCheckedOut() {
        return this._isCheckedOut;
    }

    // instance methods
    getAverageRating() {
        const sum = this._ratings.reduce((accumulator, currentValue) => accumulator + currentValue)
        const ratingsLength = this._ratings.length;
        const averageRating = sum / ratingsLength;
        return averageRating;
    }

    addRating(newRating) {
        if (newRating > 5 || newRating < 1) {
            console.log("Give a rating between 1 and 5.")
        } else if (typeof newRating !== 'number') {
            console.log('Numeric value expected');
        }

        this._ratings.push(newRating);
    }

    toggleCheckOutStatus() {
        this._isCheckedOut = !this._isCheckedOut;
    }
}

const newBook = new Book('John', 'New Book', 34);
newBook.addRating(4);
newBook.addRating(5);
newBook.addRating(3);
console.log(newBook.getAverageRating());

newBook.toggleCheckOutStatus();
newBook.toggleCheckOutStatus();
console.log(newBook._isCheckedOut);