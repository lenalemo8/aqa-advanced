//class Ebook

import { Book } from './Book.js';

export class Ebook extends Book {
	constructor(title, author, year, fileFormat) {
		super(title, author, year);
		this.fileFormat = fileFormat;
	}

	set fileFormat(value) {
		if (!value || typeof value !== 'string') {
			throw new Error('The file format must be a non-empty string.');
		}
		this._fileFormat = value;
	}

	get fileFormat() {
		return this._fileFormat;
	}

	static createEBookFromBook(book, fileFormat) {
		return new Ebook(book.title, book.author, book.year, fileFormat);
	}

	printInfo() {
		super.printInfo();
		console.log('-------------------------');
		console.log(`File format: ${this.fileFormat}`);
		console.log('-------------------------');
	}
}
