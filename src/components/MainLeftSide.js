import React from 'react'
import {  useSelector } from 'react-redux'
import Foods from './Foods'

const MainLeftSide = () => {
    const cart = useSelector(state => state.cart.cart)

    return (
        <div className='row-start-1 row-span-3 col-start-1 col-span-2'>
            <div className='h-full w-full grid grid-cols-5 grid-rows-5 grid-flow-col pl-[5%]'>
                <p className='font-extrabold text-[3rem] tracking-wider col-start-1 col-span-4'>Order your</p>
                <p className='text-[2rem] tracking-wider col-start-1 col-span-4'>Favourite Foods</p>
                <p className='font-thin text-[2rem] text-slate-400 col-start-1 col-span-4'>Total Order: <span className='text-black font-normal'>£{cart.reduce((total, food, index) => total += Number.parseFloat(food.price) * food.quantity, 0).toFixed(2)}</span></p>
                <div className='col-start-1 col-span-6 row-start-4'>
                    <Foods />
                </div>
            </div>
        </div>
    )
}

export default MainLeftSide