import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import cssC from '../css/MovieCard.module.css'

export default function MovieCard(props) {
    const data=props.data;
    return (
        <div className={"card "+cssC.m20pcl+" "+cssC.m20pcr+" "+cssC.m20pcb}>
            <img class={"card-img-top "+cssC.mvThumbImg} src={data.img_url} alt={data.title}/>
            <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{data.description}</h6>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Year:{data.year}</li>
                    <li className="list-group-item">Rating:<p className="badge-warning">{data.users_rating}</p></li>
                    <li className="list-group-item">Languages:
                    <p>
                        {data.languages.map((language)=>{
                            return <span className={"badge "+cssC.langBadge}>{language}</span>
                        })}
                    </p>
                    </li>
                </ul>                
            </div>
        </div>
    )
}
