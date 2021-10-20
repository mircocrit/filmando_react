import React, { Component } from 'react';
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
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
    );
}

export default Footer;