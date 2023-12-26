// Card.js
import cardImage from '../assets/card.svg';
import avatarImage from '../assets/avatar.svg';

const Card = () => {
  return (
    <div className="relative bg-white p-3 rounded-md shadow-md h-[32rem] w-[23rem]">
      <img src={cardImage} alt="Card" className="w-full h-[17rem] object-cover mb-4 rounded-md" />
      {/* Badge */}
      <div className="absolute bottom-[13.5rem] left-6 bg-[#1D7EB9] text-white font-semibold text-center px-2 py-1 w-[6rem] rounded-full">
      LIZARDS
      </div>
      {/* Content */}
      <h2 className="text-xl font-semibold mb-2">How to Start New Business in Small Capital from Zero Invest</h2>
      <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur adipiscing elit. Odit quam atque ipsa laborum sunt..</p>
      <div className='flex space-x-3 justify-start items-center'>
        <img src={avatarImage} alt="Avatar" className="w-8 h-8 rounded-full mt-4" />
        <h1 className='mt-5 text-[#1D7EB9] font-normal'>Lorim Isuacob  | 15 Nov 2021</h1>
      </div>
    </div>
  );
};

export default Card;

