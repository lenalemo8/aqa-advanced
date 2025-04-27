/**
 * Завдання 1

1. Створіть клас "Книга" (Book) з властивостями, такими як "назва", "автор" і "рік видання". 
Додайте метод до класу Book, який буде виводити повний опис книги наприклад printInfo. 
Створіть кілька об'єктів цього класу та викличте printInfo для кожного екземпляру.
2. В окремому файлі створіть клас "Електронна книга" (EBook), який буде успадковувати властивості та методи класу Book. 
Додайте до класу EBook нову властивість, наприклад, "формат файлу". Сторіть метод printInfo для EBook таким чином щоб
друкувалась вся доступна інформація про екземляр EBook (все те саме що і для Book але ще формат файлу).
Створіть інстанс (екземпляр) класу EBook та викличте метод printInfo.
3.Геттери та сеттери: Додайте геттери та сеттери для всіх властивостей класу Book та EBook. В сеттерах необхідно додати 
валідацію для переданих значень. Використовуйте їх для зміни та отримання значень властивостей.
4. Створіть статичний метод в класі Book, який буде приймати масив об'єктів(екземрлярів) книг та повертати найдавнішу книгу за роком видання. 
Викличте його в коді передавши масив книг (серед них мають бути екземляри обох класів Book та EBook).
5.Створіть статичний метод для EBook який буде приймати як аргументи екземпляр класу Book і 
формат файлу як рядок ****та повертати екземпляр класу EBook.
 */

export class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }


    static getOldestBook(books) {
        if (books.length === 0) {
            return null;
        }
        let oldestBook = books[0];
        for (let i = 1; i < books.length; i++) {
            if (books[i].year < oldestBook.year) {
                oldestBook = books[i];
            }
        }
        return oldestBook; 
    }


    printInfo() {
        console.log(`=========================`);
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Year: ${this.year}`);
    }

    set title(value) {
        if (value.length < 3) {
            console.log('The book title is too short.');
        }
        else {
            this._title = value;
        }
    }

    get title() {
        return this._title;
    }

    set author(value) {
        if (typeof value === "string") {
            this._author = value.charAt(0).toUpperCase() + value.slice(1)
        }
        else this._author = "Anonimus";
    }

    get author() {
        return this._author;
    }
    set year(value) {
        if (value > 2025) {
            console.log('Incorrect value for year');
        }
        else this._year = value
    }

    get year() {
        return this._year;
    }
}




// const book1 = new Book('The Mountain is You', 'Brianna Wiest', 2020);
// const book2 = new Book('Atomic Habits', 'James Clear ', 2018);
// const book3 = new Book('Untamed', 'Glennon Doyle', 2020);

// book1.printInfo();
// book2.printInfo();
// book3.printInfo();

// module.exports = Book;
//console.log(book2);



