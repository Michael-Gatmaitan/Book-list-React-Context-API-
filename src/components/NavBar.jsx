import React from 'react';

const NavBar = (props) => {

  const { isLightTheme, dark, light, toggleTheme } = props.themeContext;
  const theme = isLightTheme ? light : dark;

  let { isAuthenticated, toggleAuth } = props.authContext;

  return (
    <nav
      style={{
        backgroundColor: theme.nav.bg,
        color: theme.nav.txtClr
      }}
    >
      <div className="toggle-theme"
        onClick={ toggleTheme }
        style={{ backgroundColor: theme.toggleBody.bg }}
      >
        <div className="circle-toggler"
          style={{
            backgroundColor: theme.toggleBody.toggleCirc,
            left: isLightTheme ? "3px" : "calc(100% - calc(18px + 3px))"
          }}
        ></div>
      </div>

      <div className="project-title">
        Book List
      </div>

      <div className="isAuth" onClick={ toggleAuth }>
        { isAuthenticated ? 'Logged in' : 'Logged out' }
      </div>

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default NavBar;