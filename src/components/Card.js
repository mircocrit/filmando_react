import React, { Component } from 'react';
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Card = ({movie}) => {
    return (
      <div className="container">
        <div class="container-fluid bg-light">
            <div class="row justify-content-md-center">
                <div class="col-xs-6 col-md-5 p-0">
                    <div class="card bg-dark text-white border-0">
                        <img class="card-img" src={`poster/${movie.id}.jpg`}/>
                        <div class="card-img-overlay d-flex flex-column justify-content-end align-items-start">
                            <h3 class="card-text font-weight-light">{movie.nome}</h3>
                            <h6 class="card-text font-weight-light">{movie.anno}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="card text-center bg-dark">
            <div class="card-body">
              <div class="row text-center">
                <div class="col-4 p-0">       
                    <img class="card-img" src={`jpg/${movie.id}.jpg`} style= {{width: "95px", height: "143px"}}/>
                </div>
                <div class="col-8 p-0">
                    <h5 class="card-text">
                        {movie.genere.length != 0 && (
                            movie.genere.map( (gen) =>
                                <span className="badge badge-danger"> {gen}</span>
                            )
                        )}
                    </h5>
                    <h5 class="card-text">
                        {movie.attori.length != 0 && (
                            movie.attori.map( (act) =>
                                <span className="badge badge-primary"> {act}</span>
                            )
                        )}
                    </h5>
                    <h5 class="card-text">
                        <span className="badge badge-warning">{movie.rating}</span><br/>
                        <span className="badge badge-dark font-weight-light">{movie.numrating}</span>
                    </h5>
                </div>
              </div>
            </div>
        </div>
     </div>
    );
}

export default Card;