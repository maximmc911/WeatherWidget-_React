import React from 'react'
import s from './style/cards.module.css'
import Card from './Card'
const Cards = (props) => {
  return (
    <>
    <div className={s.container}>
        <Card props ={[]}/>
        <Card props ={[]}/>
        <Card props ={[]}/>
        <Card props ={[]}/>
    </div>
    </>
  )
}

export default Cards