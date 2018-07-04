import React, { Component } from 'react';
import BooksShow from './components/books_show';
import BookNew from './components/book_new';
import styles from './style/style.css'




class App extends Component {
  render() {
    return (
      <div className="App">
           <div className="header">
                 <img src="http://www.cornwallpubliclibrary.org/wp-content/uploads/2014/04/Cornwall-Public-Library-Kids-Teens-Header.jpg" />
           </div>
           <div className="new-book-btn">
               <BookNew title='New Book' type='Add' />
           </div>
            <BooksShow />
       </div>
    );
  }
}

export default App;
