import React, { Component } from 'react';
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Result1 = ({nextStep, prevStep, onAdd }) => {
  const [pref1, setPref1] = useState('')    //trasparenza
  const [pref2, setPref2] = useState('')    //persuasione
  const [pref3, setPref3] = useState('')    //coinvolgimento
  const [pref4, setPref4] = useState('')    //fiducia

  const onSubmit = (e) => {
    e.preventDefault()
    onAdd({ eta, genere, titoloStudio, frequenza, recSys})
    nextStep()
  }
/*
  <?php
	session_start();
	//echo $_SESSION['tecnica'] . ";" . $_SESSION['configurazione'] . ";" . implode(",", $_SESSION['contesti']) . ";" . $_SESSION['film'];
	//echo implode(",",  $_SESSION['testofrasi']);
	$spiegazione = "";
	if ($_SESSION['tecnica'] === "centroide")
		$spiegazione = $_SESSION['spiegazioneCentroide'];
	else
		$spiegazione = $_SESSION['spiegazioneSingole'];

	$path = "filesFilmando2/info utili/" . $_SESSION['film'] . ".txt";

	$file = fopen($path, "r") or die("Unable to open file!");
	$id = fgets($file);				        //IDFILM
	$nome = fgets($file);			        //TITOLO FILM
	$anno = fgets($file);			        //ANNO
	$genere = fgets($file);		      	//GENERE
	$gen = explode(",", $genere);
	$numrating = fgets($file);		    //NUMERO RATINGS IMDB
	$rating = fgets($file);		      	//RATING IMDB
	if (($attori = fgets($file)) !== false) {
		$act = explode(",", $attori);
	}
	fclose($file);
	?>
*/
    return (
      <div className="container">
      <nav className="navbar navbar-light bg-dark">
          <a className="navbar-brand text-light" href="#">
              <img src="icons/movie2.png" width="30" height="30" alt=""/> Filmando
          </a>
          <button name="back" class="btn btn-primary btn-lg" onClick={prevStep}>back </button>
      </nav>

      <div class="card text-center bg-white">
        <div class="card-body">
          <h2 class="card-title">Justification 1</h2>
          <p class="card-text">{spiegazione}</p>
        </div>
      </div>


      <div class="container-fluid bg-light">
        <br/>
        <div class="row text-center">
          <div class="col">
            <h5 style="color: #c62828;">
              Given that the goal of the system is to generate a justification which is
              adapted on the different contexts of consumption, please, answer the following questions<br/>
            </h5>
            <h6>- 1 indicates that you are in total disagreement<br/>- 5 indicates that you are in total agreement </h6>
          </div>
        </div>

        <form action="" method="POST">
          <br/>
          <div class="row justify-content-md-center text-center">

            <div class="col-md-3">
              <div class="slidecontainer">
                <label for="pref1">
                  <h6>I understood why the movie was suggested to me:</h6>
                </label>
                <div align="center" class="font-weight-bold" id="valorepref1">3</div>
                <input type="range" min="1" max="5" value="3" class="slider" id="pref1" name="pref1" 
                      onfocus="coloreRange(this.id)" onclick="coloreRange(this.id)" onchange="coloreRange(this.id)"/>
              </div>
            </div>

            <div class="col-md-3">
              <div class="slidecontainer">
                <label for="pref2">
                  <h6>The justification made the suggestion more convincing:</h6>
                </label>
                <div align="center" class="font-weight-bold" id="valorepref2">3</div>
                <input type="range" min="1" max="5" value="3" class="slider" id="pref2" name="pref2" 
                      onfocus="coloreRange(this.id)" onclick="coloreRange(this.id)" onchange="coloreRange(this.id)"/>
              </div>
            </div>

            <div class="col-md-3">
              <div class="slidecontainer">
                <label for="pref3">
                  <h6>The justification allowed me to discover new information about the movie</h6>
                </label>
                <div align="center" class="font-weight-bold" id="valorepref3">3</div>
                <input type="range" min="1" max="5" value="3" class="slider" id="pref3" name="pref3" 
                        onfocus="coloreRange(this.id)" onclick="coloreRange(this.id)" onchange="coloreRange(this.id)"/>
              </div>
            </div>

            <div class="col-md-3">
              <div class="slidecontainer">
                <label for="pref4">
                  <h6>The justification has increased my level of trust in the recommender system:</h6>
                </label>
                <div align="center" class="font-weight-bold" id="valorepref4">3</div>
                <input type="range" min="1" max="5" value="3" class="slider" id="pref4" name="pref4" 
                      onfocus="coloreRange(this.id)" onclick="coloreRange(this.id)" onchange="coloreRange(this.id)"/>
              </div>
            </div>

          </div>
          <div class="row justify-content-md-center text-center">
            <div class="col-md-4">
              <button type="submit" name="valutazione1" class="btn btn-primary btn-lg">Send feedback </button>
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

export default Result1;
