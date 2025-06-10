
import logo from '../assets/logo.svg';




const Footer = () => {
    return (
        <footer className="py-4 px-[50px] bg-[#DF4300]">
            <div className="px-2 flex justify-between items-center">
                <img src={logo} alt="Logo Aluga Web" />
                <span className="text-gray-500 text-sm">Todos os direitos reservados.</span>
            </div>
        </footer>
    );
}

export default Footer;






