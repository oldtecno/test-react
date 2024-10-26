import Player from "./Player";
import { useEffect } from "react";
import { useState } from "react";


const Players = () => {
    const [player, setPlayer] = useState([])
    useEffect(() =>{
        fetch('./plear.json')
        .then(res => res.json())
        .then(data => setPlayer(data))
    },[]);


    const visitAnotherSide = () =>{
        document.getElementById('cards').classList.add('hidden');
        document.getElementById('Selected').classList.remove('hidden');
    }
    const showCards = () =>{
        document.getElementById('cards').classList.remove('hidden');
        document.getElementById('Selected').classList.add('hidden');
    }


    

    return (
        <>
            <div id="cards">
                <div className="w-[90%] mx-auto mt-9 flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Available Players</h1>
                    <div className="flex"><button className="bg-red-200 px-6 py-2 border border-red-200">Available</button><button onClick={visitAnotherSide} className="flex items-center gap-1 px-6 py-2 border-r border-t border-b">Selected <h1 id="count">0</h1></button></div>    
                </div>
                <div className="w-[90%] mx-auto mt-20 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                
                    {
                    player.map(player => <Player player={player} key={player.id}></Player>)
                    }
                </div>
            </div>


            <div id="Selected" className="hidden">
                <div className="w-[90%] mx-auto mt-9 flex items-center justify-between">
                    <h1 className="flex text-2xl font-bold">Selected Player (<h1 id="choise">0</h1>/6)</h1>
                    <div className="flex"><button onClick={showCards}  className="bg-red-200 px-6 py-2 border border-red-200">Available</button><button onClick={visitAnotherSide} className="flex items-center gap-1 px-6 py-2 border-r border-t border-b">Selected <h1 id="count">0</h1></button></div>    
                </div>
                <div className="w-[90%] mx-auto">
                    <div id="histry"></div>
                    <span className=" border-2 border-yellow-400 py-3 px-1"><button onClick={showCards} className="text-gray-800 p-2 font-semibold bg-yellow-400 rounded-md">Add More Player</button></span>
                </div>
            </div>
        </>
    );
};

export default Players;