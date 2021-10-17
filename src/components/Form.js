import React, { Component } from 'react';
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Form = () => {
    return (
      <div class="container-fluid bg-light">
        <br/>
        <div class="row text-center">
          <div class="col">
            <h5 style="color: #c62828;">
              Given that the goal of the system is to generate a justification which is
              adapted on the different contexts of consumption, please, answer the following questions<br/>
            </h5>
            <h6>- 1 indicates that you are in total disagreement<br/>- 5 indicates that you are in total agreement </h6>
          </div>
        </div>

        <form action="" method="POST">
          <br/>
          <div class="row justify-content-md-center text-center">

            <div class="col-md-3">
              <div class="slidecontainer">
                <label for="pref1">
                  <h6>I understood why the movie was suggested to me:</h6>
                </label>
                <div align="center" class="font-weight-bold" id="valorepref1">3</div>
                <input type="range" min="1" max="5" value="3" class="slider" id="pref1" name="pref1" 
                      onfocus="coloreRange(this.id)" 
                      onclick="coloreRange(this.id)" onchange="coloreRange(this.id)"/>
              </div>
            </div>

            <div class="col-md-3">
              <div class="slidecontainer">
                <label for="pref2">
                  <h6>The justification made the suggestion more convincing:</h6>
                </label>
                <div align="center" class="font-weight-bold" id="valorepref2">3</div>
                <input type="range" min="1" max="5" value="3" class="slider" id="pref2" name="pref2" 
                      onfocus="coloreRange(this.id)" 
                      onclick="coloreRange(this.id)" onchange="coloreRange(this.id)"/>
              </div>
            </div>

            <div class="col-md-3">
              <div class="slidecontainer">
                <label for="pref3">
                  <h6>The justification allowed me to discover new information about the movie</h6>
                </label>
                <div align="center" class="font-weight-bold" id="valorepref3">3</div>
                <input type="range" min="1" max="5" value="3" class="slider" id="pref3" name="pref3" 
                        onfocus="coloreRange(this.id)" 
                        onclick="coloreRange(this.id)" onchange="coloreRange(this.id)"/>
              </div>
            </div>

            <div class="col-md-3">
              <div class="slidecontainer">
                <label for="pref4">
                  <h6>The justification has increased my level of trust in the recommender system:</h6>
                </label>
                <div align="center" class="font-weight-bold" id="valorepref4">3</div>
                <input type="range" min="1" max="5" value="3" class="slider" id="pref4" name="pref4" 
                      onfocus="coloreRange(this.id)" 
                      onclick="coloreRange(this.id)" onchange="coloreRange(this.id)"/>
              </div>
            </div>

          </div>

          <div class="row justify-content-md-center text-center">
            <div class="col-md-4">
              <button type="submit" name="valutazione1" class="btn btn-primary btn-lg">Send feedback </button>
            </div>
          </div>

        </form>

        <br/>
      </div>

    );
}

export default Form;