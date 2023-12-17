import NavbarCounter from '../components/Layout/NavbarCounter'
import CardProduct from '../components/Fragments/CardProduct'

export default function CounterPage() {

  // before use reactredux
  // const [cart, setCart] = useState(0);
  // const increment = ()=> {
  //   setCart(cart+1)
  // }
  // const decrement = ()=> {
  //   if(cart<=0){
  //     return;
  //   }
  //   setCart(cart-1)
  // }

  return (
    <div>
      <h1 className="py-3 text-xl">Counter</h1>
      <hr className='py-2' />
      <NavbarCounter />
      <CardProduct />
    </div>
  )
}
