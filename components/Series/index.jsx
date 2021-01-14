/* eslint-disable jsx-a11y/anchor-is-valid */
// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Next
import Link from 'next/link';

export const Series = ({ series }) => (
  <>
    <div className="channels">
      {series.map((serie) => (
        <Link href={`/channel?id=${serie.id}`} prefetch>
          <a className="channel">
            <img src={serie.urls.logo_image.original} alt="" />
            <h2>{ serie.title }</h2>
          </a>
        </Link>
      ))}
    </div>
    <style jsx>
      {`
        .channels {
          display: grid;
          grid-gap: 15px;
          padding: 15px;
          grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
        }

        a .channel {
          display: block;
          margin-bottom: 0.5em;
          color: #333;
          text-decoration: none;
        }

        .channel img {
          border-radius: 3px;
          box-shadow: 0px 2px 6px rgba(0,0,0,0.15);
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
  </>
);

Series.propTypes = {
  series: PropTypes.arrayOf(PropTypes.object)
};
