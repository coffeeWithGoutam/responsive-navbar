import appFutura from '../assets/appfutura1.svg';
import Mad from '../assets/MAD1.svg';
import Inc from '../assets/inc1.svg';
import GoodFirms from '../assets/goodfirms1.svg';
import Efm from '../assets/eFM1.svg';

const HomeLogo = () => {
  return (
    <div className="mt-10">
      <div className="flex flex-wrap justify-center items-center -mx-5 ">

        <div className="w-1/3 md:w-1/5 lg:w-1/8 px-5 mb-5">
          <img src={appFutura} className='w-36' alt="TCS Logo" />
        </div>

        <div className="w-1/3 md:w-1/5 lg:w-1/8 px-5 mb-5">
          <img src={Mad} className='w-36' alt="Panasonic Logo" />
        </div>

        <div className="w-1/3 md:w-1/5 lg:w-1/8 px-5 mb-5">
          <img src={Inc} className='w-36' alt="Hasfit Logo" />
        </div>

        <div className="w-1/3 md:w-1/5 lg:w-1/8 px-5 mb-5">
          <img src={GoodFirms} className='w-36' alt="Foster Logo" />
        </div>

        <div className="w-1/3 md:w-1/5 lg:w-1/8 px-5 mb-5">
          <img src={Efm} className='w-36' alt="Mediorbis Logo" />
        </div>

      </div>
    </div>
  );
};

export default HomeLogo;
