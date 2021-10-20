import React from 'react';
import { useState } from 'react'
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Start from './components/Start';
import FormUsers from './components/FormUsers';
import FormContexts from './components/FormContexts';
import Result1 from './components/Result1';
import Result3 from './components/Result3';
import Result4 from './components/Result4';
import End from './components/End';

const App = () => {
  const [attenzione, setAttenzione] = useState('')
  const [compagnia, setCompagnia] = useState('')
  const [umore, setUmore] = useState('')

  const [listmovie, setListmovie] = useState([])
  const [movie, setMovie] = useState({
    id: 0,
    nome: "",
    anno: 0,
    genere: [],
    numrating: 0,
    rating: 0,
    attori: [],
 })

  let history = useHistory();

  const copyListMovie = (lista) => {
    setListmovie(lista)
  }

  const copyMovie = (movie) => {
    setMovie({
      id: movie.id, 
      nome: movie.nome, 
      anno: movie.anno, 
      genere: movie.genere, 
      numrating: movie.numrating,
      rating: movie.rating, 
      attori: movie.attori
    })
  };

  const saveContexts = (contexts) => {
    setAttenzione(contexts.attenzione)
    setCompagnia(contexts.compagnia)
    setUmore(contexts.umore)
  };

  return(
      <div className="container">
        <Navbar/>

        <Router>
          <Switch>
            <Route path='/' exact>
              <Start history={history} />
            </Route>

            <Route path='/infoUtente' exact>
              <FormUsers history={history} />
            </Route>

            <Route path='/sceltaContesti' exact>    
              <FormContexts history={history} 
                saveContexts={saveContexts}/>
            </Route>

            <Route path='/results1' exact>   
              <Result1 history={history}
                attenzione={attenzione} 
                compagnia={compagnia} 
                umore={umore} 
                copyMovie = {copyMovie}
                copyListMovie = {copyListMovie}
              />
            </Route>

            <Route path='/results3' exact>   
              <Result3 history={history}
              />
            </Route>

            <Route path='/results4' exact>   
              <Result4 history={history}
              />
            </Route>

            <Route path='/end' exact>   
              <End history={history}
                   listmovie= {listmovie}
                   movie= {movie}
              />
            </Route>

          </Switch>
      </Router>

      <Footer/>
    </div>
  
  )
}

export default App;
