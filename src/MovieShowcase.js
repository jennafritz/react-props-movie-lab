import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    
    let mappedMovieData = movieData.map((movie, index) => {
      return <MovieCard
        key = {index}
        title = {movie.title}
        rating = {movie.IMDBRating}
        genresArr = {movie.genres}
        poster = {movie.poster}
        />
      })
      // console.log(mappedMovieData)
      return mappedMovieData
    }

  

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}

