import React from 'react';

import SongCard from '../SongCard'

const SongList = ({songs}) => {
  return ( 
  <ul>
      {songs.map(song => (
        <SongCard song={song}/>
      ))}
    </ul>
   );
}
 
export default SongList;
