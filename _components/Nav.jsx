
const Nav = () => {
  return (
    
<div className="flex flex-row justify-between w-full h-[100px]">
  <div className="relative flex  p-6 font-bold text-4xl lg:text-[43px] text-white">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
  <line x1="12" y1="6" x2="12" y2="18" stroke="currentColor" stroke-width="2"/>
  <line x1="12" y1="12" x2="18" y2="12" stroke="currentColor" stroke-width="2"/>
  </svg>

    <span className='ml-2'>Trackr</span>
  </div>

  <div className="p-6">
    <div className="flex text-[19px] dark:text-white">
      <span className=" rounded-[10px] p-3">  
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
  <line x1="12" y1="6" x2="12" y2="18" stroke="currentColor" stroke-width="2"/>
  <line x1="12" y1="12" x2="18" y2="12" stroke="currentColor" stroke-width="2"/>
  </svg></span>
      <span className="mx-2"></span>
     
      <span className=" text-white p-3">User</span>
    </div>
  </div>
</div>
  )
}

export default Nav
