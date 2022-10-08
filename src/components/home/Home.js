import React from 'react'
import style from '../home/home.module.css'

function Home() {
  return (
    <>
    <section className={style.home} id="home">
    <h1 className={style.mainheading}>NEDWARE HUB</h1>
    <h1 className={style.secheading}>PROVIDING SOLUTIONS</h1>
    <p className={style.parades}>are u starting out a new business and confused? <br/>or is your business stuck lets stuck</p>
    <button className={style.button}>we can help you</button>

    </section>
      
    </>
  )
}

export default Home;
