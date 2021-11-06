import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import cssC from '../css/MovieCard.module.css'

export default function Card(props) {
    return (
        <div className={"card "+cssC.m30pcl+" "+cssC.m30pcr+" "+cssC.m2pcb+" "+cssC.cardShadow+" "+cssC.pd5+" glassEffect"}>
            {props.children}
        </div>
    )
}
