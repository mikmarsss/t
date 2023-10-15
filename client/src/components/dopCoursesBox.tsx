import { FC } from "react"

import styles from '../css/mainPage.module.css'




export const DopCoursesBox: FC = () => {
    return (
        <>
            <div className={styles.coursesListBox}>
                <div className={styles.coursesBoxdop}>

                </div>
                <div className={styles.coursesBoxdop}>

                </div>
                <div className={styles.coursesBoxdop}>

                </div>
                <div className={styles.coursesBoxdop}>

                </div>
                <button id="vhod-exit" className={styles.vhodexit}>
                    ✕
                </button>
            </div>
        </>
    )
}