import { observer } from "mobx-react-lite";
import { FC, } from "react";
import Header from "../components/Header";
import Footer from "../components/footer";
import MainPageBody from "../components/mainPageBody";

const MainPage: FC = () => {
    return (
        <>
            <Header />
            <MainPageBody />
            <Footer />
        </>
    )
}

export default observer(MainPage)