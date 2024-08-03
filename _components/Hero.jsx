const Hero = () => {
  return (
    <div className="flex justify-between px- lg:px-8 w-full ">

        <span className="text-lg border-b-2 lg:p-0 pl-2  border-solid  ">Inventory <span className="font-bold  text-xl">(0)</span></span>

        <button className=" p-3 bg-green-600  text-white rounded-[10px] shadow-sm">+ Add Pantry</button>
     
    </div>
  )
}

export default Hero
