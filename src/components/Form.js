import React, { Component } from 'react';
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Form = ({history}) => {
    const [trasparenza, setTrasparenza] = useState(3)
    const [persuasione, setPersuasione] = useState(3)
    const [coinvolgimento, setCoinvolgimento] = useState(3)
    const [fiducia, setFiducia] = useState(3)

    function addPrefs(pref){
      fetch('http://localhost:5000/prefs', 
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(pref),
      })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        addPrefs({trasparenza, persuasione, coinvolgimento, fiducia})
        history.push("/results3")
    }
    

    return (
      <div class="container-fluid bg-light">
        
        <div class="row text-center">
          <div class="col">
            <h5 style={{color: "#c62828"}}>
              Given that the goal of the system is to generate a justification which is
              adapted on the different contexts of consumption, please, answer the following questions<br/>
            </h5>
            <h6>- 1 indicates that you are in total disagreement<br/>- 5 indicates that you are in total agreement </h6>
          </div>
        </div>

        <form className='add-form' onSubmit={onSubmit}>
          <br/>
          <div class="row justify-content-md-center text-center">
            <div class="col-md-3">
              <div class="slidecontainer">
                <label htmlFor="pref1"> <h6>I understood why the movie was suggested to me:</h6></label>
                <div align="center" class="font-weight-bold">{trasparenza}</div>
                  <input type="range" class="slider" id="pref1" min="1" max="5" 
                       value={trasparenza} onChange={(e) => setTrasparenza(e.target.value)}/>
              </div>
            </div>

            <div class="col-md-3">
              <div class="slidecontainer">
                <label htmlFor="pref2"> <h6>The justification made the suggestion more convincing:</h6> </label>
                <div align="center" class="font-weight-bold">{persuasione}</div>
                  <input type="range" class="slider" id="pref2" min="1" max="5" 
                       value={persuasione} onChange={(e) => setPersuasione(e.target.value)}/>
              </div>
            </div>

            <div class="col-md-3">
              <div class="slidecontainer">
                <label htmlFor="pref3"><h6>The justification allowed me to discover new information about the movie</h6> </label>
                <div align="center" class="font-weight-bold">{coinvolgimento}</div>
                  <input type="range" class="slider" id="pref3" min="1" max="5" 
                       value={coinvolgimento} onChange={(e) => setCoinvolgimento(e.target.value)}/>
              </div>
            </div>

            <div class="col-md-3">
              <div class="slidecontainer">
                <label htmlFor="pref4"> <h6>The justification has increased my level of trust in the recommender system:</h6></label>
                <div align="center" class="font-weight-bold">{fiducia}</div>
                  <input type="range" class="slider" id="pref4" min="1" max="5" 
                       value={fiducia} onChange={(e) => setFiducia(e.target.value)}/>
              </div>
            </div>
          </div>

          <div class="row justify-content-md-center text-center">
            <div class="col-md-4">
              <button type="submit" class="btn btn-primary btn-lg">Send feedback</button>
            </div>
          </div>

        </form>
        <br/>
      </div>
    );
}

export default Form;