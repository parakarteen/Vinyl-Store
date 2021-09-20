import React from 'react'
import Header from '../Header'
import style from './App.module.scss'

const App = () => {
  return (
    <div className={style.wrapper}>
  <div className='container'>
  <Header />
  </div>
    </div>
  );
}

export default App;
