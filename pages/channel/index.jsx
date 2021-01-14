/* eslint-disable jsx-a11y/anchor-is-valid */
// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Layout } from '../../components/Layout';
import { Series } from '../../components/Series';
import { AudioclipsPodcasts } from '../../components/AudioclipsPodcasts';

const Channel = ({ channel, audioClips, series }) => (
  <Layout title={channel.title}>
    <div className="container">
      <div
        className="banner"
        style={{
          backgroundImage: `url(${channel.urls.banner_image.original})`
        }}
      />
      <h1>{channel.title}</h1>
      {series.length > 0 && (
        <div>
          <h2>Series</h2>
          <Series series={series} />
        </div>
      )}
      <h2>Últimos Podcasts</h2>
      {audioClips.map(clip => (
        <AudioclipsPodcasts clip={clip} />
      ))}
      <style jsx>
        {`
          h1 {
            font-weight: 600;
            padding: 15px;
          }

          h2 {
            padding: 5px;
            font-size: 0.9em;
            font-weight: 600;
            margin: 0;
            text-align: center;
            color: white;
          }

          .banner {
            width: 100%;
            padding-bottom: 25%;
            background-position: 50% 50%;
            background-size: cover;
            background-color: #aaa;
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

          .podcast {
            display: block;
            text-decoration: none;
            color: #333;
            padding: 15px;
            border-bottom: 1px solid rgba(0,0,0,0.2);
            cursor: pointer;
          }

          .podcast:hover {
            color: #000;
          }

          .podcast h3 {
            margin: 0;
            color: white;
          }

          .podcast .meta {
            color: #666;
            margin-top: 0.5em;
            font-size: 0.8em;
          }
        `}
      </style>
    </div>
  </Layout>
);

Channel.propTypes = {
  channel: PropTypes.objectOf(PropTypes.any),
  audioClips: PropTypes.arrayOf(PropTypes.any),
  series: PropTypes.arrayOf(PropTypes.any)
};

export async function getServerSideProps({ query }) {
  const idChannel = query.id;
  const [reqChannel, reqAudios, reqSeries] = await Promise.all([
    fetch(`https://api.audioboom.com/channels/${idChannel}`),
    fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`),
    fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`)
  ]);
  const dataChannel = await reqChannel.json();
  const { channel } = dataChannel.body;

  const dataAudios = await reqAudios.json();
  const audioClips = dataAudios.body.audio_clips;

  const dataSeries = await reqSeries.json();
  const series = dataSeries.body.channels;

  return { props: { channel, audioClips, series } };
}

export default Channel;
