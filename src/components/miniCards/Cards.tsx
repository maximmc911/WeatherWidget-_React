import React from 'react'
import s from './style/cards.module.css'
import Card from './Card'
const Cards = (props : PostsArray) => {

  return (
    <>
      <div className={s.container}>
        {
          props.props.map((e, index: React.Key | null | undefined) =>
            <div key={index}>
              <Card props={e} userId={0} id={0} title={''} body={''} />
            </div>
          )
        }

      </div>
    </>
  )
}

export default Cards