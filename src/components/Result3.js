import React, { Component } from 'react';
import { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form2 from './Form2';

const Result3 = ({history}) => {
  const [spiegazione1, setSpiegazione1] = useState('')
  const [spiegazione2, setSpiegazione2] = useState('')
  
    return (
      <div className="container">

        <div class="card text-center">
          <div class="card-body">
            <h2 class="card-title">Justification 1</h2>
            <p class="card-text"> {spiegazione1}</p>
            <h2 class="card-title">Justification 2</h2>
            <p class="card-text">{spiegazione2}</p>
          </div>
        </div>

        <Form2 history={history}/>

      </div>

  );
}

export default withRouter(Result3);
