import { FC, useState } from "react";
import styles from '../css/mainPage.module.css'
import { motion } from 'framer-motion'
import { CoursesBox } from "./corsesBox";

const MainPageBody: FC = () => {
    const coursesBoxVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1 },
    }
    const [show, setShow] = useState(false)
    const [WShow, setWShow] = useState(false)
    return (

        <div className="main">

            <div className={styles.info}>
                <div>
                    <h1>Начни путь в IT c образовательной экосистемой Spark</h1>
                </div>
                <div className={styles.infobox}>
                    <div className={styles.description}>
                        <h3>О НАС:</h3>
                        <p className={styles.opisanie}>
                            Наша команда ставит перед собой цель помочь начинающим программистам и Junior-разработчикам
                            получить первую работу или заказ на нашей бирже фриланса
                        </p>
                    </div>
                    <div>
                        <div className={styles.description}>
                            <h3>НА НАШЕМ САЙТЕ ВЫ СМОЖЕТЕ:</h3>
                            <p>
                                <ul>
                                    <li><a href="#learn" className={styles.underlineOne}>Учиться</a></li>
                                    <li><a href="#work" className={styles.underlineOne}>Работать</a></li>
                                    <li><a href="#teach" className={styles.underlineOne}>Писать курсы</a></li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className={styles.description}>
                            <h3>МЫ ГАРАНТИРУЕМ:</h3>
                            <p>
                                <ul>
                                    <li>Большое количество практики в курсах</li>
                                    <li>Пополнение портфолио сертификатами и проектами во время обучения на платформе</li>
                                    <li>Качественный и актуальный материал</li>
                                    <li>Модерацию публикуемого контента</li>
                                    <li>Демократичные цены</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.coursesList} id="learn">
                <div className={styles.headingCourses}>
                    <p>ОНЛАЙН КУРСЫ</p>
                </div>

                <div className={styles.learn}>
                    <div className={styles.courses}>
                        <CoursesBox />
                    </div>
                </div>
            </div>
            <div className={styles.workList} id="work">
                <div className={styles.headingWork}>
                    <p>РАБОТА</p>
                </div>
                <div className={styles.learn}>
                    <div className={styles.work}>
                        <button className={styles.workBox} onClick={() => setWShow(!WShow)}>

                        </button>

                        <button className={styles.workBox}>

                        </button>
                        {WShow && < div className={styles.workListBox}>
                            <div className={styles.workBoxdop}>

                            </div>
                            <div className={styles.workBoxdop}>

                            </div>

                            <button id="vhod-exit" className={styles.vhodexit} onClick={() => setWShow(!WShow)}>
                                ✕
                            </button>
                        </div>}
                    </div>
                </div>
            </div>

            <div className={styles.createcoursebox}>
                <div className={styles.teach} id="teach">
                    <p className={styles.workdescription2}>Создавайте любые онлайн-курсы с конструктором Spark</p>
                    <div className={styles.createwindow}>
                        <p>Делитесь знаниями на образовательной
                            платформе, создавая бесплатные курсы или монетизируя свои знания с помощью
                            платных</p>
                        <button className={styles.createcoursebtn} >
                            Писать курсы
                        </button>

                    </div>
                </div>
            </div>

        </div >
    )


}

export default MainPageBody