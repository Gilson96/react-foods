import { useState } from 'react'
import { ClockIcon } from '@heroicons/react/24/outline'
import { useGetAllFoodsQuery } from '../features/apiSlice'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from '@chakra-ui/react'
import board from '../Assets/board.png'
import { incrementQuantity, addToCart, removeFromCart } from '../features/cartSlice'
import { ChevronUpIcon, ChevronDownIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import { XCircleIcon } from '@heroicons/react/24/solid';

const MainRightSide = ({ foodShadowPic, foodPic, foodName, foodPrice, startTime, endTime }) => {
    const { data: allFoods = [], isLoading } = useGetAllFoodsQuery()
    const [alertToSelectFood, setAlertToSelectFood] = useState('')
    const foodSelected = useSelector(state => state.cart.foodSelected)
    const getCart = useSelector(state => state.cart.cart)
    const dispatch = useDispatch()

    const handleFoodQuantity = () => {
        const getFood = getCart.find(food => food.id === foodSelected)

        if (getFood === undefined) return 0
        if (getFood !== undefined) return getFood.quantity
    }

    const getFoodSelected = () => {
        return allFoods.find(food => food.id === foodSelected)
    }

    const ExistingFoodInCart = () => {
        if(getCart.find(food => food.id === foodSelected)) return true
        else return false
    }

    console.log(ExistingFoodInCart())

    return (
        <div className='col-start-3 col-span-5 row-start-1 row-span-3'>

            {isLoading && <CircularProgress isIndeterminate color='orange.300' />}

            {(getFoodSelected() === undefined) ?
                <>
                    <div className='w-full h-full grid grid-cols-5 grid-rows-5 grid-flow-col'>
                        <img src={board} className='h-auto w-full col-start-2 col-span-4 relative bottom-[9rem] right-[20%]' alt='foodBoard' />
                        <p className='row-start-3 col-start-2 col-span-4 text-[4rem] font-bold text-xl '>React-f<span className='text-yellow-500'>oo</span>ds</p>
                    </div>
                </>
                :
                <>
                    <div className='w-full h-full grid grid-cols-5 grid-rows-5 grid-flow-col'>

                        <img src={board} className='h-[50rem] w-full col-start-2 col-end-7 row-start-1 row-span-4 relative bottom-[12rem] right-[20%]' alt='foodBoard' />

                        <img src={getFoodSelected().image} alt='food' className='bg-black/60 rounded-full col-start-2  col-span-5 row-start-2 h-[14rem] w-[14rem] relative right-[8%] top-[11%]' />

                        <div className='flex h-[3rem] justify-center items-center border bg-black w-full rounded-full py-2 px-4  col-start-2 row-start-6 relative right-[12%] bottom-[40%]'>
                            <i><ClockIcon className='h-5 w-5 text-white' /></i>
                            <p className='text-white'>{10} - </p>
                            <p className='text-white'>{15} mins</p>
                        </div>

                        <p className='col-start-3 row-start-2 text-3xl font-bold relative top-[30%] left-[10%]' >{getFoodSelected().name}</p>

                        <p className='col-start-3 row-start-4 text-4xl font-bold border shadow-md rounded-full w-[80%] h-auto flex justify-center items-center mb-3 relative left-[10%]' ><span className='text-yellow-400'>£</span>{getFoodSelected().price}</p>

                        <div className='flex justify-between border rounded-full border-slate-400  items-center py-2 px-3 shadow-md h-[3rem] col-start-3 row-start-6 w-[70%] relative right-[3%] bottom-[40%]'>
                            <p className='pr-3'>
                                {ExistingFoodInCart() ?
                                    <ChevronUpIcon
                                        className='h-5 w-5 cursor-pointer'
                                        onClick={() => dispatch(incrementQuantity(foodSelected))} />
                                    :
                                    <>

                                        {alertToSelectFood === 'increment' && <div className='flex justify-center items-center h-[4rem] w-[12rem] bg-white shadow-md absolute bottom-[3rem] p-2 gap-1'>
                                            <XCircleIcon className='h-5 w-5 text-red-500' />
                                            <p className='text-xs italic'>You need to add to Cart first!</p>
                                        </div>
                                        }
                                        <ChevronUpIcon
                                            className='h-5 w-5'
                                            onMouseOver={() => setAlertToSelectFood('increment')}
                                            onMouseLeave={() => setAlertToSelectFood(false)}
                                        />
                                    </>
                                }
                            </p>
                            <p className='font-bold'>
                                {handleFoodQuantity()}
                            </p>
                            <i className='pl-3'>
                                {ExistingFoodInCart() ?
                                    <ChevronDownIcon
                                        className='h-5 w-5 cursor-pointer'
                                        onClick={() =>  dispatch(removeFromCart(foodSelected)) }
                                    />
                                    :
                                    <>
                                        {alertToSelectFood === 'decrement' && <div className='flex justify-center items-center h-[4rem] w-[12rem] bg-white shadow-md absolute bottom-[3rem] p-2 gap-1'>
                                            <XCircleIcon className='h-5 w-5 text-red-500' />
                                            <p className='text-xs'>You need to add to Cart first!</p>
                                        </div>
                                        }
                                        <ChevronDownIcon
                                            className='h-5 w-5'
                                            onMouseOver={() => setAlertToSelectFood('decrement')}
                                            onMouseLeave={() => setAlertToSelectFood(false)}
                                        />
                                    </>
                                }
                            </i>
                        </div>

                        <div
                            className='flex justify-evenly border rounded-full  items-center shadow-md py-1 px-4 cursor-pointer border-slate-400 h-[3rem] col-start-3 row-start-6 w-[100%] relative left-[72%] bottom-[40%] hover:bg-black/20'
                            onClick={() => { setAlertToSelectFood(false); dispatch(addToCart(allFoods.find(food => food.id === foodSelected))) }}
                        >
                            <i className='bg-lightGreen rounded-full p-2'>
                                <ShoppingBagIcon className='h-4 w-4 text-cream f' />
                            </i>
                            <p className='font-bold'>Add To Cart</p>
                        </div>

                    </div>
                </>
            }
        </div>
    )
}

export default MainRightSide