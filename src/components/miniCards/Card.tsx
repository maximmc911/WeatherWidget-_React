import s from './style/card.module.css'
import { Button } from '../UI/button/Button'
import { getDataPage, getIconPage } from '../features/features'
import { useState } from 'react'
const Card = (props : PostsArray) => {
  const [Open, setOpen] = useState(true)
  return (
    <>
      <div className={s.container}>
        <h4 style={{ fontSize: `15px` }}>{getDataPage(props.props.dt_txt)}</h4>
        {Open ?
          (<div>
            <img src={getIconPage(props.props.weather[0].icon)} alt="logo" style={{ width: `50px` }} />
            <p> {Math.ceil(props.props.main.temp)} ℃</p>
            <p> {props.props.weather[0].description}</p>
            <div style={{ marginTop: `5px` }} onClick={() => setOpen(false)}>

              <Button props={`Подробнее`} />
            </div>
          </div>) :
          (<div>

            <h3>Подробно:</h3>
            <p>Максимальная температура: <span>{Math.ceil(props.props.main.temp_max)} </span> ℃</p>
            <p>Минимальная температура: <span>{Math.ceil(props.props.main.temp_min)}</span> ℃</p>
            <p>Скорость ветра: <span> {Math.ceil(props.props.wind.speed)} </span> м/с</p>
            <p>Влажность: <span>{Math.ceil(props.props.main.humidity)} </span> %</p>
            <p>Облачность: <span> {Math.ceil(props.props.clouds.all)}</span> %</p>
            <div style={{ marginTop: `5px` }} onClick={() => setOpen(true)}>

              <Button props={`Подробнее`} />
            </div>
          </div>)}

      </div>

    </>
  )
}

export default Card