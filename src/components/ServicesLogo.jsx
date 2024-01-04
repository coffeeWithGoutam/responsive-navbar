import foster from '../assets/foster1.svg';
import hasfit from '../assets/hasfit1.svg';
import kredil from '../assets/kredil1.svg';
import mediorbis from '../assets/mediorbis1.svg';
import panasonic from '../assets/panasonic1.svg';
import tcs from '../assets/tcs1.svg';
import appFutura from '../assets/appfutura1.svg';
import Mad from '../assets/MAD1.svg';
import Inc from '../assets/inc1.svg';
import GoodFirms from '../assets/goodfirms1.svg';
import Efm from '../assets/eFM1.svg';

const ServicesLogo = () => {
  return (
    <div className='flex justify-around pr-6 items-center'>
      <div className=''>
        <h1 className='text-[#2F3045] text-[1.5rem] font-semibold'>Trusted by</h1>
      <div className='flex space-x-5'>
      <img src={tcs} className="w-28 h-28 mx-auto" alt="TCS Logo" />
       <img src={panasonic} className="w-28 h-w-28 mx-auto" alt="Panasonic Logo" />
       <img src={hasfit} className="w-28 h-w-28 mx-auto" alt="Hasfit Logo" />
       </div>
       <div className='flex space-x-5'>
       <img src={foster} className="w-28 h-w-28 mx-auto" alt="Foster Logo" />
       <img src={mediorbis} className="w-28 h-w-28 mx-auto" alt="Mediorbis Logo" />
      <img src={kredil} className="w-28 h-w-28 mx-auto" alt="Kredil Logo" />
       </div>
      </div>
      <div className='mt-4'>
      <h1 className='text-[#2F3045] text-[1.5rem] font-semibold'>Recognised by the best</h1>
      <div className='flex space-x-5'>
      <img src={appFutura} className="w-16 h-16 mx-auto" alt="AppFutura Logo" />
     <img src={Mad} className="w-16 h-16 mx-auto" alt="Mad Logo" />
      <img src={Inc} className="w-16 h-16 mx-auto" alt="Inc Logo" />
      <img src={GoodFirms} className="w-16 h-16 mx-auto" alt="GoodFirms Logo" />
      </div>
      <div className='flex'>
      <img src={Efm} className="w-16 h-16 mx-auto" alt="Efm Logo" />
      </div>
      </div>
      </div>
  );
};

export default ServicesLogo;
