import React from 'react';
import movies from "../data/criterionMovies.json"
import styles from './styles/criterion.module.scss'

const CriterionPage = () => {
  const movieNumber =  Math.floor(Math.random() * Math.floor(movies.length));
  const movie = movies[movieNumber]

  return ( 
    <div className={styles.body}>
      <h1 className={styles.title}>Watch This</h1>
      <div className={styles.movie}>
        <h3>{movie.title}</h3>
        <h4>by</h4>
        <h3>{movie.director}</h3>
      </div>
    </div>
   );
}
 
export default CriterionPage;