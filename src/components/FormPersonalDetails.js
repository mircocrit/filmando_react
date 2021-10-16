import React, { Component } from 'react';
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const FormPersonalDetails = ({nextStep, prevStep, onAdd }) => {
  const [attenzione, setAttenzione] = useState('')
  const [compagnia, setCompagnia] = useState('')
  const [umore, setUmore] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(attenzione, compagnia, umore)
    if (!attenzione && !compagnia && !umore) {
      alert('Please add a context')
      return
    }
    onAdd({ attenzione, compagnia, umore})
    nextStep()
  }

    return (
      <div className="container">
        <nav className="navbar navbar-light bg-dark">
            <a className="navbar-brand text-light" href="#">
                <img src="icons/movie2.png" width="30" height="30" alt=""/> Filmando
            </a>
            <button name="back" class="btn btn-primary btn-lg" onClick={prevStep}>back </button>
        </nav>
    
        <div class="container-fluid bg-light">
          <div class="row text-center">
            <div class="col">
              <h1 class="display-4">Indicate the context of consumption of the item </h1><h3>(at least one)</h3>
            </div>
          </div>
      
          <form className='add-form' onSubmit={onSubmit}>
            <div class="row justify-content-md-center text-center">

              <div class="col-md-auto">
                <div class="form-group">
                  <label for="attenzione">
                    <h4>Your level of attention</h4>
                  </label>
                  <select class="form-control" name="attenzione" onChange={(e) => setAttenzione(e.target.value)}>
                    <option value="0">Indifferent</option>
                    <option value="1">High</option>
                    <option value="2">Low</option>
                  </select>
                </div>
              </div>

              <div class="col-md-auto">
                <div class="form-group">
                  <label for="compagnia">
                    <h4>Your company</h4>
                  </label>
                  <select class="form-control" name="compagnia" onChange={(e) => setCompagnia(e.target.value)}>
                    <option value="0">Indifferent</option>
                    <option value="3">Partner</option>
                    <option value="4">Family</option>
                    <option value="5">Friends</option>
                  </select>
                </div>
              </div>

              <div class="col-md-auto">
                <div class="form-group">
                  <label for="umore">
                    <h4>Your mood</h4>
                  </label>
                  <select class="form-control" name="umore" onChange={(e) => setUmore(e.target.value)}>
                    <option value="0">Indifferent</option>
                    <option value="6">Good</option>
                    <option value="7">Not good</option>
                  </select>
                </div>
              </div>
            </div>
            <br/><br/><br/>
      
            <div class="row justify-content-md-center text-center">
              <div class="col">
                <button type='submit' name="infoContesti" class="btn btn-primary btn-lg" >Suggest! </button>
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

export default FormPersonalDetails;
