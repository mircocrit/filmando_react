import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';

const End = ({history, movie, listmovie}) => {

    return (
    <div className="container-fluid bg-light">
        <div className="container-fluid bg-light">
            <br/>
            <div className="row justify-content-md-center text-center">
                <div className="col">
                    <h1 className="display-4">Thanks for participating to the experiment!</h1>
                </div>
            </div>

            <div className="row justify-content-center text-center">
                <h4>If you want to repeat the experiment <a href="/" className="btn btn-primary" role="button"> click here </a></h4>
            </div>

            <div className="card">

                <div className="card-body">
                    <div className="row justify-content-center text-center">
                        <h4>Movies related to {movie.nome}</h4>
                    </div>
                    <div className="row justify-content-center text-center">
                        <div className="col-4 col-sm-3 col-md-2">
                            <img src={`jpg/${movie.id}.jpg`} className="img-fluid" alt="poster"/>
                        </div>
                    </div>

                    <div className="row justify-content-md-center text-center">
                      {listmovie.map((mov) =>   
                        <div className="col-4 col-sm-3 col-md-2">
                            <br/>
                            <img src={`jpg/${mov}.jpg`} className="img-fluid" alt="posters"/>
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
