import React from 'react';
import { useState } from 'react'
import Start from './components/Start';
import FormUserDetails from './components/FormUserDetails';
import FormContexts from './components/FormContexts';
import Result1 from './components/Result1';
import Success from './components/Success';

const App = () => {
  const [step, setStep] = useState(1)
  const [listafilm, setListafilm] = useState([])

  const [users, setUsers] = useState([])
  const [contexts, setContexts] = useState([])
  const [prefs, setPrefs] = useState([])

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  // Add Users
  const addUsers = async (user) => {
    const res = await fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })

    const data = await res.json()
    //console.log(data)
    setUsers([...users, data])
  }

  // Add Contexts
  const addContexts = async (context) => {
    const res = await fetch('http://localhost:5000/contexts', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(context),
    })
    const data = await res.json()
    //console.log(data)
    setContexts([...contexts, data])
  }


  //fetch movie list
  const fetchMovie = async (attenzione, compagnia, umore) => {
    const res = await fetch(`http://localhost:5000/unigrammi?attenzione=${attenzione}&compagnia=${compagnia}&umore=${umore}`)
    const data = await res.json()
    console.log(data)
    setListafilm(data.listafilm)
  }

  //select random movie
  const randomMovie = () => {
    return listafilm[1]     //Math.floor(Math.random() * listafilm.length)  
  }

  // Add Prefs
  const addPrefs = async (pref) => {
    const res = await fetch('http://localhost:5000/prefs', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(pref),
    })
    const data = await res.json()
    setPrefs([...prefs, data])
  }
  
  
  return(
    <div className="container">
      <nav className="navbar navbar-light bg-dark">
        <a className="navbar-brand text-light" href="#">
            <img src="icons/movie2.png" width="30" height="30" alt=""/> Filmando
          </a>
      </nav>

      {(step==1) &&
        <Start nextStep={nextStep}/>
      }
      {(step==2) &&
        <FormUserDetails
          nextStep={nextStep}
          prevStep={prevStep}
          onAdd={addUsers}
        />
      }
      {(step==3) &&
        <FormContexts
          nextStep={nextStep}
          prevStep={prevStep}
          onAdd={addContexts}
          fetchMovie={fetchMovie}
        />
      }
      {(step==4) && 
        <Result1
          nextStep={nextStep}
          prevStep={prevStep}
          randomMovie={randomMovie}
          onAdd={addPrefs}
        />
      }
      {(step==5) && 
         <Success />
      }
   
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
  )

}

export default App;
