import React from 'react'
import style from '../about/about.module.css'
import img from '../images/pic3.jpg'

function About() {
  return (
    <>
      <section className={style.about} id="about">
        <h1 className={style.mainheading}>
          ABOUT US
        </h1>
        <div className={style.content}>
        <div className={style.img}>
            <img className={style.imageoffice} src={img} />

          </div>
          <div className={style.main}>

            <h1 className={style.mainh}>
              Leading the way in Creative Digital Agency
            </h1>
            <p className={style.mainp}>
              Best Digital Agency in the WorldWe provide marketing services to startups and small businesses to looking for a partner of their digital media, design & development, lead generation and communications requirents. We work with you, not for you. Although we have a great resources.We are an experienced and talented team of passionate consultants who live and breathe search engine marketing.
            </p>

          </div>
          
        </div>


      </section>

    </>
  )
}

export default About
