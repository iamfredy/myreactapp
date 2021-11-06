import axios from 'axios';
import React from 'react'
import MovieCard from '../components/movies/MovieCard';
import { useState,useEffect } from 'react';
import PageLoading from '../components/PageLoading';

export default function AllMoviesPage() {
  const [loadedMovies,setLoadedMovies]=useState([]);
  const [isPageLoading,setPageLoading]=useState(true);

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://myreactapp-6da5c-default-rtdb.firebaseio.com/movies.json',
    }).then((response)=>{
      var movies=response.data;  
      var movieList=[]; 
      for(const key in movies){
          const movie={
            key,
            ...movies[key]
          }
          movieList.push(movie)
      }

      setPageLoading(false);
      setLoadedMovies(movieList);
    });
  }, [isPageLoading])  



    if(isPageLoading){
      return (
        <PageLoading message="Page Loading... Please wait!"></PageLoading>
      )
    }
    else{
      return (
        <div>
            <h1>All Movies</h1>
            {loadedMovies.map((movie)=>{
                // return <MovieCard props={movie}></MovieCard>
                return <MovieCard key={movie.title} data={movie}></MovieCard>
            })}
        </div>
      )
    }
}
