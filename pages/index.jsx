/* eslint-disable jsx-a11y/anchor-is-valid */
// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import 'isomorphic-fetch';

// Components
import { Layout } from '../components/Layout';
import { ChannelGrid } from '../components/ChannelGrid';

// Utils
import { uniqueArrayOfObjects } from '../utils';

const Home = ({ channels }) => {
  const newChannels = uniqueArrayOfObjects(channels);

  return (
    <Layout title="Podcast">
      <ChannelGrid channels={newChannels} />
    </Layout>
  );
};

Home.propTypes = {
  channels: PropTypes.arrayOf(PropTypes.object)
};

export async function getServerSideProps() {
  const req = await fetch('https://api.audioboom.com/channels/recommended');
  const { body: channels } = await req.json();
  return { props: { channels } };
}

export default Home;
