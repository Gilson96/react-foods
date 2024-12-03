import data from '../data'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import { addToCart } from '../features/cartSlice'
import { useDispatch } from 'react-redux';
import Card from './UI/Card'
import useScreenSize from '../features/useScreenSize'

const FoodMenu = ({ setImage, slidesPerView, spaceBetween }) => {
    const dispatch = useDispatch()
    const screenSize = useScreenSize()

    return (
        <Swiper
            navigation={true}
            modules={[Navigation]}
            slidesPerView={slidesPerView}
            spaceBetween={spaceBetween}
            grabCursor={true}
            className={`h-full w-full flex`}
        >
            {data.map((data, index) => (
                <SwiperSlide
                    style={{display:'flex', justifyContent:'center', alignItems:'center'}}
                    key={index}
                >
                    <div className='flex justify-center items-center cursor-grab'>
                    <Card
                        foodName={data.name}
                        foodImage={data.image}
                        foodPrice={data.price}
                        dispatch={dispatch}
                        addToCart={addToCart}
                        food={data}
                        setImage={setImage}
                    />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>

    )
}

export default FoodMenu