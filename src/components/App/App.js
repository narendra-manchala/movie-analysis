import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark', // Switching the dark mode on is a single property value change.
  },
  typography: { useNextVariants: true },
});



class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <Header />

        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
