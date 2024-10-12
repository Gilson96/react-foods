import { useEffect } from 'react'
import deliveryAnimationGif from '../Assets/deliveryAnimation.gif'

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
        <div>
            <img src={deliveryAnimationGif} alt='delivery' />
        </div>
    )
}

export default DeliveryAnimation