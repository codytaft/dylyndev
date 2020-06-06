import React from 'react';
import songListStyles from './SongList.module.scss'
import ReactAudioPlayer from 'react-audio-player';

const SongList = ({songs}) => {
  return ( 
  <ul>
      {songs.map(song => (
        <li className={songListStyles.listItem}>
          <p className={songListStyles.submitter}>
            {song.submitter}
          </p>
          <div className={songListStyles.song}>
            {song.artist}  |  <a href={song.link} className={songListStyles.link}>{song.song}</a>
          </div>
          {song.audio && <ReactAudioPlayer
            src={song.audio}
            autoPlay
            controls
          />}
        </li>
      ))}
    </ul>
   );
}
 
export default SongList;