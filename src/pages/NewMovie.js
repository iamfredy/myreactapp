import axios from 'axios';
import React from 'react'
import { useHistory } from 'react-router';
import AddNewMovieForm from '../components/movies/AddNewMovieForm'

export default function AddNewMoviePage() {
  const history=useHistory();
    const addMovieToDB=(movieData)=>{
        console.log(movieData);
        axios({
            method: 'post',
            url: 'https://myreactapp-6da5c-default-rtdb.firebaseio.com/movies.json',
            data: movieData
          }).then((response)=>{
            history.replace('/');
          });
    }
    return (
        <div>
            <h1>New Movie Page</h1>
            <AddNewMovieForm saveMovieData={addMovieToDB}/>
        </div>
    )
}
