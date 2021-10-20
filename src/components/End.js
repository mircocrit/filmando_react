import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';

const End = ({history, movie, listmovie}) => {

    return (
    <div class="container-fluid bg-light">
        <div class="container-fluid bg-light">
            <br/>
            <div class="row justify-content-md-center text-center">
                <div class="col">
                    <h1 class="display-4">Thanks for participating to the experiment!</h1>
                </div>
            </div>

            <div class="row justify-content-center text-center">
                <h4>If you want to repeat the experiment <a href="/" class="btn btn-primary" role="button"> click here </a></h4>
            </div>

            <div class="card">

                <div class="card-body">
                    <div class="row justify-content-center text-center">
                        <h4>Movies related to {movie.nome}</h4>
                    </div>
                    <div class="row justify-content-center text-center">
                        <div class="col-4 col-sm-3 col-md-2">
                            <img src={`jpg/${movie.id}.jpg`} class="img-fluid"/>
                        </div>
                    </div>

                    <div class="row justify-content-md-center text-center">
                      {listmovie.map((mov) =>   
                        <div class="col-4 col-sm-3 col-md-2">
                            <br/>
                            <img src={`jpg/${mov}.jpg`} class="img-fluid"/>
                        </div>
                       )}
                    </div>

				<br/><br/>
			    </div>

		    </div>
	    </div>
    </div>
    );
}

export default withRouter(End);
