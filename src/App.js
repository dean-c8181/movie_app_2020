import React from 'react';
import axios from 'axios';
//import Movie from './Movie';
//import PropTypes from 'prop-types';

 
/*
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired
};
*/

class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const {
      data: {
        data: {movies}
      }
    } = await axios.get(
      'https://yts-proxy.now.sh/list_movies.json?sort_by=rating'
    );

    this.setState({movies, isLoading: false})
    // == this.setState({movies:movies})
  };

  componentDidMount(){
            /*setTimeout(() => {
              this.setState({isLoading: false});
            }, 6000);*/    
    this.getMovies();
  }

  render(){
    const {isLoading, movies} = this.state;
    return(      
      <div>
        {isLoading ? "Loading..." : movies.map(movie =>{
          console.log(movie);
          return(
            //<Movie id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} />
            <div>siba</div>
          );
        })}
      </div>
     );
  }
}

export default App;
 