import { Book } from './Book.js';
import { Ebook } from './Ebook.js';

// Нові екземпляри

const book1 = new Book('The Mountain is You', 'Brianna Wiest', 2020);
const book2 = new Book('Atomic Habits', 'james Clear ', 2018);
const book3 = new Book('Untamed', 'glennon Doyle', 2019);
const myBook = new Ebook('Daring Greatly', 'Brene Brown', 2012, 'EPUB');

const books = [book1, book2, book3, myBook];
// Виклик методів 

book1.printInfo();
book2.printInfo();
book3.printInfo();
myBook.printInfo();

const oldestBook = Book.getOldestBook(books);

if (oldestBook) {
    console.log('###################################');
    console.log('The oldest book from the list:');
    oldestBook.printInfo();
    console.log('###################################');
} else {
    console.log('No books in the list');
}

// Зміна через set 

book1.author = 'camila Cors';
myBook.fileFormat = 'PDF';

book1.printInfo();
myBook.printInfo();

console.log('Create Ebook from Book');
const newEbook = Ebook.createEBookFromBook(book1, '****');
newEbook.printInfo();




// const myBook = new Ebook('Daring Greatly', 'Brene Brown', '2012','EPUB');
// myBook.printInfo();

// book1.title = 'glgkhgligh'
// console.log(book1.title);