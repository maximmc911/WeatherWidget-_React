import React from 'react'
import s from './style/card.module.css'
const Card = () => {
  return (
    <>
    <div className={s.container}>
        <h3>23 января 2024</h3>
        <img src="" alt="logo" />
        <p> 27 ℃</p>
        <p> переменная облачность</p>
    </div>
    </>
  )
}

export default Card