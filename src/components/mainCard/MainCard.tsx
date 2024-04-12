import s from './mainCard.module.css'
import { getDataPage, getIconPage } from '../features/features';
const MainCard = (props : PostsArray) => {



    return (
        <>
            <div className={s.container}>
                <h1>Сегодня: {getDataPage(props.props.dt_txt)} </h1>
                <div className={s.content}>
                    <div className={s.main_content}>
                        <img src={getIconPage(props.props.weather[0].icon)} alt="logo" className={s.image} />
                        <div className={s.weather}>
                            <h1>{Math.ceil(props.props.main.temp)} ℃</h1>
                            <h3> {props.props.weather[0].description}</h3>
                        </div>
                    </div>
                    <div className={s.other_content}>
                        <h3>Подробно:</h3>
                        <p>Максимальная температура: <span>{Math.ceil(props.props.main.temp_max)} </span> ℃</p>
                        <p>Минимальная температура: <span>{Math.ceil(props.props.main.temp_min)}</span> ℃</p>
                        <p>Скорость ветра: <span> {Math.ceil(props.props.wind.speed)} </span> м/с</p>
                        <p>Влажность: <span>{Math.ceil(props.props.main.humidity)} </span> %</p>
                        <p>Облачность: <span> {Math.ceil(props.props.clouds.all)}</span> %</p>

                    </div>
                </div>
            </div>
        </>
    )
}

export default MainCard
