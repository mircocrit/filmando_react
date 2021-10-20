import React from 'react';
import { useState } from 'react'
import { withRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const FormContexts = ({history, saveContexts}) => {
  const [attenzione, setAttenzione] = useState('')
  const [compagnia, setCompagnia] = useState('')
  const [umore, setUmore] = useState('')
  
  function addContexts(context) {
    fetch('http://localhost:5000/contexts', 
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(context),
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(attenzione, compagnia, umore)
    if (!attenzione && !compagnia && !umore) {
      alert('Please add a context')
      return
    }
    addContexts({attenzione, compagnia, umore})
    saveContexts({attenzione, compagnia, umore})
    history.push("/results1")
  }

    return (
      <div className="container-fluid bg-light">
        <div className="row text-center">
          <div className="col">
            <h1 className="display-4">Indicate the context of consumption of the item </h1><h3>(at least one)</h3>
          </div>
        </div>
    
        <form className='add-form' onSubmit={onSubmit}>
          <div className="row justify-content-md-center text-center">
            <div className="col-md-auto">
              <div className="form-group">
                <label htmlFor='attenzione'> <h4>Your level of attention</h4> </label>
                <select className="form-control" id="attenzione" onChange={(e) => setAttenzione(e.target.value)}>
                  <option value="">Indifferent</option>
                  <option value="High">High</option>
                  <option value="Low">Low</option>
                </select>
              </div>
            </div>

            <div className="col-md-auto">
              <div className="form-group">
                <label htmlFor='compagnia'><h4>Your company</h4></label>
                <select className="form-control" id="compagnia" onChange={(e) => setCompagnia(e.target.value)}>
                  <option value="">Indifferent</option>
                  <option value="Partner">Partner</option>
                  <option value="Family">Family</option>
                  <option value="Friends">Friends</option>
                </select>
              </div>
            </div>

            <div className="col-md-auto">
              <div className="form-group">
                <label htmlFor='umore'> <h4>Your mood</h4></label>
                <select className="form-control" id="umore" onChange={(e) => setUmore(e.target.value)}>
                  <option value="">Indifferent</option>
                  <option value="Good">Good</option>
                  <option value="Bad">Not good</option>
                </select>
              </div>
            </div>
          </div>
          <br/><br/><br/>
    
          <div className="row justify-content-md-center text-center">
            <div className="col">
              <button type='submit' className="btn btn-primary btn-lg" >Suggest! </button>
            </div>
          </div>
        </form>
    
        <br/>
      </div>    
    );
}

export default withRouter(FormContexts);
