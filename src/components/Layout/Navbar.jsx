import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <div className="flex justify-between bg-blue-500 items-center md:px-20 px-5 py-2">
      <h1 className="font-bold text-2xl text-white">ShopFi</h1>
      <div className="flex gap-1">
        <Link to="/"><p className="text-white border border-1 px-2 rounded-md hover:text-black hover:scale-110 hover:bg-white">Home</p></Link>      
        <Link to="/lifecycle"><p className="text-white border border-1 px-2 rounded-md hover:text-black hover:scale-110 hover:bg-white">LifeCycle</p></Link>      
        <Link to="/counter"><p className="text-white border border-1 px-2 rounded-md hover:text-black hover:scale-110 hover:bg-white">Counter</p></Link>      
        <Link to="/posts"><p className="text-white border border-1 px-2 rounded-md hover:text-black hover:scale-110 hover:bg-white">Posts</p></Link>      
        <Link to="/hooks"><p className="text-white border border-1 px-2 rounded-md hover:text-black hover:scale-110 hover:bg-white">Hooks</p></Link>      
      </div>
    </div>
  )
}
