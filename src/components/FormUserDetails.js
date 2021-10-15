import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    /*
    const fs = require('fs')
    const output = +new Date() + "," + this.props.eta + "," + values.genere + ";" + values.titolo + ";" + values.frequenza + ";" + values.recSys + "\n";
    fs.writeFile('/filesFilmando2/utenti.txt', output, err => {
      if (err) {
        console.error(err)
        return
      }
    })
    */
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
  <div className="container">
      <nav className="navbar navbar-light bg-dark">
          <a className="navbar-brand text-light" href="#">
              <img src="icons/movie2.png" width="30" height="30" alt=""/> Filmando
          </a>
          <button name="back" class="btn btn-primary btn-lg" onClick={this.back}>back </button>
      </nav>

    <div class="container-fluid bg-light">
        <div class="row text-center">
          <div class="col">
            <h1 class="display-4">Your profile</h1>
          </div>
        </div>

        <form action="" method="POST">
          <div class="row justify-content-md-center text-center">
            <div class="col-md-auto">
              <div class="form-group">
                <label for="eta">
                  <h4>Age</h4>
                </label>
                <select class="form-control" name="eta" required onChange={handleChange('eta')}>
                  <option value="">Open this selection menu</option>
                  <option value="1">under 18</option>
                  <option value="2">18-25</option>
                  <option value="3">26-35</option>
                  <option value="4">36-50</option>
                  <option value="5">more than 50</option>
                </select>
              </div>
            </div>

            <div class="col-md-auto">
              <div class="form-group">
                <label for="genere">
                  <h4>Genre</h4>
                </label>
                <select class="form-control" name="genere" required onChange={handleChange('genere')}>
                  <option value="">Open this selection menu</option>
                  <option value="uomo">Man</option>
                  <option value="donna">Woman</option>
                </select>
              </div>
            </div>

            <div class="col-md-auto">
              <div class="form-group">
                <label for="titoloStudio">
                  <h4>Education</h4>
                </label>
                <select class="form-control" name="titoloStudio" required onChange={handleChange('titoloStudio')}>
                  <option value="">Open this selection menu</option>
                  <option value="6">High School</option>
                  <option value="7">Bachelor's degree</option>
                  <option value="8">Master's degree</option>
                  <option value="9">Ph.D</option>
                  <option value="10">Other</option>
                </select>
              </div>
            </div>
          </div>

          <div class="row justify-content-md-center text-center">
            <div class="col-md-auto">
              <div class="form-group">
                <label for="frequenza">
                  <h4>How frequently do you watch movies?</h4>
                </label>
                <select class="form-control" name="frequenza" required onChange={handleChange('frequenza')}>
                  <option value="">Open this selection menu</option>
                  <option value="11">None or once a week</option>
                  <option value="12">Twice a week</option>
                  <option value="13">5 to 7 times a week</option>
                </select>
              </div>
            </div>

            <div class="col-md-auto">
              <div class="form-group">
                <label for="recSys">
                  <h4>Have you ever used a recommender system?</h4><h6>(like Amazon, YouTube, Netflix)</h6>
                </label>
                <select class="form-control" name="recSys" required onChange={handleChange('recSys')}>
                  <option value="">Open this selection menu</option>
                  <option value="14">Yes</option>
                  <option value="15">No</option>
                </select>
              </div>
            </div>
          </div>

          <div class="row justify-content-md-center text-center">
            <div class="col">
              <button name="infoUtente" class="btn btn-primary btn-lg" onClick={this.continue}>Continue </button>
            </div>
          </div>
        </form>
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

export default FormUserDetails;