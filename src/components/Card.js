import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Card = ({movie}) => {
    return (
      <div className="container">
        <div className="container-fluid bg-light">
            <div className="row justify-content-md-center">
                <div className="col-xs-6 col-md-5 p-0">
                    <div className="card bg-dark text-white border-0">
                        <img className="card-img" src={`poster/${movie.id}.jpg`} alt="poster"/>
                        <div className="card-img-overlay d-flex flex-column justify-content-end align-items-start">
                            <h3 className="card-text font-weight-light">{movie.nome}</h3>
                            <h6 className="card-text font-weight-light">{movie.anno}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="card text-center bg-dark">
            <div className="card-body">
              <div className="row text-center">
                <div className="col-4 p-0">       
                    <img className="card-img" src={`jpg/${movie.id}.jpg`} alt="poster" style= {{width: "95px", height: "143px"}}/>
                </div>
                <div className="col-8 p-0">
                    <h5 className="card-text">
                        {movie.genere.length !== 0 && (
                            movie.genere.map( (gen) =>
                                <span className="badge bg-danger"> {gen}</span>
                            )
                        )}
                    </h5>
                    <h5 className="card-text">
                        {movie.attori.length !== 0 && (
                            movie.attori.map( (act) =>
                                <span className="badge bg-primary"> {act}</span>
                            )
                        )}
                    </h5>
                    <h5 className="card-text">
                        <span className="badge bg-warning">{movie.rating}</span><br/>
                        <span className="badge bg-dark font-weight-light">{movie.numrating}</span>
                    </h5>
                </div>
              </div>
            </div>
        </div>
     </div>
    );
}

export default Card;