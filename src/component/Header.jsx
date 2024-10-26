import logo from "../assets/logo.png";
import bgo from "../assets/banner-main.png";

const Header = () => {
    const getCoines = ()=>{
        const defultNum = Number(document.getElementById('coins').innerText)
        document.getElementById('coins').innerText=Number(defultNum + 2100000)
    };

    return (
    <>
        <div className="">
        <div className=" bg-orange-50">
            <nav className="w-[90%] h-20 mx-auto flex items-center justify-between">
                <ul>
                    <li><img src={logo} alt="" /></li>
                </ul>
                <ul className="flex items-center gap-5">
                    <li>home</li>
                    <li>plear</li>
                    <li>story</li>
                    <li>game</li>
                    <span className="bg-red-100 p-2 rounded-md flex items-center gap-1"><h1>$</h1> <h1 id="coins">0</h1></span>
                </ul>
            </nav>
        </div>
        </div>
        
        <div className=" w-[90%] mx-auto rounded-lg bg-shadow h-96 bg-cover">
            <div className="flex justify-center items-center">
                <img src={bgo} alt="" />
            </div>
                <div className="text-center mt-5">
                    <h1 className="text-2xl font-semibold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                    <p className="mb-5 text-gray-600 font-medium">Beyond Boundaries Beyond Limits</p>
                    <span className=" border-2 border-yellow-300 py-3 px-1"><button onClick={getCoines} className="bg-yellow-400 rounded-md p-2 font-semibold text-gray-7 00">Claim Free Credit</button></span>
                </div>
        </div>
    </>
    );
};

export default Header;