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
      submitter: 'Pedro',
      artist: 'Bad Radio',
      song: 'Homeless',
      link: 'https://m.youtube.com/watch?v=V-Uq3zppOPc',
    },
    {
      submitter: 'Yvonne',
      artist: 'John Mayer',
      song: 'Belief',
      link: 'https://youtu.be/KydLEvIBv0M',
    },
    {
      submitter: 'Cody',
      artist: 'Talking Heads',
      song: 'The Good Thing',
      link: 'https://www.youtube.com/watch?v=c4KFf4J64nc',
    },
    {
      submitter: 'Ofelia',
      artist: 'We the Kingdom',
      song: 'Holy Water',
      link: 'https://youtu.be/7KLQ2AXQmtA',
    },
    {
      submitter: 'Mingo',
      artist: 'Luke Combs',
      song: 'Beer Never Broke My Heart',
      link: 'https://youtu.be/7Lb9dq-JZFI',
    },
    {
      submitter: 'Mingo',
      artist: 'David Ramirez ',
      song: 'Stick Around',
      link: 'https://youtu.be/oV0Vi658byo',
    },
    {
      submitter: 'Angelo',
      artist: '?',
      song: '?',
      link: '?',
    },
    {
      submitter: 'Diana',
      artist: 'The Jeff Healey Band',
      song: 'Angel Eyes',
      link: 'https://m.youtube.com/watch?v=kag0TsZzxpw',
    },
  ];
  return (
    <Layout>
      <SEO title="Week Five" />
      <h1>Week 5</h1>
      <SongList songs={songs}/>
      <Link to="/" className={styles.link}>Go Home</Link>
    </Layout>
  )
}

export default SecondPage
