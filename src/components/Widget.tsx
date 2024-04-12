import s from './widget.module.css'
import MainCard from './mainCard/MainCard'
import Cards from './miniCards/Cards'
import { Loader } from './UI/loader/Loader'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { GetUrl } from './db'
import { Button } from './UI/button/Button'

const Widget = () => {
  // hooks
  const [weatherCalendar, setWeatherCalendar] = useState<any>([])
  const [LoaderOpen, setLoaderOpen] = useState<boolean>(false);
  const [Update, setUpdate] = useState<boolean>(false);
  const [Write, setWrite] = useState(``)
  const title = useRef(`москва`)



  // functions



  // Получение данных о погоде
  const GetWeather = async (town: string | null) => {

    try {
      const { data } = await axios.get(GetUrl(town));
      weatherCalendar.push(...data.list.filter((el: { dt_txt: string | string[] }) => el.dt_txt.includes("15:00:00")));
      setLoaderOpen(true);
      setWrite('')
    } catch (error) {
      alert(`Произошел технический сбой`)
    }
  }

  // Получение введенных данных пользователем
  const HandleWrite = (e: ChangeEvent<HTMLInputElement>) => {
    setWrite(e.target.value)
  }

  // Обновление данных после введения пользователем названия города и нажатия на кнопку "Найти"
  const HandleSearch = (): void => {
    setLoaderOpen(false)
    setUpdate(!Update)
    if (Write == '') {

      title.current = `москва`;
    } else {

      title.current = Write;
    }
  }


  useEffect(() => {

    weatherCalendar.length = 0;
    GetWeather(Write);
  }, [Update])


  return (
    <>
      {
        LoaderOpen ?

          (<div className={s.container}>
            <div className={s.widget}>
              <div className={s.search}>
                <input type="text" className={s.input} placeholder='Введите название города' value={Write} onChange={(e) => HandleWrite(e)} />
                <div onClick={() => HandleSearch()}>

                  <Button props={`Найти`} />
                </div>
              </div>
              <h1>Прогноз погоды на 4 дня</h1>
              <h1 style={{ textTransform: `capitalize` }}>{title.current.toLocaleLowerCase()}</h1>
              <MainCard props={weatherCalendar[0]} userId={0} id={0} title={''} body={''} />

              <Cards props={weatherCalendar} userId={0} id={0} title={''} body={''} />
            </div>
          </div>)
          :
          <Loader />
      }
    </>
  )
}

export default Widget

