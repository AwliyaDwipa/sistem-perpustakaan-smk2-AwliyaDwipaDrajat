import Footer from "../component/footer";
import Nav from "../component/nav";
import picture1 from '../assets/Picture1.png'
import logo from '../assets/logo.png'
import person from '../assets/6736959.jpg'
import { BiBook, BiPen } from "react-icons/bi";
import write from '../assets/infralist-com-UOiNcIb6IWQ-unsplash.jpg'


const Landing = () => {
    return ( 
        <>
            {/* <Nav/> */}
            <div  className=" relative w-full h-screen">
                <div id="hero" className="h-screen"></div>
                <div className="flex flex-row absolute top-0 w-full items-center h-screen ">
                    <div className="w-1/2 flex flex-col items-center">
                        <div className="text-[#213555] text-5xl font-bold translate-y-[-20px]">
                            <h1>SISTEM</h1>
                            <h1>PERPUSTAKAAN</h1>
                        </div>
                    </div>
                    <div className="w-1/2 pb-[20px]">
                        <img src={person} alt="" className="max-w-full" />
                    </div>
                </div>
            </div>
            <div className="w-full bg-[#ffffff] pt-[20px] px-[20px] pb-[50px] bg-opacity-70 my-[25px]  ">
                <div className="flex flex-col">
                    <h1 className=" text-[#213555] font-bold text-[25px] bg-[#2189d6] bg-opacity-70 backdrop-blur-lg w-fit px-[15px] py-[10px] rounded-xl ">SISTEM PERPUSTAKAAN</h1>
                    <div className="w-full flex justify-center my-[20px]  ">
                        <img src={picture1} alt="" className="max-w-full shadow-xl  rounded-xl" />
                    </div>
                    <div className="w-full flex gap-5 flex-row">
                        <div className=" w-1/2 text-[#213555] font-semibold text-[25px] px-[15px] py-[10px] rounded-xl bg-[#2189d6] bg-opacity-70 backdrop-blur-lg">
                            <p>Sistem perpustakaan merupakan sistem berbasis aplikasi website yang menyediakan berbagai informasi buku yang disimpan pada perpustakaan sekolah. Selain itu didalam website ini, kita juga dapat melihat detail informasi mengenai buku yang dicari kutipan didalamnya, rekomendasi buku, dan juga kita dapat memasukkan list untuk meminjam buku.</p>
                        </div>
                        <div className="w-1/2 flex flex-col ">
                            <div className="bg-[#2189d6] bg-opacity-70 flex flex-row items-center backdrop-blur-lg py-[15px] px-[20px] rounded-xl ">
                                <BiBook className="text-[30px] "/>
                                <h1 className="text-[#213555] font-semibold text-[25px] text-center w-full">Temukan buku favorit</h1>
                            </div>
                            <div className="flex flex-row h-full w-full my-[10px] ">
                                <div className="w-1/2 h-full rounded-xl px-[15px] py-[10px] bg-opacity-70 bg-[#2189d6]">
                                    <img src={write} alt="" className="max-w-full rounded-xl " />
                                    <h1>Temukan penulis favorit anda</h1>
                                </div>
                                <div className=""></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
     );
}
 
export default Landing;