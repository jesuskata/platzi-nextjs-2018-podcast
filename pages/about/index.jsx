// Dependencies
import React from 'react';

const About = () => (
  <div className="container">
    <h1>About Page</h1>
    <p>Charmander is here</p>
    <img src="/004.gif" alt="charmander" />
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

export default About;
