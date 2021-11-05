import React from 'react'
import { Button, Form } from 'react-bootstrap'
import Card from '../Card'
import { useRef } from 'react'


export default function AddNewMovieForm(props) {
    const titleInputRef=useRef();
    const movieDescRef=useRef();
    const movieYearRef=useRef();
    const movieRatingRef=useRef();
    const movieLanguageRef=useRef();


    const submitHandler=(event)=>{
        event.preventDefault();
        const titleInput=titleInputRef.current.value;
        const movieDesc=movieDescRef.current.value;
        const movieYear=movieYearRef.current.value;
        const movieRating=movieRatingRef.current.value;
        const movieLanguage=movieLanguageRef.current.value;

        const movieData={titleInput,movieDesc,movieYear,movieRating,movieLanguage};
        console.log(movieData);
    }
    return (
        <Card>
        <Form className="form" onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="formMovieTitle">
                <Form.Label>Movie Title</Form.Label>
                <Form.Control type="text" placeholder="Enter Movie Title" required ref={titleInputRef}/>
                <Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMovieDesc">
                <Form.Label>Movie Description</Form.Label>
                <Form.Control as="textarea" placeholder="Enter Movie Description" ref={movieDescRef}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMovieYear">
                <Form.Label>Movie Year</Form.Label>
                <Form.Control type="number" placeholder="Enter Year of Release" ref={movieYearRef}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMovieRating">
                <Form.Label>Movie Rating</Form.Label>
                <Form.Control type="number" placeholder="Enter Movie Rating" ref={movieRatingRef}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMovieRating">
                <Form.Label>Movie Languages</Form.Label>
                <Form.Control type="text" placeholder="Enter Movie Languages" ref={movieLanguageRef} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={()=>{console.log("Hello");}}>Save</Button>
        </Form>
    </Card>
    )
}
