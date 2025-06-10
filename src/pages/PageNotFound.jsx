import { Link } from "react-router";

const PageNotFound = () => {
    return (
        <>
            <h1>Pagina nao encontrada</h1>
            <Link to={-1}>VOLTAR</Link>
        </>
    );
}

export default PageNotFound;