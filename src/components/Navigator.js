import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { useSelector } from 'react-redux'

const Navigator = ({ onOpen }) => {
  const food = useSelector((state) => state.cart)

  return (
    <div onClick={onOpen} className='flex p-[2%] justify-between items-center cursor-pointer'>
      {/* logo */}
      <p className='font-bold text-3xl'>React-f<span className='text-lime-500'>oo</span>ds</p>

      {/* cart */}
      <div className='flex justify-center items-center w-auto border-4 border-slate-500 px-[1%] py-[1px] rounded-full bg-white'>
        <p className={`flex justify-center items-center w-[1.5rem] bg-lime-600 border rounded-full text-white text-base font-bold`}>{food === undefined ? 0 : food.cart.length}</p>
        <ShoppingBagIcon className='h-7 w-7 text-slate-500 cursor-pointer' />
      </div>

    </div>
  )
}
export default Navigator