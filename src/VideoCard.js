
import './VideoCard.css'
import TextTruncate from 'react-text-truncate'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MovieDetails from './MovieDetails'

import StarIcon from '@mui/icons-material/Star';
const base_url="https://image.tmdb.org/t/p/original/";

function VideoCard({movie}) {
  return (
    <div className='VideoCard'>
        <img src={`${base_url}${movie.backdrop_path || movie.poster_path}`} alt='Movie Poster' />
       
        <TextTruncate
    line={2}
    element="p"
    truncateText="…"
    text={movie.overview}
    // textTruncateChild={<a href="#">Read More</a>}
/>





<Router>

<Link path= "/MovieDetails">{MovieDetails}</Link>

</Router>






    {/* <p>{movie.overview }</p> */}
    <h2>{movie.title || movie.name}</h2>


    <p>
    {/* {movie.media_type && movie.media_type}-- */}
    Release Date : {movie.release_date || movie.first_air_date}</p>
    <p>
    
       <StarIcon  style={{ color: "yellow" }}/>{movie.vote_average}</p>
    </div>
  )
}

export default VideoCard;