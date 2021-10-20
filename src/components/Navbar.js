import React, { Component } from 'react';
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    return (
    <nav className="navbar navbar-light bg-dark">
        <a className="navbar-brand text-light" href="#">
            <img src="icons/movie2.png" width="30" height="30" alt=""/> Filmando
        </a>
    </nav>

    );
}

export default Navbar;