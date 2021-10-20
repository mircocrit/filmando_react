import React from 'react';
import { useState } from 'react'
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Start from './components/Start';
import FormUsers from './components/FormUsers';
import FormContexts from './components/FormContexts';
import Result1 from './components/Result1';
import Success from './components/Success';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  const [attenzione, setAttenzione] = useState('')
  const [compagnia, setCompagnia] = useState('')
  const [umore, setUmore] = useState('')

  let history = useHistory();

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
              />
            </Route>

            <Route path='/end' exact> 
              <Success/>
            </Route>
          </Switch>
      </Router>

      <Footer/>
    </div>
  
  )
}

export default App;
