import { motion, AnimatePresence } from 'framer-motion'
import { FC, useState } from 'react'
import styles from '../css/mainPage.module.css'
import { DopCoursesBox } from './dopCoursesBox'


export const CoursesBox: FC = (props) => {
    const [isVisible, setVisible] = useState(false)
    const handleVisibility = () => setVisible(!isVisible)
    return (
        <>
            <div className={styles.courses}>
                <button className={styles.coursesBox} onClick={handleVisibility}>

                </button>

                <button className={styles.coursesBox} onClick={handleVisibility}>

                </button>

                <button className={styles.coursesBox} onClick={handleVisibility}>

                </button>

                <button className={styles.coursesBox} onClick={handleVisibility}>

                </button>

                <button className={styles.coursesBox} onClick={handleVisibility}>

                </button>

                <button className={styles.coursesBox} onClick={handleVisibility}>

                </button>

                <button className={styles.coursesBox} onClick={handleVisibility}>

                </button>

                <button className={styles.coursesBox} onClick={handleVisibility}>

                </button>
            </div>
            <AnimatePresence>
                {
                    isVisible && <motion.div
                        initial={{

                        }}
                        animate={{

                        }}
                        exit={{

                        }}
                        style={{

                        }}
                        transition={{

                        }}
                    >
                        <div>
                            <DopCoursesBox />
                        </div>
                    </motion.div>
                }
            </AnimatePresence >
        </>
    )
}