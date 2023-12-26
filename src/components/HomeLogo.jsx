import appFutura from '../assets/appfutura1.svg';
import Mad from '../assets/MAD1.svg';
import Inc from '../assets/inc1.svg';
import GoodFirms from '../assets/goodfirms1.svg';
import Efm from '../assets/eFM1.svg';

const HomeLogo = () => {
  return (
    <section className="mt-10">
      <div className="container mx-auto flex flex-wrap justify-center space-x-20 items-center">
        <img src={appFutura} className='w-1/6 md:w-1/8 lg:w-1/12' alt="TCS Logo" />
        <img src={Mad} className='w-1/6 md:w-1/8 lg:w-1/12' alt="Panasonic Logo" />
        <img src={Inc} className='w-1/6 md:w-1/8 lg:w-1/12' alt="Hasfit Logo" />
        <img src={GoodFirms} className='w-1/6 md:w-1/8 lg:w-1/12' alt="Foster Logo" />
        <img src={Efm} className='w-1/6 md:w-1/8 lg:w-1/12' alt="Mediorbis Logo" />
      </div>
    </section>
  );
};

export default HomeLogo;
