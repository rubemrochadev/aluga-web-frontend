
import { useState } from "react";

const QuantidadeQuartos = () => {
  const [selected, setSelected] = useState(1); // Começa com "+1" selecionado


  return (
    <div className="flex flex-col items-start p-6 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Quantidade de quartos</h2>
      <div className="flex gap-4">
        {[1, 2, 3, 4].map((num) => (
          <button
            key={num}
            onClick={() => setSelected(num)}
            className={`w-[72px] h-[54px] rounded-[8px] text-lg font-medium border text-white cursor-pointer`}
            style={{
              backgroundColor: selected === num ? "#E04300" : "#E0430033",
              borderColor: selected === num ? "#E04300" : "#E0430033",
            }}
          >
            +{num}
          </button>
        ))}
      </div>
    </div>
  );
};



export default QuantidadeQuartos;