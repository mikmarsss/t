import { observer } from "mobx-react-lite";
import { FC, } from "react";
import HeaderAuth from "../components/HeaderAuth";
import Footer from "../components/footer";
import MainPageBody from "../components/mainPageBody";

const MainPage: FC = () => {
    return (
        <>
            <HeaderAuth />
            <MainPageBody />
            <Footer />
        </>
    )
}

export default observer(MainPage)