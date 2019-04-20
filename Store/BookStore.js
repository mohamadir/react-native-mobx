import {types} from 'mobx-state-tree'

 const Book = types.model('Book',{
     title: types.string,
     author: types.string,
     read: false
 })

 const BookStore = types.model('Books',{
     books: types.array(Book)
 })
 .actions(self => ({
     addBook(book){
       self.books.push(book)  
     },
     remove(title){
        self.books.map((book,i)=>{
            if(book.title === title)
                self.books.remove(i)
        }) 
      }
 }))
 .create({
     books: [
         {author: 'book 1', title: 'Book ONE ', read: false},
         {author: 'book 2', title: 'Book TWO ', read: false},
         {author: 'book 3', title: 'Book THREE ', read: false},
        ]
 })



 export default BookStore