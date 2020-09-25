// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

const Channel = ({ channel, audioClips, series }) => (
  <div className="container">
    <header>Podcast</header>
    <h1>{channel.title}</h1>
    <h2>Series</h2>
    {series.map(serie => (
      <div key={serie.id}>
        <p>{serie.title}</p>
      </div>
    ))}
    <h2>Últimos Podcasts</h2>
    {audioClips.map(clip => (
      <div key={clip.id}>
        <p>{clip.title}</p>
      </div>
    ))}
    <style jsx>
      {`
        header {
          color: #333333;
          background: #A2F6A6;
          padding: 15px;
          text-align: center;
          font-weight: 700;
        }

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
  </div>
);

Channel.propTypes = {
  channel: PropTypes.objectOf(PropTypes.any),
  audioClips: PropTypes.arrayOf(PropTypes.any),
  series: PropTypes.arrayOf(PropTypes.any)
};

export async function getServerSideProps({ query }) {
  const idChannel = query.id;
  const reqChannel = await fetch(`https://api.audioboom.com/channels/${idChannel}`);
  const dataChannel = await reqChannel.json();
  const { channel } = dataChannel.body;

  const reqAudios = await fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`);
  const dataAudios = await reqAudios.json();
  const audioClips = dataAudios.body.audio_clips;

  const reqSeries = await fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`);
  const dataSeries = await reqSeries.json();
  const series = dataSeries.body.channels;

  return { props: { channel, audioClips, series } };
}

export default Channel;
