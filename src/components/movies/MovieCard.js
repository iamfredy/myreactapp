import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import cssC from '../../css/MovieCard.module.css'
import Card from '../Card';

export default function MovieCard(props) {
    const data=props.data;
    return (

        <Card>
            <img className={"card-img-top "+cssC.mvThumbImg} src={data.img_url} alt={data.title}/>
            <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{data.description}</h6>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Year:{data.year}</li>
                    <li className="list-group-item">Rating:<p className="badge-warning">{data.users_rating}</p></li>
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
