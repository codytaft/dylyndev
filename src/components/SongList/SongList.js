import React from 'react';
import songListStyles from './SongList.module.scss'

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
        </li>
      ))}
    </ul>
   );
}
 
export default SongList;