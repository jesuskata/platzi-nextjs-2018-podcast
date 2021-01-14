/* eslint-disable jsx-a11y/anchor-is-valid */
// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

export const ChannelGrid = ({ channels }) => (
  <div className="container">
    <div className="channels">
      {channels.map(channel => (
        <Link href={`/channel?id=${channel.id}`} key={channel.id}>
          <a className="channel">
            <img src={channel.urls.logo_image.original} alt={channel.title} />
            <h2>{channel.title}</h2>
          </a>
        </Link>
      ))}
    </div>
    <style jsx>
      {`
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

        a {
          text-decoration: none;
        }
        a:link {
          color: white;
        }
        a:visited {
          color: #b3b3b3;
        }
        a:hover {
          color: #A2F6A6;
        }
      `}
    </style>
  </div>
);

ChannelGrid.propTypes = {
  channels: PropTypes.arrayOf(PropTypes.object)
};
