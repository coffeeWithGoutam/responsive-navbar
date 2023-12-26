import Image from '../assets/images.svg';
const HomeProfileCard = () => {
  return (
    <div className='text-center'>
      <div className="relative bg-white p-3 mb-10 rounded-md shadow-md w-[23rem] h-[18rem] hover:bg-[#1D7EB9] cursor-pointer hover:text-white">
      <p className="mt-10">
        Absolutely amazing service! The Keeper Services transformed my office
        into a pristine workspace. I highly recommend Absolutely amazing
        service! The Keeper Services transformed my office into a pristine
        workspace.
      </p>
      <div className='flex space-x-3 justify-start items-center'>
        <img src={Image} alt="Avatar" className="w-10 h-10 rounded-sm mt-[4.5rem] ml-[9.8rem]" />
      </div>
    </div>
    <h1 className='tex-[2rem] pl-4 font-semibold text-[#1D7EB9]'>Mohamed Khan</h1>
    <p className='pl-4 text-[0.8rem]'>Business Owner</p>
    </div>
  );
};

export default HomeProfileCard;