import { motion } from "framer-motion";

const Card = ({ foodName, foodImage, foodPrice, dispatch, addToCart, food, setImage }) => {

    return (
        <motion.div
            whileHover="hover"
            transition={{
                duration: 0.5,
                ease: "backInOut",
            }}
            variants={{
                hover: {
                    scale: 1.05,
                },
            }}
            className="flex flex-col justify-center items-center rounded-2xl cursor-pointer"
            onClick={() => setImage(foodImage)}
        >

            <motion.img
                initial={{ scale: 0.85 }}
                variants={{
                    hover: {
                        scale: 1,
                    },
                }}
                transition={{
                    duration: 1,
                    ease: "backInOut",
                }}
                src={foodImage}
                className="h-[9rem] w-[9rem] border rounded-full bg-slate-500 shadow-lg relative top-[5rem]"
            />
            <div className='flex flex-col justify-end items-center h-[12rem] w-[13rem] bg-gray-200 rounded-xl shadow-md gap-3 pb-[5%]'>

                <p className='text-2xl font-bold capitalize'>{foodName}</p>
                <hr className=' w-[90%] bg-gray-400 border border-dotted' />
                <div className='flex justify-between items-center w-full px-[10%]'>
                    <p className='font-bold'>£{foodPrice}</p>
                    <button
                        className='w-[5rem] h-[2rem] p-[1%] border rounded-md border-lime-500 text-lime-500 font-bold hover:bg-lime-500 hover:text-white'
                        onClick={() => dispatch(addToCart(food))}
                    >
                        Add
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default Card;