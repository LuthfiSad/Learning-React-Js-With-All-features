import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../redux/actions";

export default function BottomCounter() {
  const cart = useSelector((state) => state.order);
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between">
      <button
        onClick={()=>dispatch(increment())}
        className="bg-blue-900 rounded text-white py-2 text-xs w-14"
      >
        +
      </button>
      <div className="border border-slate-600 flex justify-center items-center w-full rounded mx-4">
        {cart}
      </div>
      <button
        onClick={()=>dispatch(decrement())}
        className="bg-blue-900 rounded text-white py-2 text-xs w-14"
      >
        -
      </button>
    </div>
  );
}
