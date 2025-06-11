
const Pesquisa = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <nav className="flex items-center text-gray-500 text-sm gap-1">
                Casas para alugar
                <span className="mx-1">{'>'}</span>
                CE
                <span className="mx-1">{'>'}</span>
                Fortaleza
            </nav>
            <span className="font-bold text-orange-600 text-base ml-2">
                122 Casas para alugar em Fortaleza - CE
            </span>
            <div>
                <label className="block text-xs text-gray-500 mb-1">Ordenar por</label>
                <select className="border rounded px-3 py-1 text-sm text-orange-600 font-semibold" />
                <option>Mais relevantes</option>
            </div>
        </div>

    )
};

export default Pesquisa;