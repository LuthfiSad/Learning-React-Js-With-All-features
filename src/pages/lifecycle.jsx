import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function LifeCyclePage() {
  const order = useSelector((state)=>state.order)
  const [count, setCount] = useState(0);
  useEffect(()=>{
    console.log('Mounted');
    return ()=>{
      console.log('Unmounted');
    }
  }, [count])
  return (
    <>
      <h1 className="py-3 text-xl">LifeCycle Page</h1>
      <hr className='my-2' />
      <button onClick={()=>setCount(count+1)} className="px-3 py-1 bg-blue-500 text-white rounded">
        Component Button {count}
      </button>
      <hr className="my-2" />
      <p>order : {order}</p>
    </>
  );
}
