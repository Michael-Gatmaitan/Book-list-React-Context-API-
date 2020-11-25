import React, { Component, createContext } from 'react';

export const DBContext = createContext();

class DBContextProvider extends Component {

  state = {
    books: [],
  }

  addBook = () => {

    const inputTitle = document.getElementById("input-title");
    const inputSubText = document.getElementById("input-subText");

    const showErr = () => {
      const inputErr = document.getElementById("input-error");

      inputErr.style.opacity = 1;

      setTimeout(() => {
        inputErr.style.opacity = 0;
      }, 2000)
    }
    if (inputTitle.value !== "" && inputSubText.value !== "") {
      console.log("Passed");
    } else {
      return showErr();
    }

    let books = [...this.state.books];
    let prefId = books.length === 0 ? 0 : books[books.length - 1].id + 1;

    books.push({
      title: inputTitle.value,
      subText: inputSubText.value,
      id: prefId,
    });
    this.setState({ books });

    inputTitle.value = "";
    inputSubText.value = "";
  }

  deleteBook = (cBook) => {
    let books = [...this.state.books];
    let index = books.indexOf(cBook);
    books = books.filter(book => book !== books[index]);
    this.setState({ books });
  }

  render() {
    return (
      <DBContext.Provider value={{...this.state, addBook: this.addBook, deleteBook: this.deleteBook }}>
        {this.props.children}
      </DBContext.Provider>
    )
  }
}

export default DBContextProvider;