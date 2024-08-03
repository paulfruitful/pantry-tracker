import Nav from "../../_components/nav"
import Hero from "../../_components/Hero"
const Page = () => {
  return (
    <div className="grid w-full overflow-hidden" style={{height:'100vh',width:'100vw'}}>
      <div className="flex flex-col">
      <Nav />
      <div className="p-6 flex justify-center w-full"> 
             <span className="text-2xl font-bold ">Pantry 🥗</span>
      </div>
      <Hero/>
      </div>
    </div>
  )
}

export default Page
