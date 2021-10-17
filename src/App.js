import React from 'react';
import { useState } from 'react'
import Start from './components/Start';
import FormUserDetails from './components/FormUserDetails';
import FormPersonalDetails from './components/FormPersonalDetails';
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

  switch (step) {
    case 1:
      return (
        <Start
          nextStep={nextStep}
        />
      );
    case 2:
      return (
        <FormUserDetails
          nextStep={nextStep}
          prevStep={prevStep}
          onAdd={addUsers}
        />
      );
    case 3:
      return (
        <FormPersonalDetails
          nextStep={nextStep}
          prevStep={prevStep}
          onAdd={addContexts}
          fetchMovie={fetchMovie}
          
        />
      );
    case 4:
      return (
        <Result1
          nextStep={nextStep}
          prevStep={prevStep}
          randomMovie={randomMovie}
          onAdd={addPrefs}
        />
      );
    case 5:
      return <Success />;
    default:
      (console.log('This is a multi-step form built with React.'))
  }


}

export default App;
