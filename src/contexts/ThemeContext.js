import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    light: {
      nav: { bg: '#E5E5E5', txtClr: '#161616' },
      toggleBody: { bg: '#161616', toggleCirc: '#fff' },
      body: { bg: '#252525' },
      bookList: { bg: '#fff' },
      card: { bg: '#252525', txtClr: '#fff' },
    },
    
    dark: {
      nav: { bg: '#161616', txtClr: '#fff' },
      toggleBody: { bg: '#fff', toggleCirc: '#161616' },
      body: { bg: '#fff' },
      bookList: { bg: '#252525' },
      card: { bg: '#fff', txtClr: '#161616' },
    },
  }

  toggleTheme = () => {
    this.setState({ isLightTheme: !this.state.isLightTheme });
  }

  render() {
    return (
      <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;