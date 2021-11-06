import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import cssC from '../../css/MovieCard.module.css'
import Card from '../Card';
import imgNotFound from '../../images/image_not_found.png';

export default function MovieCard(props) {
    const data=props.data;
    // const movieData={title,description,year,rating,languages,posterURL};
    
    return (
        
        <Card>
            <img className={"card-img-top "+cssC.mvThumbImg} src={data.posterURL===""?imgNotFound:data.posterURL} alt={data.title}/>
            <div className="card-body">
                <h5 className="card-title text-primary">{data.title}</h5>
                <h6 className="card-subtitle mb-2 text-info">{data.description}</h6>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Year:{data.year}</li>
                    <li className="list-group-item">Rating:<p className="badge-warning">{data.rating}</p></li>
                    <li className="list-group-item">Languages:
                    <p>
                        {data.languages.map((language)=>{
                            return <span key={language} className={"badge "+cssC.langBadge}>{language}</span>
                        })}
                    </p>
                    </li>
                </ul>                
            </div>
        </Card>
    )
}
