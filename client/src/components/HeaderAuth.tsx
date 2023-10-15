
import React, { FC, } from "react";
import Image from "./image";
import logo from '../images/logo.svg'
import {
    Link,
} from "react-router-dom";
import { Context } from "..";
import { useContext } from 'react';
import { observer } from "mobx-react-lite";
import styles from '../css/authHead.module.css'


const HeaderAuth: FC = () => {
    const { store } = useContext(Context)
    return (
        <div className={styles.head}>
            <div className={styles.logo}>
                <Image image={logo} alt="" />
            </div>
            <div className={styles.novigation}>
                <div className={styles.dropdown}>
                    <button className={`${styles.navbar} ${styles.dropbtn}`} id="vhod-button">КУРСЫ</button>
                    <div className={styles.dropdowncontent}>
                        <a href="courses-catalog.html">Учиться</a>
                        <a href="create-course.html">Создать</a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={`${styles.navbar} ${styles.dropbtn}`} id="reg-button">РАБОТА</button>
                    <div className={styles.dropdowncontent}>
                        <a href="#1">Фриланс</a>
                        <a href="#1">Работа</a>
                    </div>
                </div>
                <div className={styles.profile}>
                    <button className={styles.navbar} id="reg-button">ADMIN</button>
                </div>
                <div className={styles.profile}>
                    <button className={styles.navbar} onClick={() => store.logout()}>Выйти
                    </button>
                </div>
            </div>
        </div>
    )
}

export default observer(HeaderAuth)