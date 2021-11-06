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
    const moviePosterURLRef=useRef();



    const submitHandler=(event)=>{
        event.preventDefault();
        const title=titleInputRef.current.value;
        const description=movieDescRef.current.value;
        const year=movieYearRef.current.value;
        const rating=movieRatingRef.current.value;
        const languages=movieLanguageRef.current.value.split(",");
        const posterURL=moviePosterURLRef.current.value;

        const movieData={title,description,year,rating,languages,posterURL};
        props.saveMovieData(movieData);
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
            <Form.Group className="mb-3" controlId="formMovieURL">
                <Form.Label>Movie Poster URL</Form.Label>
                <Form.Control as="textarea" placeholder="Enter Movie Poster URL" ref={moviePosterURLRef}/>
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
            <Button variant="primary" type="submit" >Save</Button>
        </Form>
    </Card>
    )
}
