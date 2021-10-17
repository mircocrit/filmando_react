import React, { Component } from 'react';
import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './Form';

const Result1 = ({nextStep, prevStep, onAdd, randomMovie }) => {
  const [id, setId] = useState(0) 
  const [nome, setNome] = useState('') 
  const [anno, setAnno] = useState(0) 
  const [genere, setGenere] = useState([]) 
  const [numrating, setNumrating] = useState(0)
  const [rating, setRating] = useState(0) 
  const [attori, setAttori] = useState([])
  const [spiegazione, setSpiegazione] = useState('')

  useEffect(() => {
  const fetchMovie = async (id) => {
    const res = await fetch(`http://localhost:5000/movies/${id}`)
    const data = await res.json()
    setData(data)
  }
    const movie = randomMovie()
    fetchMovie(movie)

  }, [])



  const setData = ({id, nome, anno, genere, numrating, rating, attori }) => {
    setId(id)
    setNome(nome)
    setAnno(anno)
    setGenere(genere)
    setNumrating(numrating)
    setRating(rating)
    setAttori(attori)
  }
  
  /*
  const [tecnica, setTecnica] = useState('')        //Centroide   FrasiSingole

  const [pref1, setPref1] = useState('')    //trasparenza
  const [pref2, setPref2] = useState('')    //persuasione
  const [pref3, setPref3] = useState('')    //coinvolgimento
  const [pref4, setPref4] = useState('')    //fiducia
  */

    return (
      <div className="container">
      <nav className="navbar navbar-light bg-dark">
          <a className="navbar-brand text-light" href="#">
              <img src="icons/movie2.png" width="30" height="30" alt=""/> Filmando
          </a>
          <button name="back" class="btn btn-primary btn-lg" onClick={prevStep}>back </button>
      </nav>

      <div class="container-fluid bg-light">
        <div class="row justify-content-md-center">
          <div class="col-xs-6 col-md-5 p-0">
            <div class="card bg-dark text-white border-0">
              <img class="card-img" src={`poster/${id}.jpg`} alt="Card image"/>
              <div class="card-img-overlay d-flex flex-column justify-content-end align-items-start">
                <h3 class="card-text font-weight-light">{nome}</h3>
                <h6 class="card-text font-weight-light">{anno}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

  	<div class="card text-center bg-dark">
      <div class="card-body">
        <div class="row text-center">
          <div class="col-4 p-0">       
            <img class="card-img" src={`jpg/${id}.jpg`} style= {{width: "95px", height: "143px"}} alt=""/>
          </div>
          <div class="col-8 p-0">
            <h5 class="card-text">
              {
              //movie.genere.forEach(gen => (
              //  <span class="badge badge-danger"> {gen} </span>)
              //)
              }
            </h5>
            <h5 class="card-text">
              {
              //movie.attori.forEach(act => (
              //     <span class="badge badge-primary">" {act} "</span>)
              //)
              }
            </h5>
            <h5 class="card-text">
              <span class="badge badge-warning">{rating}</span><br/>
              <span class="badge badge-dark font-weight-light">{numrating}</span>
            </h5>
          </div>
		    </div>
      </div>
    </div>

      <div class="card text-center bg-white">
        <div class="card-body">
          <h2 class="card-title">Justification 1</h2>
          <p class="card-text">{spiegazione}</p>
        </div>
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
