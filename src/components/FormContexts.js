import React, { Component } from 'react';
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const FormContexts = ({nextStep, prevStep, onAdd , fetchMovie}) => {
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
    onAdd({attenzione, compagnia, umore})
    fetchMovie(attenzione, compagnia, umore)
    nextStep()
  }

    return (
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
                <label for="attenzione"><h4>Your level of attention</h4> </label>
                <select class="form-control" name="attenzione" onChange={(e) => setAttenzione(e.target.value)}>
                  <option value="">Indifferent</option>
                  <option value="High">High</option>
                  <option value="Low">Low</option>
                </select>
              </div>
            </div>

            <div class="col-md-auto">
              <div class="form-group">
                <label for="compagnia"><h4>Your company</h4></label>
                <select class="form-control" name="compagnia" onChange={(e) => setCompagnia(e.target.value)}>
                  <option value="">Indifferent</option>
                  <option value="Partner">Partner</option>
                  <option value="Family">Family</option>
                  <option value="Friends">Friends</option>
                </select>
              </div>
            </div>

            <div class="col-md-auto">
              <div class="form-group">
                <label for="umore"> <h4>Your mood</h4></label>
                <select class="form-control" name="umore" onChange={(e) => setUmore(e.target.value)}>
                  <option value="">Indifferent</option>
                  <option value="Good">Good</option>
                  <option value="Bad">Not good</option>
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
    );
}

export default FormContexts;
