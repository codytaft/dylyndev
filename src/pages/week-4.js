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
      submitter: 'Yvonne',
      artist: 'Babyface',
      song: 'How Come, How Long',
      link: 'https://youtu.be/lBPEkEOUUp0',
    },
    {
      submitter: 'Angelo',
      artist: 'Derek Webb',
      song: 'Jena & jimmy',
      link: 'https://youtu.be/yg0_8ZvzWIw',
    },
    {
      submitter: 'Cody',
      artist: 'Erykah Badu',
      song: 'Soldier',
      link: 'https://www.youtube.com/watch?v=wzMPaGS4-AY',
    },
    {
      submitter: 'Ambree',
      artist: 'Florence + The Machine',
      song: 'You\'ve Got the Love',
      link: 'https://youtu.be/PQZhN65vq9E',
    },
    {
      submitter: 'Ofelia',
      artist: 'Zach Williams',
      song: 'Rescue Story',
      link: 'https://youtu.be/9Yr48Berkqc',
    },
    {
      submitter: 'Mingo',
      artist: 'David Ramirez ',
      song: 'Stick Around',
      link: 'https://youtu.be/oV0Vi658byo',
    },
    {
      submitter: 'Pedro',
      artist: 'Tommy Tutone',
      song: 'The Grifter\'s Prayer',
      link: 'https://m.youtube.com/watch?v=5xvHLx290xw',
    },
    {
      submitter: 'Diana',
      artist: 'Neil Young',
      song: 'Heart of Gold',
      link: 'https://m.youtube.com/watch?v=X3IA6pIVank',
    },
  ];
  return (
    <Layout>
      <SEO title="Week Four" />
      <h1>Week 4</h1>
      <SongList songs={songs}/>
      <Link to="/" className={styles.link}>Go Home</Link>
    </Layout>
  )
}

export default SecondPage
