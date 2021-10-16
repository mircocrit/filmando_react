import React, { Component } from 'react';
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Success = () => {
    return (
    <div className="container">
        <nav className="navbar navbar-light bg-dark">
            <a className="navbar-brand text-light" href="#">
                <img src="icons/movie2.png" width="30" height="30" alt=""/> Filmando
            </a>
        </nav>

      <div class="container-fluid bg-light">
          <div class="row text-center">
            <div class="col">
              <h1 class="display-4">Thank you</h1>
            </div>
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

export default Success;
