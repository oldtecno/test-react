
const Player = ({player}) => {
    const {name, country, price, rank, position, image, id} = player;   

    const chose = (price, name, position, image, id)=>{
        
        const balance =  Number(document.getElementById('coins').innerText)
        const priceCall = Number(price);
        const count = document.getElementById('count').innerText;
        const container  = document.getElementById('histry');
        const newDiv = document.createElement('div');
        newDiv.innerHTML=`
                            <div id=${id} class="border-2 p-2 rounded-md mb-10 mt-10">
                       <div class="flex items-center justify-between w-[98%] mx-auto">
                            <div class="flex items-center gap-5">
                                    <div class="btn btn-ghost btn-circle avatar">
                                        <div class="w-10 rounded-full">
                                            <img alt="Tailwind CSS Navbar component" src=${image} />
                                        </div>
                                    </div>

                                    <div>
                                        <h1 class="lg:text-2xl md:text-xl font-bold">${name}</h1>    
                                        <h1 class="text-gray-500">${position}</h1>
                                    </div>    
                                </div>
                               <div> <button id="remove_${id}"><i class="fa-solid fa-delete-left text-red-500 text-xl"></i></button></div>
                       </div>
                    </div>
        `
        const choise = (document.getElementById('choise').innerText);

        
        if ((balance > priceCall) && Number(count) < 6 ) {
            alert('ok')
            document.getElementById('count').innerText= Number(count) + 1;
            document.getElementById('choise').innerText= Number(choise) + 1;

            document.getElementById('coins').innerText= balance - priceCall
            container.appendChild(newDiv);


            document.getElementById('remove_'+id).addEventListener('click', ()=>{ 
                document.getElementById(id).remove();
                document.getElementById('count').innerText= Number(document.getElementById('count').innerText) - 1;
                document.getElementById('choise').innerText= Number(document.getElementById('choise').innerText) - 1;
            })
            
        }else{
            alert('Opps!! your Balance.')
        }
    };


    return (
    <div>
           <div className="card card-compact bg-base-100 border-2">
                <figure>
                    <img className="object-cover w-full" src={image} alt={name} />
                </figure>
            <div className="p-4">
                <h2 className="card-title"><i className="fa-solid fa-user "></i> {name}</h2>
                <div className="flex items-center justify-between border-b-2 pb-3">
                    <p className="flex items-center gap-2 text-gray-500 font-semibold"><i className="fa-solid fa-flag text-xl"></i>  {country}</p>
                    <span className="bg-slate-200 px-2 py-[3px] rounded-md">{rank}</span>
                </div>
                <h1 className="mt-5 mb-1 font-semibold text-[17px]">Rating</h1>
                <div className="flex items-center justify-between">
                    <p>Left-Hand-Bat</p>
                    <p className="text-gray-500 text-sm">{position}</p>
                </div>
                <div className="flex items-center justify-between mt-3">
                    <p>{price}</p>
                    <button onClick={() => chose(price, name, position, image, id)} className="text-sm p-2 rounded-md border-2">Choose Player</button>
                </div>
             
            </div>
        </div>
    </div>
    );
};

export default Player;