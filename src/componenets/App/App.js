import React from 'react'
import Card from '../Card'
import Header from '../Header'
import Slider from '../Slider'
import style from './App.module.scss'

const App = () => {
  return (
    <div className={style.wrapper}>
      <Header />
      <Slider />
      <div className={style.search}>
        <h2>All music</h2>
        <div className={style.inp}>
          <img style={{paddingLeft: '1px'}} width={14} height={14} src='./images/lupe.svg' alt='lupe' />
          <input type='text' placeholder='Search...'></input>
        </div>
      </div>
      <Card />
    </div>
  );
}

export default App;
