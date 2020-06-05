// Gatsby supports TypeScript natively!
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SongList from '../components/SongList/index'
import styles from './styles/week.module.scss'

const SecondPage = () => {
  const songs = [
    {
      submitter: 'Diana',
      artist: 'Sixto Rodriguez,',
      song: 'Cause',
      link: 'https://m.youtube.com/watch?v=oKFkc19T3Dk&list=RDoKFkc19T3Dk&start_radio=1',
    },
    {
      submitter: 'Yvonne',
      artist: 'Brian Adams',
      song: 'Have You Ever Really',
      link: 'https://youtu.be/hq2KgzKETBw',
    },
    {
      submitter: 'Angelo',
      artist: 'John Mayer',
      song: 'Stop This Train',
      link: 'https://youtu.be/mS2o4q7vRFM',
    },
    {
      submitter: 'Ambree',
      artist: 'Jon Bellion',
      song: 'Stupid Deep',
      link: 'https://www.youtube.com/watch?v=EtlZV2EaZBQ&feature=youtu.be',
    },
    {
      submitter: 'Cody',
      artist: 'Bob Dylan',
      song: 'Black Diamond Bay',
      link: 'https://www.youtube.com/watch?v=WhENzrnToiU',
    },
    {
      submitter: 'Pedro',
      artist: 'Edie Brickell & New Bohemians',
      song: 'Nothing',
      link: 'https://m.youtube.com/watch?v=eJOAz7zdKKo&list=RDeJOAz7zdKKo&start_radio=1',
    },
    {
      submitter: 'Ofelia',
      artist: '',
      song: '',
      link: '',
    },
  ];
  return (
    <Layout>
      <SEO title="Week One" />
      <h1>Week 1</h1>
      <SongList songs={songs}/>
      <Link to="/" className={styles.link}>Go Home</Link>
    </Layout>
  )
}

export default SecondPage
