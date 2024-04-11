import s from './widget.module.css'
import MainCard from './mainCard/MainCard'
import Cards from './miniCards/Cards'
import {Loader} from './loader/Loader'
import { useState } from 'react'
const Widget = () => {
  const [LoaderOpen, setLoaderOpen] = useState(true);
  
  return (
    <>
    {
      LoaderOpen ?

   ( <div className={s.container}>
<div className={s.widget}>
  <div className={s.search}>
    <input type="text" className={s.input}/>
    <button className={s.btn}>Найти</button>
  </div>
<MainCard props={[]}/>
<Cards props={[]}/>
</div>
    </div>) 
    :
   <Loader/>
    }
    </>
  )
}

export default Widget