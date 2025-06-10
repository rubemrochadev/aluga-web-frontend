const Home = () => {
    return (

        <div className="px-[50px] flex justify-between items-center">
            <div className="">
                <div className="flex flex-col gap-[10px] ">
                    <h3 className="text-[30px] font-bold ml-[10px]">Onde você quer morar</h3>
                    <input type="text" className="w-[500px] h-[60px] pl-[30px] border-[#E04300] border-2  rounded-[50px] relative" />
                </div>
                <div className="flex justify-between absolute">
                    <box-icon type='solid' name='map'></box-icon>
                    <button className="">Buscar</button>
                </div>
            </div>
            <img src="src/assets/imgmulher.png" alt="" className="h-[450px] mt-16" />
        </div>

    );
}

export default Home;