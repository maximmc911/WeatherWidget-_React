import React from 'react'
import s from './mainCard.module.css'
const MainCard = (props) => {
  return (
    <>
    <div className={s.container}>
        <h1>Сегодня 1 мая 2024 г </h1>
        <div className={s.content}>
            <div className={s.main_content}>
                <img src="" alt="logo" />
                <div className={s.weather}>
                    <h1>27 ℃</h1>
                    <h3> переменная облачность</h3>
                </div>
                <h1></h1>
            </div>
            <div className={s.other_content}>
                <h3>Подробно:</h3>
                <p>Температура: <span>13.07 </span> ℃</p>
                <p>Минимальная температура: <span>13.07 </span> ℃</p>
                <p>Максимальная температура: <span>13.07 </span> ℃</p>            
                <p>Скорость ветра: <span> 3.63 </span> м/с</p>
                <p>Влажность: <span>13.07 </span> %</p>
                <p>Осадки: <span>13.07 </span> ℃</p>
                <p>Максимальная температура: <span> переменная облачность</span></p>
                <p>Облачность: <span>15</span> %</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default MainCard
