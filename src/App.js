import React from 'react';
import BookList from './components/BookList';
import ThemeContextProvider from './contexts/ThemeContext';
import AuthContextProvider from './contexts/AuthContext';
import DBContextProvider from './contexts/DBContext';

function App() {
  return (
    <div className="app">
      <ThemeContextProvider>
        <AuthContextProvider>

          <DBContextProvider>
            <BookList />
          </DBContextProvider>
          
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
