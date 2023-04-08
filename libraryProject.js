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

    // setter method
    set isCheckedOut(checkOutStatus) {
        this._isCheckedOut = checkOutStatus;
    }

    // instance methods
    getAverageRating() {
        const ratingsSum = this._ratings.reduce((accumulator, currentValue) => accumulator + currentValue)
        const ratingsLength = this._ratings.length;
        const averageRating = ratingsSum / ratingsLength;
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

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(3);
// console.log(historyOfEverything.getAverageRating());

historyOfEverything.toggleCheckOutStatus();
historyOfEverything.toggleCheckOutStatus();
// console.log(historyOfEverything._isCheckedOut);


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

const speed = new Movie('Jan den bont', 'Speed', 116);
speed.addRating(5);
speed.addRating(5);
speed.addRating(4);
// console.log(speed.getAverageRating());

speed.toggleCheckOutStatus();
// console.log(speed._isCheckedOut);


class CD extends Media {
    constructor(artist, title, songs) {
        super(title);
        this._artist = artist;
        this._songs = songs;
    }

    // getters
    get artist() {
        return this._artist;
    }

    get songs() {
        return this._songs;
    }

    // instance methods
    shuffle() {
        // sorts the songs by randomly manipulating the sort order
        return this._songs.sort(() => Math.floor(Math.random() * (1 - (-1) + 1)) + (-1));
    }
}

const newCD = new CD('John', 'New Movie', ['Al-Qunut', 'Jamzuri', 'Tuhfatul Atfaal']);
newCD.addRating(5);
newCD.addRating(5);
newCD.addRating(5);
console.log(newCD.getAverageRating());

newCD.toggleCheckOutStatus();
console.log(newCD._isCheckedOut);

console.log(newCD.songs);

console.log(newCD.shuffle());


// Catalog class that holds all media items in the library
// class Catalog {
//     constructor() { }
// }