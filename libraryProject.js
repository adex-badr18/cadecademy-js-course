class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    // getter methods
    get title() {
        return this._title;
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
        return Math.round(averageRating * 10) / 10;
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

class Book extends Media {
    constructor(author, title, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }

    // getter methods
    get author() {
        return this._author;
    }

    get pages() {
        return this._pages;
    }
}

const newBook = new Book('John', 'New Book', 34);
newBook.addRating(4);
newBook.addRating(5);
newBook.addRating(3);
// console.log(newBook.getAverageRating());

newBook.toggleCheckOutStatus();
newBook.toggleCheckOutStatus();
// console.log(newBook._isCheckedOut);


class Movie extends Media {
    constructor(director, title, runtime) {
        super(title);
        this._director = director;
        this._runtime = runtime;
    }

    // getters
    get director() {
        return this._director;
    }

    get runtime() {
        return this._runtime;
    }
}

const newMovie = new Movie('John', 'New Movie', 60);
newMovie.addRating(5);
newMovie.addRating(5);
newMovie.addRating(4);
console.log(newMovie.getAverageRating());

newMovie.toggleCheckOutStatus();
console.log(newMovie._isCheckedOut);


class CD {
    constructor(artist, title, songs) {
        this._artist = artist;
        this._title = title;
        this._songs = songs;
        this._isCheckedOut = false;
        this._ratings = []
    }

    // getters
    get artist() {
        return this._artist;
    }

    get title() {
        return this._title;
    }

    get songs() {
        return this._songs;
    }

    get isCheckedOut() {
        return this._isCheckedOut;
    }

    get ratings() {
        return this._ratings;
    }

    // instance methods
    getAverageRating() {
        const sum = this._ratings.reduce((accumulator, currentValue) => accumulator + currentValue)
        const ratingsLength = this._ratings.length;
        const averageRating = sum / ratingsLength;
        return Math.round(averageRating * 10) / 10;
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

const newCD = new CD('John', 'New Movie', 60);
newCD.addRating(5);
newCD.addRating(5);
newCD.addRating(5);
// console.log(newCD.getAverageRating());

newCD.toggleCheckOutStatus();
// console.log(newCD._isCheckedOut);