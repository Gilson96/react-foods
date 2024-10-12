import React from 'react'
import Navigator from './Navigator'
import Main from './Main'
import { useDisclosure } from '@chakra-ui/react'
import CartCheckout from './CartCheckout'
import { useSelector } from 'react-redux'

const LadingPage = () => {
  const cart = useSelector(state => state.cart.cart)
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <div>
      <Navigator onOpen={onOpen} />
      <CartCheckout isOpen={isOpen} onClose={onClose} cart={cart}/>
      <Main />
    </div>
  )
}

export default LadingPage