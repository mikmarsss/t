import React, { FC, useState } from "react";
import { Link } from 'react-router-dom';
import { Context } from "..";
import { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import Header from "./Header";
import Footer from "./footer";
import Image from "./image";
import vkImage from '../images/VK Logo.svg'
import logoGoogle from '../images/LogoGoogle.svg'
import yandexLogo from '../images/YandexLogo.svg'
import styles from '../css/vhod.module.css'

const LoginForm: FC = () => {
    const [email, setEmail] = useState<string>('')
    const { store } = useContext(Context)
    const [password, setPassword] = useState<string>('')
    return (
        <>
            <Header />
            <div>
                <main className={styles.mainscreen}>
                    <div className={styles.reg}>
                        <div className={styles.regwindow}>
                            <Link to="/" id="vhod-exit" className={styles.vhodexit}>
                                ✕
                            </Link>

                            <div>
                                <input
                                    type="email"
                                    className={styles.input}
                                    placeholder="Email"
                                    onChange={e => setEmail(e.target.value)}
                                    value={email} />
                            </div>

                            <div>
                                <input
                                    type="password"
                                    className={styles.input}
                                    placeholder="Password"
                                    onChange={e => setPassword(e.target.value)}
                                    value={password} />
                            </div>
                            <div className={styles.socialnetwork}>
                                <div className="vk">
                                    <Link to="" >
                                        <Image image={vkImage} />
                                    </Link>
                                </div>
                                <div className="Google">
                                    <Link to="">
                                        <Image image={logoGoogle} />
                                    </Link>
                                </div>
                                <div className="Yandex">
                                    <Link to="">
                                        <Image image={yandexLogo} />
                                    </Link>
                                </div>
                            </div>

                            <div>
                                <Link to="/" id="vhod-exit" className={styles.regmyButton}
                                    onClick={() => store.login(email, password)}>
                                    Войти
                                </Link>

                            </div>
                        </div>
                    </div>
                </main >
            </div >
            <Footer />
        </>
    )
}

export default observer(LoginForm)