import React, { Component } from 'react';
import { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Card';
import Form from './Form';

const Result1 = ({history, attenzione, compagnia, umore}) => {
  const [isLoading, setIsLoading] = useState(true)
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
 
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  useEffect(() => {
    setIsLoading(true)
    fetch(`http://localhost:5000/unigrammi?attenzione=${attenzione}&compagnia=${compagnia}&umore=${umore}`)
      .then(response => response.json())
      .then(data =>{
          const lista = data[0].listafilm
          setListmovie(lista)
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
                setIsLoading(false)
              })
        })
  }, [])
  
    return (
      <div className="container">
        <Card movie={movie} />

        <Form history={history}/>
    </div>

  );
}

export default withRouter(Result1);
