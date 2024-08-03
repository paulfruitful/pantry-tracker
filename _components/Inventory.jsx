
const Inventory = () => (
    <div className="flex p-6 shadow-lg w-full justify-between bg-gray-700">
        <div className="flex p-6 ">
            <div className="w-[50px] h-[50px]">
            </div>
            <span className="text-white p-3  text-[23px]">Carrot</span>
        </div>

        
        <div className=" p-6 flex">
            <span className="text-[12px] p-3 text-center font-bold text-white">Qty:1</span>

       

            <button className="p-3 border-2 border-gray-300 shadow-sm ">+</button>
            <button className="p-3 border-2 border-gray-300 shadow-sm ">-</button>
            <button  className="p-3 border-2 border-gray-300 shadow-sm ">❌</button>
        </div>




    </div>
)

export default Inventory
