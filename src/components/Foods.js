import { useState } from 'react'
import { useGetAllFoodsQuery } from '../features/apiSlice'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import { useDispatch, useSelector } from 'react-redux';
import { selectFood } from '../features/cartSlice'


const Foods = ({ handleGetId }) => {
  const [isSelected, setIsSelected] = useState(false)
  const getSeletedfood = useSelector(state => state.cart.foodSelected)
  const { data: allFoods = [], isLoading } = useGetAllFoodsQuery()
  const dispatch = useDispatch()
  if (isLoading) return <p>is loading</p>

  console.log(getSeletedfood)

  return (
    <div className=''>
      <Swiper
        pagination={true}
        modules={[Pagination, Navigation]}
        className='w-full'
        slidesPerView={2}
        loop={true}
        grabCursor={true}
        mousewheel={true}
        keyboard={true}
        navigation={true}
      >
        {allFoods.map(food => (
          <>
            <SwiperSlide style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: 100 + '%' }}>
              <div
                className={`flex flex-col justify-between items-center w-[13rem] h-[16rem] py-2 rounded-2xl cursor-pointer ${isSelected === food.id && 'bg-yellow-400 shadow-md'}`}
                onClick={() => { setIsSelected(food.id); dispatch(selectFood(food.id)) }}

              >
                <div className={'rounded-2xl cursor-grab'}>
                  <img src={food.image} alt='food' className='h-[12rem] w-[12rem] rounded-xl shadow-md' />
                </div>
                <div className='flex justify-center items-center gap-2 text-xl'>
                  <p className={`font-semibold ${isSelected === food.id ? 'text-black' : 'text-slate-400' }`}>{food.name}</p>
                  <p className={`font-bold flex gap-1 rounded-full  px-2 py-1 shadow-md ${isSelected === food.id ? 'text-black border-2 border-black' : 'text-slate-500 border-2' } mt-[1%]`}><span className={`${isSelected === food.id ? 'text-black' : 'text-yellow-500' }`}>£</span>{food.price}</p>
                </div>
              </div>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </div>
  )
}

export default Foods