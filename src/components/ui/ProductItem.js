import { AiOutlinePlus } from 'react-icons/ai';

export default function ProductItem({product}) {
  return (
    <div className="bg-white gap-y-2 flex flex-col relative items-center text-center text-sm font-semibold p-3">
        <button className='text-brand-color shadow-lg hover:border-2 hover:border-gray-400 transition-colors absolute top-3 right-3 bg-white w-8 h-8 flex items-center justify-center border border-gray-200 rounded-lg'>
            <AiOutlinePlus size={16} />
        </button>
        <img src={product.image} alt={product.title} />
        <div className="text-brand-color"> { product.price } </div>
        <div className="text-gray-900"> { product.title } </div>
        <div className="text-gray-500"> { product.alt } </div>
    </div>
  )
}
