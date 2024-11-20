import { useEffect } from 'react'
import deliveryAnimationGif from '../Assets/giphy.gif'

const DeliveryAnimation = ({setFeedback}) => {

    useEffect(() => {
        // Use setTimeout to update the message after 2000 milliseconds (2 seconds)
        const timeoutId = setTimeout(() => {
            setFeedback(true);
        }, 4000);

        // Cleanup function to clear the timeout if the component unmounts
        return () => clearTimeout(timeoutId);
    }, []); // Empty dependency array ensures the effect runs only once   

    return (
        <div className='w-full h-full flex flex-col justify-center items-center'>
            <img src={deliveryAnimationGif} alt='delivery' />
            <p>Preparing your order...</p>
        </div>
    )
}

export default DeliveryAnimation