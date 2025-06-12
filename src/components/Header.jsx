import { useContext } from 'react';
import logo from '../assets/logo.png';
import { UsuarioContext } from '../contexts/UsuarioContext';

const { logado } = useContext(UsuarioContext)

const Header = () => {


    return (
        <header className="py-4 px-[50px] border-b border-[#00000026] ">
            <nav className="px-2 flex justify-between items-center">
                <div className="flex items-center cursor-pointer ">
                    <div className="">
                        <img src={logo} alt="Logo Aluga Web" />

                    </div>
                </div>
                {
                    logado ? (
                        <div className='flex'>
                            <h4>nome</h4>
                            <button className='border-black border'><img src="" alt="" /></button>
                        </div>

                    ) :
                        <>
                            <a href='/login' className="flex items-center cursor-pointer bg-orange-100 text-orange-600 px-4 py-2 rounded-md font-medium hover:bg-orange-200 duration-700">
                                <box-icon name='user' color='#e65100'></box-icon>
                                <span>Entrar</span>
                            </a>
                        </>
                }
            </nav>
        </header>
    );
};

export default Header;
