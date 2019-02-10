import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Tooltip } from '@material-ui/core';

const styles = theme => ({
  card: {
    width: 700,
    margin: 15,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class MovieItem extends React.Component {
  state = {
    expanded: false,
    fav: false
   };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes, movie } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Title" className={classes.avatar}>
              {movie.movie_title[0]}
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={movie.movie_title}
          subheader={`${movie.title_year} | ${movie.genres.split('|').join(', ')}`}
        />
        {/* <CardMedia
        className={classes.media}
      //   image="/static/images/cards/paella.jpg"
        title="Paella dish"
      /> */}
        <CardContent>
          <Typography component="p">
            <span style={{
              fontStyle: 'bold',
              fontSize: '17px',
            }}>
              Actors: {' '}
            </span>
            {movie.actor_1_name}, {movie.actor_2_name}
          </Typography>
          <Typography component="p">
            <span style={{
              fontStyle: 'bold',
              fontSize: '17px',
            }}>
              Directed by: {' '}
            </span>
            {movie.director_name}
          </Typography>

        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
        <IconButton aria-label="Add to favorites" onClick={() => this.setState({fav: !this.state.fav})}>
            <FavoriteIcon color={this.state.fav ? 'secondary': 'default'} />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography component='h2'>Movie Details:</Typography>
            <Typography component="p">
              <span style={{
                fontStyle: 'bold',
                fontSize: '17px',
              }}>
                Country:  {' '}
              </span>
              {movie.country}
            </Typography>
            <Typography component="p">
              <span style={{
                fontStyle: 'bold',
                fontSize: '17px',
              }}>
                Budget:  {' '}
              </span>{movie.budget}
            </Typography>
            <Typography component="p">
              <span style={{
                fontStyle: 'bold',
                fontSize: '17px',
              }}>
                Rating:  {' '}
              </span>{movie.content_rating}
            </Typography>
            <Typography component="p">
              <span style={{
                fontStyle: 'bold',
                fontSize: '17px',
              }}>
                Keywords:  {' '}
              </span>
              {movie.plot_keywords.split('|').join(', ')}
            </Typography>
            <Tooltip title='Goto IMDb'>
              <a src={movie.movie_imdb_link} target='_blank'>
                <img src='/IMDb-icon.png' width='50px' />
              </a>
            </Tooltip>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

MovieItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MovieItem);
