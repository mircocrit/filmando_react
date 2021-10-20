import React from 'react';
import { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Card';
import Form from './Form';

const Result1 = ({history, attenzione, compagnia, umore, copyMovie, copyListMovie}) => {
  const [movie, setMovie] = useState({
    id: 0,
    nome: "",
    anno: 0,
    genere: [],
    numrating: 0,
    rating: 0,
    attori: [],
 })
 const [spiegazione, setSpiegazione] = useState('')
 
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  useEffect(() => {
    fetch(`http://localhost:5000/unigrammi?attenzione=${attenzione}&compagnia=${compagnia}&umore=${umore}`)
      .then(response => response.json())
      .then(data =>{
          const lista = data[0].listafilm
          copyListMovie(lista)
          console.log(lista)
          return lista
      })
      .then(lista => {
          fetch(`http://localhost:5000/movies/${lista[getRandomInt(10)]}`)
            .then(resp => resp.json())
            .then(object =>{
                setMovie({
                  id: object.id, 
                  nome: object.nome, 
                  anno: object.anno, 
                  genere: object.genere, 
                  numrating: object.numrating,
                  rating: object.rating, 
                  attori: object.attori
                })
                copyMovie(object)
              })
        })
  }, [])
  
    return (
      <div className="container">
        <Card movie={movie} />

        <div className="card text-center bg-white">
          <div className="card-body">
            <h2 className="card-title">Justification 1</h2>
            <p className="card-text">{spiegazione}</p>
          </div>
        </div>
        <br/>

        <Form history={history}/>
        
    </div>

  );
}

export default withRouter(Result1);
