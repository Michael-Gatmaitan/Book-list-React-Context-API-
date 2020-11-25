import React from 'react';

const Book = (props) => {

  const { isLightTheme, dark, light, toggleTheme } = props.themeContext;
  const theme = isLightTheme ? light : dark;

  const { deleteBook, book } = props.handleBooks;
  const { title, subText } = props.bookData;
  // console.log(i);
  return (
    <div className="book"
      style={{
        backgroundColor: theme.card.bg,
        color: theme.card.txtClr
      }}
    >
      <div className="title">{title}</div>
      <div className="sub-text">
        <div>{subText}</div>
      </div>

      <div className="buttons">
        
      <div className="delete"
        onClick={ () => deleteBook(book) }
      >
          Delete
        </div>

      </div>
    </div>
  )
}

export default Book;