import React from 'react';

const UserAddBook = (props) => {

  const { addBook } = props.handleBooks;

  const { isLightTheme, dark, light, toggleTheme } = props.themeContext;
  const theme = isLightTheme ? light : dark;

  return (
    <div className="addBook"
      style={{
        backgroundColor: theme.nav.bg
      }}
    >
      <form>
        <input type="box" placeholder="Title" id="input-title"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              const inputSubText = document.getElementById("input-subText");
              inputSubText.focus();
            }
          }}
        />
        <input type="box" placeholder="Sub-text" id="input-subText"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              addBook();
            }
          }}
        />

        <div id="input-error">You must fill the title or sub-text.</div>
        
        <div className="addBook-button"
          onClick={ () => addBook() }
        >
          Add Book
        </div>
      </form>
    </div>
  )
}

export default UserAddBook;