
const Inventory = () => {
  return (
    <div className="flex p-6 shadow-lg">
      <div className="flex p-6 ">
      <div className="w-[50px] h-[50px]">        
      </div>
        <span className="text-white p-3 justify-center text-[23px]">Title</span>
      </div>

      <div className=" p-6 flex">
      <span className="text-[12px] text-white">Quantity:1</span>
      
      </div>

      <div className=" p-6 flex">
      <button>+</button>
      <button>-</button>
      <button>Delete</button>
      </div>


      

    </div>
  )
}

export default Inventory
