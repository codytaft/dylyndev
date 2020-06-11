import React from 'react';
import songCardStyles from './SongCard.module.scss'
import ReactAudioPlayer from 'react-audio-player';
import {Howl} from 'howler';


const SongCard = ({song}) => {

	const sound = new Howl({
		src: [song.mp3 && song.mp3, song.flac && song.flac]
	});

	const handleClick = () => {
		sound.playing() ? sound.pause() : sound.play();
	}
	return ( 
		<li className={songCardStyles.listItem}>
		<p className={songCardStyles.submitter}>
			{song.submitter}
		</p>
		<div className={songCardStyles.song}>
			{song.artist}  |  <a href={song.link} className={songCardStyles.link}>{song.song}</a>
		</div>
		{song.audio && <ReactAudioPlayer
			src={song.audio}
			controls
		/>}
		{(song.mp3 || song.flac) && (
			<div className={songCardStyles.playerButtons}>
				<button onClick={handleClick}>Play</button>
				<button onClick={handleClick}>Pause</button>
			</div>
			)}
	</li>
	 );
}
 
export default SongCard;
