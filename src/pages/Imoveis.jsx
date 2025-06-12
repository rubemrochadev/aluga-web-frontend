
import Card from "../components/Cards";
import Filtro from "../components/Filtro";
import Pesquisa from "../components/Pesquisa";
import Abas from "../components/Abas";
import QuantidadeBanheiros from "../components/QuantidadeBanheiros";
import QuantidadeGaragens from "../components/QuantidadeGaragens";
import QuantidadeQuartos from "../components/QuantidadeQuartos";
import TiposImovel from "../components/TiposImovel";

const Imoveis = () => {
    return (
        <main>
            <div className="px-[30px] flex ">
                <div className="flex flex-col py-8 gap-4" >
                    <Filtro />
                    <div className="border-[#00000026] border rounded-lg">
                        <Abas />
                        <TiposImovel />
                        <QuantidadeGaragens />
                        <QuantidadeQuartos />
                        <QuantidadeBanheiros />
                    </div>
                </div>
                <div className="px-4">
                    <Pesquisa />
                    <Card />
                </div>
            </div>
        </main>
    );
}

export default Imoveis;











