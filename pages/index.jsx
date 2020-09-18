/* eslint-disable react/jsx-one-expression-per-line */
// Dependencies
import React from 'react';

const Index = () => (
  <div className="container">
    <h1>Home Page</h1>
    <p>Bulbasaur is here</p>
    <img src="/001.gif" alt="pokemon-001" />
    <style jsx>
      {`
        .container {
          background-color: #20313C;
          color: white;
          font-family: 'Roboto';
        }
        div {
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          height: 100vh;
          margin: auto 0;
        }
        img {
          display: block;
          margin: 0 auto;
        }
      `}
    </style>
    <style global jsx>
      {`
        body {
          margin: 0!important;
        }
      `}
    </style>
  </div>
);

export default Index;
