// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import 'isomorphic-fetch';

const Home = ({ channels }) => (
  <div className="container">
    <header>Podcast</header>
    <div className="channels">
      {channels.map(channel => (
        <div className="channel">
          <img src={channel.urls.logo_image.original} alt={channel.title} />
          <h2>{channel.title}</h2>
        </div>
      ))}
    </div>
    <style jsx>
      {`
        header {
          color: #333333;
          background: #A2F6A6;
          padding: 15px;
          text-align: center;
          font-weight: 700;
        }

        .container {
          background-color: #20313C;
          color: white;
          font-family: 'Roboto';
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .channels {
          display: grid;
          grid-gap: 15px;
          padding: 15px;
          grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
        }

        .channel {
          display: block;
          margin-bottom: 0.5em;
        }

        .channel img {
          border-radius: 3px;
          width: 100%;
        }

        .channel h2 {
          padding: 5px;
          font-size: 0.9em;
          font-weight: 600;
          margin: 0;
          text-align: center;
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

Home.propTypes = {
  channels: PropTypes.arrayOf(PropTypes.object)
};

export async function getServerSideProps() {
  const req = await fetch('https://api.audioboom.com/channels/recommended');
  const { body: channels } = await req.json();
  return { props: { channels } };
}

export default Home;
