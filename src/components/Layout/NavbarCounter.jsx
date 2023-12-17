import { useSelector } from "react-redux";
export default function NavbarCounter() {
  const cart = useSelector(state => state.order);
  return (
    <div className="flex justify-between bg-green-500 items-center md:px-20 px-5 py-2">
      <h1 className="font-bold text-2xl text-white">ShopFi</h1>
      <div className="relative bg-black h-8 w-8">
        <div className="rounded-xl w-5 h-5 bg-blue-600 flex absolute bottom-0 justify-center items-center text-xs font-bold text-white">{cart}</div>
      </div>
    </div>
  )
}
