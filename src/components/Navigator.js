import React from 'react'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { useSelector } from 'react-redux'

const Navigator = ({ onOpen }) => {

  const food = useSelector((state) => state.cart)
  console.log(food)

  return (
    <div className='w-full h-full flex p-[2%] justify-between'>
      <p className='font-bold text-xl'>React-f<span className='text-orange-300'>oo</span>ds</p>
      <div className='flex justify-center items-center gap-5 w-auto border-4 border-black px-[1%] py-[1px] rounded-full bg-white'>
        <div onClick={onOpen}>
          <ShoppingBagIcon className='h-7 w-7 text-slate-700 cursor-pointer' />         
            <p className={`flex justify-center items-center w-auto h-auto px-[6px] bg-white absolute border border-black top-[3%] right-[3%] rounded-full text-black`}>{food === undefined ? 0 : food.cart.length}</p>
        </div>
      </div>
    </div>
  )
}

export default Navigator