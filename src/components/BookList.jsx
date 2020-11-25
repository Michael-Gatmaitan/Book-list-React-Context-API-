import React, { useContext, useEffect } from 'react';
import Book from './Book';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';
import { DBContext } from '../contexts/DBContext';

import NavBar from './NavBar';
import UserAddBook from './UserAddBook';

const BookList = () => {

  const themeContext = useContext(ThemeContext);
  const authContext = useContext(AuthContext);

  const { isLightTheme, dark, light } = themeContext;
  const theme = isLightTheme ? light : dark;

  const dbContext = useContext(DBContext);
  const { books, addBook, deleteBook } = dbContext;

  useEffect(() => {
    const body = document.body;
    body.style.backgroundColor = theme.body.bg;
  });


  return (
    <div className="booklist-container">
      <NavBar
        themeContext={themeContext}
        authContext={authContext}
      />

      <div className="booklist"
        style={{
          backgroundColor: theme.bookList.bg
        }}
      >
        {books.length !== 0 ? books.map((book, i) => (
          // No reason to use addBook here :)
          <Book
            themeContext={themeContext}
            handleBooks={{ deleteBook, book }}
            bookData={{ title: book.title, subText: book.subText }}
            key={ i }
          />
        )) : (
          <div className="no-books" style={{ textAlign: 'center' }}>No books</div>
        )}
      </div>

      <UserAddBook
        themeContext={themeContext}
        handleBooks={{ addBook }}
      />
    </div>
  )
}

export default BookList;