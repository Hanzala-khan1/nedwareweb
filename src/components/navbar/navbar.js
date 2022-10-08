import React from 'react';


import style from '../navbar/nav.module.css';
import { NavHashLink as Link } from 'react-router-hash-link';



export default function Navbar() {


    const hamtt = () => {

        const res = document.getElementsByClassName("res")[0]
        res.classList.toggle('active')
    }
    const closenav = () => {
        const res = document.getElementsByClassName("res")[0]
        res.classList.toggle('active')

    }

    return (
        <div>


            <header>
                <div className={style.top}>
                    <div className={style.topright}>
                    {/* <span><FontAwesomeIcon icon="fa-regular fa-circle-phone" /></span> */}
                    <p className={style.contact}> Call : 03176440066</p>

                    </div>
                    <div className={style.topleft}>
                    {/* <i icon="fa-brands fa-square-facebook "  className={style.fb}></i> */}
                    <p className={style.contact}> Email : nedwarehub@gmail.com</p>

                    </div>
                </div>
                <hr  className={style.hr}/>
                <nav className={style.navbar1} >
                    <div className={style.logo}>
                        <h1 className={style.mainhl}>NEDWARE</h1>

                    </div>
                    <div className={style.menubar}>
                        <ul className="res">
                            <li> <Link onClick={closenav} to="#home" className={style.lin}>Home</Link> </li>
                            <li><Link onClick={closenav} to="#about" className={style.lin}>About</Link> </li>
                           
                            <li><Link onClick={closenav} to="#services" className={style.lin}>Services</Link> </li>
                            <li><Link onClick={closenav} to="#contact" className={style.lin}>Contact Us</Link> </li>

                        </ul>
                    </div>
                    <div className={style.ham} onClick={hamtt}>
                        <i className={style.h}> </i>
                        <i className={style.h}> </i>
                        <i className={style.h}> </i>
                    </div>

                </nav>

            </header>

        </div>
    )
}