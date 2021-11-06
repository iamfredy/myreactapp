import React from 'react'

export default function PageLoading(props) {
    return (
        <div className="row">
          <div className="col-sm-3">
          </div>   
          <div className="spinner-border text-primary col-sm-6 loadingSpinner">
            <span class="sr-only"></span>
          </div> 
          <strong><p className="col-sm-12 txtAlnCenter text-secondary">{props.message}</p></strong>    
          <div className="col-sm-3">
          </div>     
        </div>
    )
}
