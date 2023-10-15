import React, { FC } from "react";
import Image from "./image";
import logo from '../images/logo.svg'
import {
    Link,
} from "react-router-dom";
import styles from '../css/header.module.css'



const Header: FC = () => {
    return (
        <>

            <div className={styles.head}>
                <div className={styles.logo}>
                    <Image image={logo} />
                </div>
                <div className={styles.novigation}>
                    <div className={styles.dropdown}>
                        <button className={`${styles.navbarAuth} ${styles.dropbtn}`} id="vhod-button">КУРСЫ</button>
                        <div className={styles.dropdowncontent}>
                            <a href="courses-catalog.html">Учиться</a>
                            <a href="create-course.html">Создать</a>
                        </div>
                    </div>
                    <div className={styles.dropdown}>
                        <button className={`${styles.navbarAuth} ${styles.dropbtn}`} id="reg-button">РАБОТА</button>
                        <div className={styles.dropdowncontent}>
                            <a href="#1">Фриланс</a>
                            <a href="#1">Работа</a>
                        </div>
                    </div>
                    <div>
                        <Link to="/LoginForm" className={styles.navbar} id="reg-button">Вход</Link>
                    </div>
                    <div>
                        <Link to="/RegistrationForm" className={styles.navbar} id="reg-button">Регистрация</Link>
                    </div>
                </div>
            </div>
        </>)
}


export default Header
