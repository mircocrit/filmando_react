import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Start = ({nextStep}) => {
    return (
      <div class="container-fluid bg-light">
        <div class="row text-center">
          <div class="col">
            <h1 class="display-4">Filmando</h1>
            <img src="icons/movie.png" width="160" height="160" alt=""></img>
          </div>
        </div>

        <div class="row text-center">
          <div class="col">
            <p class="lead">
              <b>Filmando</b> will recommend you a movie you will like along with a
              justification based on the <b>context</b> of consumption of the item.
              <br/>
              In the following, you will provide information about your current
              context and you will receive a suitable <b>recommendation</b>
              and a <b>context-aware natural language justification</b>.
              <br/>
              You will be asked to <b>evaluate</b> the justification and
              to select your preferred justification style.
              <br/>
              Thanks for your support. Enjoy the webapp!
            </p>
          </div>
        </div>

        <div class="row text-center">
          <div class="col">
            <button type="button" onClick={nextStep} class="btn btn-primary btn-lg">Start!</button>
          </div>
        </div>
        <br/>
      </div>
    );
  
}

export default Start;
