import { useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import DeliveryAnimation from './DeliveryAnimation'
import Feedback from './Feedback'
import { removeFromCart, addToCart } from '../features/cartSlice'
import { useDispatch } from 'react-redux';
import useScreenSize from '../features/useScreenSize'

const CartCheckout = ({ isOpen, onClose, children, cart, totalPrice, totalBasket }) => {
    const [openAnimation, setOpenAnimation] = useState(false)
    const [feedback, setFeedback] = useState(false)
    const dispatch = useDispatch()
    const screenSize = useScreenSize()

    return (
        <div className=''>
            <Modal isOpen={isOpen} onClose={onClose} scrollBehavior='inside'>
                <ModalOverlay />
                <ModalContent className='mx-5'>
                    <ModalCloseButton />
                    <ModalBody className=''>
                        {!openAnimation ?
                            <>
                                <p className='text-2xl font-bold my-[5%]'>My Order</p>
                                <div className='flex flex-col w-full h-full overflow-hidden mb-[5%}'>
                                    {cart.map((food, index) => (
                                        <ul className='flex flex-col w-full h-full overflow-y-auto'>
                                            <li className='flex h-full w-full items-center justify-between'>
                                                <div className='flex items-center gap-10 py-2'>
                                                    <div className='flex justify-center items-center border p-[2%] rounded-full'>
                                                        <p
                                                            className={`${screenSize.width < 700 ? 'text-sm' : 'text-xl'} text-red-500 font-bold  cursor-pointer px-1`}
                                                            onClick={() => dispatch(addToCart(food))}
                                                        >
                                                            +
                                                        </p>
                                                        <p className='text-xs px-1'> / </p>
                                                        <p
                                                            className={`${screenSize.width < 700 ? 'text-sm' : 'text-xl'} text-red-500 font-bold  cursor-pointer px-1`}
                                                            onClick={() => dispatch(removeFromCart(food.id))}
                                                        >
                                                            -
                                                        </p>
                                                    </div>
                                                    <img
                                                        src={food.image} alt='food'
                                                        className={`${screenSize.width < 700 ? 'hidden' : 'h-[5rem] w-[5rem]'} rounded-full bg-lime-300 shadow-lg`}
                                                    />
                                                    <div className='flex flex-col'>
                                                        <div className='flex gap-2'>
                                                            <p className='font-bold'>{food.quantity}<span className='text-slate-400'>x</span>
                                                            </p>
                                                            <p className='font-bold'>{food.name}</p>
                                                            <p className='text-slate-400 font-bold'>£{food.quantity * food.price}</p>
                                                        </div>
                                                    </div>
                                                </div>

                                            </li>
                                            <hr className='w-full bg-slate-300' />
                                        </ul>
                                    ))}
                                </div>
                                <div className={`${screenSize.width < 700 ? 'flex flex-col gap-4' : 'flex justify-between items-center'} mt-[3%] w-full h-full  gap-1`}>
                                    <p className={`${screenSize.width < 700 ? 'text-xl' : 'text-2xl'} font-bold`}>Total: <span className={`${screenSize.width < 700 ? 'text-xl' : 'text-2xl'} font-light`}>£{cart.reduce((total, food, index) => total += Number.parseFloat(food.price) * food.quantity, 0).toFixed(2)}</span></p>
                                    <div>
                                        <button className='bg-lime-300 text-white font-bold p-2 rounded-xl hover:bg-lime-400' onClick={() => { setOpenAnimation(true); }}>Confirm</button>
                                        <button className='font-bold hover:bg-slate-200 py-2 px-3 rounded-xl ' onClick={onClose}>Cancel</button>
                                    </div>
                                </div>
                            </>
                            :
                            !feedback ?
                                <DeliveryAnimation setFeedback={setFeedback} />
                                :
                                <div>
                                    <Feedback />
                                </div>
                        }
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default CartCheckout