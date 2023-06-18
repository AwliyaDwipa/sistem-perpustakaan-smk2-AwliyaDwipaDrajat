import logo from '../assets/logo.png'

const Footer = () => {
    return ( 
        <>
            <div className="w-full drop-shadow-2xl
             bg-[#2189d6] bg-opacity-70 backdrop-blur-lg flex items-center">
                <div className="flex flex-col w-1/3 mx-[40px] my-[25px]">
                    <ul className="text-[#213555]  text-xl font-semibold ">
                        <li><a href="">Tautan</a></li>
                        <li><a href="">Tautan</a></li>
                        <li><a href="">Tautan</a></li>
                    </ul>
                </div>
                <div className="w-1/3 flex flex-col mx-[40px] my-[25px]">
                    <h1 className="font-bold text-[#213555] text-2xl text-center">Kantor Utama</h1>
                    <p className="font-semibold text-[#213555] my-[15px]">Jl. Pelajar Pejuang 45 No.65,Lkr. Sel.,Lengkong,Kota Bandung,Jawa Barat 40263 <br /> Lkr. Sel., Kec. Lengkong, Kota Bandung, Jawa Barat 40264</p>
                    <p><span className="font-bold text-[#213555]">Nomer Telfon (Kantor Utama)</span>: (022) 7351 6650</p>
                    <p><span className="font-bold text-[#213555]">Email</span> : pt.lskk@gmail.com</p>
                </div>
                <div className="w-1/3 items-center flex flex-col">
                    <img src={logo} alt="" className="w-[100px]" />
                    <h1 className="text-4xl text-[#213555] font-bold">LSKK</h1>
                </div>
            </div>
        </>
     );
}
 
export default Footer;