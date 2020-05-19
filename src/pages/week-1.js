// Gatsby supports TypeScript natively!
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SongList from '../components/SongList/index'
import styles from './styles/week-1.module.scss'

const SecondPage = () => {
  const songs = [
    {
      submitter: 'Ambree',
      artist: 'Death Cab For Cutie',
      song: 'Soul Meets Body',
      link: 'https://youtu.be/Yr6mVfl_klE',
    },
    {
      submitter: 'Yvonne',
      artist: 'Annie Lennox',
      song: 'Wonderful',
      link: 'https://youtu.be/6E8ahar1bUI',
    },
    {
      submitter: 'Ophelia',
      artist: 'Chris Tomlin',
      song: 'Is He Worthy',
      link: 'https://youtu.be/-c6pl6CaiD0',
    },
    {
      submitter: 'Angelo',
      artist: 'Metallica',
      song: 'My Friend of Misery',
      link: 'https://youtu.be/xrQiFncPvcg',
    },
    {
      submitter: 'Cody',
      artist: 'Radiohead',
      song: 'The Numbers',
      link: 'https://youtu.be/Ti6qhk3tX2s',
    },
    {
      submitter: 'Pedro',
      artist: 'Big Wreck',
      song: 'Blown Wide Open',
      link: 'https://m.youtube.com/watch?v=8LIS8PyOYSQ',
    },
    {
      submitter: 'Diana',
      artist: 'Sigur Ros',
      song: 'Hoppipolla',
      link: 'https://www.youtube.com/watch?v=hnAwPeqrdAk',
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
