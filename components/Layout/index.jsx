/* eslint-disable jsx-a11y/anchor-is-valid */
// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Head from 'next/head';

export const Layout = ({ children, title }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width-device-width, initial-scale=1" />
    </Head>
    <header><Link href="/"><a>Podcast</a></Link></header>
    {children}
    <style jsx>
      {`
        header {
          color: #333333;
          background: #A2F6A6;
          padding: 15px;
          text-align: center;
          font-weight: 700;
        }

        header a {
          color: #fff;
          text-decoration: none;
        }
      `}
    </style>
    <style global jsx>
      {`
        body {
          margin: 0!important;
          font-family: system-ui;
          background: white;
        }
      `}
    </style>
  </div>
);

Layout.propTypes = {
  children: PropTypes.element,
  title: PropTypes.string
};
