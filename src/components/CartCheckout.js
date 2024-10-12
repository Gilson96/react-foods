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

const CartCheckout = ({ isOpen, onClose, children, cart, totalPrice, totalBasket }) => {

    const [openAnimation, setOpenAnimation] = useState(false)
    const [feedback, setFeedback] = useState(false)

    return (
        <div>
            <Modal isOpen={isOpen} onClose={onClose} scrollBehavior='inside'>
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody>
                        {!openAnimation ?
                            <>
                            <p className='text-2xl font-bold'>My Order</p>
                                <div className='flex flex-col w-full h-full overflow-hidden mb-[5%]'>
                                    {cart.map((food, index) => (
                                        <ul className='flex flex-col w-full h-full overflow-y-auto'>
                                            <li className='flex h-full w-full items-center justify-between'>
                                                <div className='flex items-center gap-10 py-2'>
                                                    <img
                                                        src={food.image} alt='food'
                                                        className='h-[5rem] w-[5rem] rounded-full'
                                                    />
                                                    <div className='flex gap-2'>
                                                        <p className='font-bold'>{food.quantity}<span className='text-slate-400'>x</span>
                                                        </p>
                                                        <p className='font-bold'>{food.name}</p>
                                                    </div>
                                                </div>
                                                <p className='text-slate-400 font-bold'>£{food.quantity * food.price}</p>
                                            </li>
                                        </ul>
                                    ))}
                                </div>
                                <hr className='w-full text-slate-300' />
                                <div className='mt-[3%] w-full h-full flex justify-between items-center gap-1'>
                                    <p className='text-2xl font-bold'>Total: <span className='font-light text-2xl'>£{cart.reduce((total, food, index) => total += Number.parseFloat(food.price) * food.quantity, 0).toFixed(2)}</span></p>
                                    <div>
                                        <button className='bg-yellow-400 text-white font-bold p-2 rounded-xl hover:bg-yellow-500' onClick={() => { setOpenAnimation(true);}}>Confirm</button>
                                        <button className='font-bold hover:bg-slate-200 py-2 px-3 rounded-xl ' onClick={onClose}>Cancel</button>
                                    </div>
                                </div>
                            </>
                            :
                            !feedback ?
                                <DeliveryAnimation setFeedback={setFeedback} />
                                :
                                <div>
                                    <Feedback/>
                                </div>
                        }
                    </ModalBody>
                </ModalContent>
            </Modal>
            </div>
    )
}

export default CartCheckout