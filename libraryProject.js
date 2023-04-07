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
}