import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Pesquisa from "../pages/Pesquisa";
import Card from "../components/Cards";
import Filtro from "../components/Filtro";

const PageLayout = () => {
    return (
        <>
            <Header />
            <Pesquisa />
            <Card />
            <Filtro />   
            <Outlet />
            <Footer />
        </>
    );
}

export default PageLayout;