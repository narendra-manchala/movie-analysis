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
import MOVIE_DATA from "../../data";
import Header from '../Header/Header';
import MovieBrowse from '../MovieBrowse/MovieBrowse'
import sortBy from 'lodash/sortBy'


const muiTheme = {
  light: createMuiTheme({
    palette: {
      primary: {
        main: '#002054'
      },
      type: 'light'
    },
    typography: {
      useNextVariants: true
    }
  }),
  dark: createMuiTheme({
    palette: {
      primary: {
        main: '#002054'
      },
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
    isDarkTheme: false,
    movieData: null
  }

  componentDidMount() {
    // CORS -- error while fetching data so commented it out
    // Axios.get(MOVIE_DATA_URL)
    //   .then(res => this.setState({ movieData: res.data }, () => console.log(res)))
    this.setState({movieData: MOVIE_DATA})
  }

  handleToggleTheme = () => {
    this.setState({
      isDarkTheme: !this.state.isDarkTheme
    });
  };

  sortValue = value => {
    let movieData = this.state.movieData

    if (value === 'az') {
      let sortedObj = sortBy(movieData, 'movie_title')
      this.setState({movieData: sortedObj})
    }
    if (value === 'za') {
      let sortedObj = sortBy(movieData, 'movie_title')
      this.setState({movieData: sortedObj.reverse()})
    }
  }

  render() {
    const { isDarkTheme, movieData } = this.state
    return (
      <MuiThemeProvider theme={isDarkTheme ? muiTheme.dark : muiTheme.light}>
        <CssBaseline />
        <Header darkTheme={isDarkTheme} onClick={this.handleToggleTheme} />
        {
          movieData && <MovieBrowse movieData={movieData} getSortValue={this.sortValue} />
        }
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
