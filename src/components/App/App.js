import React, { Component } from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import blue from '@material-ui/core/colors/blue';
import deepOrange from '@material-ui/core/colors/deepOrange';
import green from '@material-ui/core/colors/green';
import {
  createMuiTheme,
  createStyles,
  MuiThemeProvider,
  Theme,
  WithStyles,
  withStyles
} from '@material-ui/core/styles';
import Axios from 'axios';

import { MOVIE_DATA_URL } from "../../urls";
import Header from '../Header/Header';
import MovieBrowse from '../MovieBrowse/MovieBrowse'


const muiTheme = {
  light: createMuiTheme({
    palette: {
      primary: 'darkblue',
      type: 'light'
    },
    typography: {
      useNextVariants: true
    }
  }),
  dark: createMuiTheme({
    palette: {
      primary: 'darkblue',
      type: 'dark'
    },
    typography: {
      useNextVariants: true
    }
  })
};

const styles = (theme) => ({})


class App extends Component {

  state = {
    isDarkTheme: true,
    movieData: null
  }

  componentDidMount() {
    Axios.get(MOVIE_DATA_URL)
      .then(res => this.setState({ movieData: res.data }, () => console.log(res)))
  }

  handleToggleTheme = () => {
    this.setState({
      isDarkTheme: !this.state.isDarkTheme
    });
  };

  render() {
    const { isDarkTheme, movieData } = this.state
    return (
      <MuiThemeProvider theme={isDarkTheme ? muiTheme.dark : muiTheme.light}>
        <CssBaseline />
        <Header darkTheme={isDarkTheme} onClick={this.handleToggleTheme} />
        {
          movieData && <MovieBrowse movieData={movieData} />
        }
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
