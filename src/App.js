import React from 'react';
import { useState } from 'react'
import Start from './components/Start';
import FormUserDetails from './components/FormUserDetails';
import FormPersonalDetails from './components/FormPersonalDetails';
import Success from './components/Success';

const App = () => {
  const [step, setStep] = useState(1)
  
  const [users, setUsers] = useState([])
  const [contexts, setContexts] = useState([])

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
    console.log(data)
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
    setContexts([...contexts, data])
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
        />
      );
    case 4:
      return <Success />;
    default:
      (console.log('This is a multi-step form built with React.'))
  }


}

export default App;
