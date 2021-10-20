import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
      <footer>
        <div className="footer bg-info">
          <h2 align="center">Progetto di Tesi di Laurea in Informatica</h2>
          <p className="lead" align="center">Laureando: <b>Mirco Sipone</b></p>
          <p className="lead" align="center">Relatore: dott. <b>Cataldo Musto</b></p>
          <div className="d-flex justify-content-center">
            <div> 
              <a href="https://www.uniba.it/">
                <img src="icons/Logo_Uniba.png" alt="logo uniba"></img>
              </a> 
            </div>
            <div> 
              <a href="http://www.di.uniba.it/~swap/">
                <img height="60" src="icons/swap.PNG" alt="swap"></img>
              </a>
            </div>
          </div>
          <br/>
        </div>  
      </footer>
    );
}

export default Footer;