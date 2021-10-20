import React from 'react';
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Form2 = ({history, url, prefapi}) => {
    const [preferenza, setPreferenza] = useState(0)
    const [trasparenza, setTrasparenza] = useState(0)
    const [persuasione, setPersuasione] = useState(0)
    const [coinvolgimento, setCoinvolgimento] = useState(0)
    const [fiducia, setFiducia] = useState(0)

    const onSubmit = (e) => {
        e.preventDefault()
        addPrefs({preferenza, trasparenza, persuasione, coinvolgimento, fiducia})
        history.push(url)
    }
    
    function addPrefs(pref){
        fetch(`http://localhost:5000/${prefapi}`,
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(pref),
        })
      }

    return (
      <div className="container-fluid bg-light">
        <br/>
        <form  className='add-form' onSubmit={onSubmit} >
          <div className="row justify-content-md-center text-center">

            <div className="col-md-auto">
              <div className="form-group">
                <label htmlFor="pref0" style= {{color: "#c62828"}}>
                  <h5>Given that the goal of the system is to generate a justification which is adapted <br/>
                      on the different contexts of consumption,which justification style do you prefer?</h5>
                </label>
                <select className="form-control" id="pref0" onChange={(e) => setPreferenza(e.target.value)}>
                  <option value="0">Indifferent</option>
                  <option value="1">Justification 1</option>
                  <option value="2">Justification 2</option>
                </select>
              </div>
            </div>
          </div>

          <div className="row justify-content-md-center text-center">
            <h5 style= {{color: "#c62828"}}> Please indicate which justification style better matches the following sentences:</h5>
          </div>

          <div className="row justify-content-md-center text-center">
            <div className="col-md-auto">
              <div className="form-group">
                <label htmlFor="pref1"> <h6>I understood why the movie was suggested to me</h6></label>
                <select className="form-control" id="pref1" onChange={(e) => setTrasparenza(e.target.value)}>
                  <option value="0">Indifferent</option>
                  <option value="1">Justification 1</option>
                  <option value="2">Justification 2</option>
                </select>
              </div>
            </div>

            <div className="col-md-auto">
              <div className="form-group">
                <label htmlFor="pref2"><h6>The justification made the suggestion more convincing.</h6></label>
                <select className="form-control" id="pref2" onChange={(e) => setPersuasione(e.target.value)}>
                  <option value="0">Indifferent</option>
                  <option value="1">Justification 1</option>
                  <option value="2">Justification 2</option>
                </select>
              </div>
            </div>

            <div className="col-md-auto">
              <div className="form-group">
                <label htmlFor="pref3"><h6>The justification allowed me to discover new information about the movie</h6></label>
                <select className="form-control" id="pref3" onChange={(e) => setCoinvolgimento(e.target.value)}>
                  <option value="0">Indifferent</option>
                  <option value="1">Justification 1</option>
                  <option value="2">Justification 2</option>
                </select>
              </div>
            </div>

            <div className="col-md-auto">
              <div className="form-group">
                <label htmlFor="pref4"><h6>The justification has increased my level of trust in recommender systems</h6></label>
                <select className="form-control" id="pref4" onChange={(e) => setFiducia(e.target.value)}>
                  <option value="0">Indifferent</option>
                  <option value="1">Justification 1</option>
                  <option value="2">Justification 2</option>
                </select>
              </div>
            </div>

          </div>

          <div className="row justify-content-md-center text-center">
            <div className="col">
              <button type="submit" className="btn btn-primary btn-lg">Send feedback </button>
            </div>
          </div>

        </form>

        <br/>
      </div>
    );
}

export default Form2;