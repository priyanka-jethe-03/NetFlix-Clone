import React, { useState,useEffect } from 'react';
import axios from './axios';
import './App.css'

function Banner(props) {
    const [movie,setMovie]=useState([]);
    const baseURL="https://image.tmdb.org/t/p/original/";
    useEffect(()=>{
        async function fetchData(){
            const request= await axios.get(props.fetchURL);
            setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length-1)]);
            return request;
        }
        fetchData();
    },[])

    function truncate(str,n){
        return str?.length > n ? str.substr(0,n-1) + "..." : str;
    }

  return (
    <header className='banner' style={{backgroundSize:"cover", 
    backgroundImage:`url(${baseURL}${movie?.backdrop_path})`, backgroundPosition: "center center"}}>
        <div className='banner-container'>
            <h1 className='banner-title'>{movie?.title || movie?.name || movie?.orignal_name}</h1>
            <div className='banner-buttons'>
                <button className='banner-button'>Play</button>
                <button className='banner-button'>My List</button>
            </div>
            <h2 className='banner-description'>{truncate(movie.overview, 150)}</h2>
        </div>
        <div className='fadebottom'></div>   
    </header>
  )
}

export default Banner