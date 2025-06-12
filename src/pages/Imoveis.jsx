import Abas from "../components/Abas";
import QuantidadeBanheiros from "../components/QuantidadeBanheiros";
import QuantidadeGaragens from "../components/QuantidadeGaragens";
import QuantidadeQuartos from "../components/QuantidadeQuartos";
import TiposImovel from "../components/TiposImovel";

const Imoveis = () => {
    return (
        <main>
            <div className="px-[30px] py-[50px]">
                <div className="border-[#00000026] border rounded-lg">
                    <TiposImovel />
                    <Abas />
                    <QuantidadeGaragens />
                    <QuantidadeQuartos />
                    <QuantidadeBanheiros />
                </div>
                <div>
                </div>
            </div>
        </main>
    );
}

export default Imoveis;











