import { Outlet } from "react-router";
import Header from "../Components/Header";

const PageLayout = () => {
    return (
        <>
        <Header />
            <Outlet />
        </>
    );
}

export default PageLayout;