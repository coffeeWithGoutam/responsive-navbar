import foster from '../assets/foster1.svg';
import hasfit from '../assets/hasfit1.svg';
import kredil from '../assets/kredil1.svg';
import mediorbis from '../assets/mediorbis1.svg';
import panasonic from '../assets/panasonic1.svg';
import tcs from '../assets/tcs1.svg';

const Logo = () => {
  return (
    <section className="mt-5">
      <div className="container mx-auto flex flex-wrap justify-around items-center">
        <img src={tcs} className='w-1/6 md:w-1/8 lg:w-1/12' alt="TCS Logo" />
        <img src={panasonic} className='w-1/6 md:w-1/8 lg:w-1/12' alt="Panasonic Logo" />
        <img src={hasfit} className='w-1/6 md:w-1/8 lg:w-1/12' alt="Hasfit Logo" />
        <img src={foster} className='w-1/6 md:w-1/8 lg:w-1/12' alt="Foster Logo" />
        <img src={mediorbis} className='w-1/6 md:w-1/8 lg:w-1/12' alt="Mediorbis Logo" />
        <img src={kredil} className='w-1/6 md:w-1/8 lg:w-1/12' alt="Kredil Logo" />
      </div>
    </section>
  );
};

export default Logo;