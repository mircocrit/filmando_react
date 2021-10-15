import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export class Start extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    
    return (
    <div className="container">
      <nav className="navbar navbar-light bg-dark">
          <a className="navbar-brand text-light" href="#">
              <img src="icons/movie2.png" width="30" height="30" alt=""/> Filmando
          </a>
      </nav>

      <div class="container-fluid bg-light">
        <div class="row text-center">
          <div class="col">
            <h1 class="display-4">Filmando</h1>
            <img src="icons/movie.png" width="160" height="160" alt=""></img>
          </div>
        </div>

        <div class="row text-center">
          <div class="col">
            <p class="lead">
              <b>Filmando</b> will recommend you a movie you will like along with a
              justification based on the <b>context</b> of consumption of the item.
              <br/>
              In the following, you will provide information about your current
              context and you will receive a suitable <b>recommendation</b>
              and a <b>context-aware natural language justification</b>.
              <br/>
              You will be asked to <b>evaluate</b> the justification and
              to select your preferred justification style.
              <br/>
              Thanks for your support. Enjoy the webapp!
            </p>
          </div>
        </div>

        <div class="row text-center">
          <div class="col">
            <button type="button" onClick={this.continue} class="btn btn-primary btn-lg">Start!</button>
          </div>
        </div>

        <br/>
      </div>

    <footer>
      <div class="footer bg-info">
        <h2 align="center">Progetto di Tesi di Laurea in Informatica</h2>
        <p class="lead" align="center">Laureando: <b>Mirco Sipone</b></p>
        <p class="lead" align="center">Relatore: dott. <b>Cataldo Musto</b></p>

        <div class="d-flex justify-content-center">
          <div> <a href="https://www.uniba.it/"><img src="icons/Logo_Uniba.png"></img></a> </div>
          <div> <a href="http://www.di.uniba.it/~swap/"><img height="60" src="icons/swap.PNG"></img></a></div>
        </div>
        <br/>
      </div>
    </footer>
  </div>
        
    );
  }
}

export default Start;
