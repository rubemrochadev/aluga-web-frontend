import { useState } from "react";

const TiposImovel = () => {
    const [selected, setSelected] = useState(1);
    return (
        <div className="px-20 p-4 w-[390px] flex flex-col  ">
            <h6 className="p-4 text-[16px] font-bold ml-[10px]">Tipo de imóveis</h6>
            <div className="flex gap-6">
                {/* <button className="p-3 flex flex-col items-center gap-[2px] w-[75px] h-[75px] rounded-[10px] bg-[#E04300] text-white cursor-pointer" >
                    <box-icon name='home' color="white"></box-icon>               Casa
                </button>
                
                <button className="w-[109px] h-[75px] rounded-[10px] bg-[#E0430070] text-orange-700 cursor-pointer"><box-icon name='buildings' color="#E04300"></box-icon>Apartamento
                </button> */}
                {[1, 2].map((num) => (
                    <button
                        key={num}
                        onClick={() => setSelected(num)}
                        className={`px-4 py-1 rounded-[8px] text-lg font-medium border text-white cursor-pointer`}
                        style={{
                            backgroundColor: selected === num ? "#E04300" : "#E0430033",
                            borderColor: selected === num ? "#E04300" : "#E0430033",
                        }}
                    >
                        {
                            (num == 2) ? (
                                <>
                                    <box-icon name='buildings' color="white"></box-icon>
                                    Apartamento
                                </>
                            ) : <>
                                <box-icon name='home' color="white"></box-icon>
                                Casa

                            </>
                        }
                    </button>
                ))}


            </div>
        </div>
    );
}

export default TiposImovel
