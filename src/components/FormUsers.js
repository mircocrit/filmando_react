import React, { Component } from 'react';
import { useState } from 'react'
import { withRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const FormUsers = ({history}) => {
  const [eta, setEta] = useState('')
  const [genere, setGenere] = useState('')
  const [titoloStudio, setTitoloStudio] = useState('')
  const [frequenza, setFrequenza] = useState('')
  const [recSys, setRecSys] = useState('')

  function addUsers(user) {
    fetch('http://localhost:5000/users', 
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(user),
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    addUsers({eta, genere, titoloStudio, frequenza, recSys})
    history.push("/sceltaContesti")   //replace
  }

    return (
      <div class="container-fluid bg-light">
        <div class="row text-center">
          <div class="col">
            <h1 class="display-4">Your profile</h1>
          </div>
        </div>

        <form className='add-form' onSubmit={onSubmit}>
          <div class="row justify-content-md-center text-center">

            <div class="col-md-auto">
              <div class="form-group">
                <label htmlFor='eta'> <h4>Age</h4> </label>
                <select class="form-control" id="eta" required onChange={(e) => setEta(e.target.value)}>
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
                <label htmlFor='genere'> <h4>Genre</h4></label>
                <select class="form-control" id="genere" required onChange={(e) => setGenere(e.target.value)}>
                  <option value="">Open this selection menu</option>
                  <option value="uomo">Man</option>
                  <option value="donna">Woman</option>
                </select>
              </div>
            </div>

            <div class="col-md-auto">
              <div class="form-group">
                <label htmlFor='titoloStudio'> <h4>Education</h4></label>
                <select class="form-control" id="titoloStudio" required onChange={(e) => setTitoloStudio(e.target.value)}>
                  <option value="">Open this selection menu</option>
                  <option value="1">High School</option>
                  <option value="2">Bachelor's degree</option>
                  <option value="3">Master's degree</option>
                  <option value="4">Ph.D</option>
                  <option value="5">Other</option>
                </select>
              </div>
            </div>
          </div>

          <div class="row justify-content-md-center text-center">
            <div class="col-md-auto">
              <div class="form-group">
                <label htmlFor='frequenza'><h4>How frequently do you watch movies?</h4></label>
                <select class="form-control" id="frequenza" required onChange={(e) => setFrequenza(e.target.value)}>
                  <option value="">Open this selection menu</option>
                  <option value="1">None or once a week</option>
                  <option value="2">Twice a week</option>
                  <option value="3">5 to 7 times a week</option>
                </select>
              </div>
            </div>

            <div class="col-md-auto">
              <div class="form-group">
                <label htmlFor='recSys'><h4>Have you ever used a recommender system?</h4><h6>(like Amazon, YouTube, Netflix)</h6></label>
                <select class="form-control" id="recSys" required onChange={(e) => setRecSys(e.target.value)}>
                  <option value="">Open this selection menu</option>
                  <option value="si">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            </div>
          </div>

          <div class="row justify-content-md-center text-center">
            <div class="col">
              <button type='submit' class="btn btn-primary btn-lg">Continue </button>
            </div>
          </div>
        </form>

        <br/>
    </div>
  );
}

export default withRouter(FormUsers);
