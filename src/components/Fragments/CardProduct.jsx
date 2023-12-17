import BottomCounter from '../elements/BottomCounter';

export default function CardProduct() {
  return (
    <div className="max-w-[250px] p-2 border-black border rounded m-5">
      <div className="h-48 w-full mb-2 bg-black"></div>
      <h2 className='font-bold text-lg'>Title</h2>
      <h2 className='font-bold text-[14px] text-orange-500 my-1'>Price</h2>
      <BottomCounter/>
    </div>
  )
}
