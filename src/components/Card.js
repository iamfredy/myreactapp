import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import cssC from '../css/MovieCard.module.css'

export default function Card(props) {
    return (
        <div className={"card "+cssC.m20pcl+" "+cssC.m20pcr+" "+cssC.m5pcb+" "+cssC.cardShadow}>
            {props.children}
        </div>
    )
}
