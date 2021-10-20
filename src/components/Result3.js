import React from 'react';
import { useState } from 'react'
import { withRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form2 from './Form2';

const Result3 = ({history}) => {
  const [spiegazioneFramework, setSpiegazioneFramework] = useState('')  //centroide/frasi singole
  const [spiegazioneBaseline, setSpiegazioneBaseline] = useState('')
  
    return (
      <div className="container">
        <div className="card text-center">
          <div className="card-body">
            <h2 className="card-title">Justification 1</h2>
            <p className="card-text"> {spiegazioneFramework}</p>
            <h2 className="card-title">Justification 2</h2>
            <p className="card-text">{spiegazioneBaseline}</p>
          </div>
        </div>

        <Form2 history={history} url="/results4" prefapi="prefs2"/>

      </div>

  );
}

export default withRouter(Result3);
