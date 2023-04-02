import React, { useEffect, useState } from 'react'
import axios from './axios';
import './App.css';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';

function Row(props) {
    const [movies,setMovies] =useState([]);
    const [trailerUrl,setTrailerUrl]=useState("");
    const baseURL="https://image.tmdb.org/t/p/original/";
    useEffect(()=>{
        async function fetchData(){
            const request= await axios.get(props.fetchURL);
            setMovies(request.data.results);
            return request;
        }
       fetchData() 
    },[props.fetchURL])
    console.log(movies)
    const opts ={
      height:"390",
      width:"100%",
      playerVars: {
        autoplay: 1,
      }
    }
    function handleClick(movie){
      console.log(movie)
      if (trailerUrl)
      {
        setTrailerUrl("");
      }else{
        movieTrailer(movie)
        .then(url=>{
          const urlParams =new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        }).catch(error=>console.log(error))

      }
    }
    
  return (
    <div className='row'>
        <h2>{props.title}</h2>
                     {/* rows--posters */}
          <div className='row-posters'>
            {
              movies.map(movie=>(
               <img key={movie.id}src={`${baseURL}${movie.poster_path}`} alt={movie.name} onClick={()=>handleClick(movie?.title || movie?.name || movie?.orignal_name)}/>
              ))
            }
          </div>
          {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}> </Youtube>}
    </div>
  )
}

export default Row