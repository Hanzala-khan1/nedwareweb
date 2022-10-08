import React from 'react'
import style from '../contact us/contact.module.css'

function Contact() {
    return (
        <>
            <section className={style.contact} id="contact">
            <div className={style.headmain}>
                <h1 className={style.heading}> Contact Us</h1>
            </div>
            <div className={style.mainsec}>
                <div className={style.info}>
                    <h1 className={style.mainh}> Get in Touch </h1>
                    <p className={style.mainp}> you can contact us through facebook email or send your message here <br/> we will contact you</p>
                    <div className={style.infomain}>
                        <div className={style.cdm}>
                        <h3>Name :</h3> 
                           <p>NEDWARE</p>
                        </div>
                        <div className={style.cdm}>
                            <h3>Location : </h3> 
                             <p> islambad</p>
                        </div>
                        <div className={style.cdm}>
                            <h3>Email :</h3> 
                             <p>nedware@gmail.com</p>
                        </div>
                    </div>

                </div>
                <div className={style.form}>
                <h1 className={style.formhead}> Message Us</h1>
                    <form className={style.cform}>
                        <div className={style.input2}>
                            <input type="text" className={style.input} placeholder='Name'></input>
                            <input type="email" className={style.input} placeholder='Email'></input>
                        </div>
                        <div className={style.input2}>
                            <input type="phone" className={style.input} placeholder='Phone'></input>
                            <input type="subject" className={style.input} placeholder='Subject'></input>
                        </div>
                        <div className={style.textinput}>
                            <textarea className={style.text} placeholder='Your Message'></textarea>
                        </div>
                        <button className={style.button}> submit</button>
                    </form>

                </div>
                </div>

            </section>

        </>
    )
}

export default Contact
