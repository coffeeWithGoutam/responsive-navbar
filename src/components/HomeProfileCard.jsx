import Image from '../assets/images.svg';
const HomeProfileCard = () => {
  return (
    <div className='w-full md:w-1/3 lg:w-1/3 px-4 mb-5'>
      <div className="relative bg-white p-3 mb-10 rounded-md shadow-md hover:bg-[#1D7EB9] cursor-pointer hover:text-white">
      <p className="mt-10">
        Absolutely amazing service! The Keeper Services transformed my office
        into a pristine workspace. I highly recommend Absolutely amazing
        service! The Keeper Services transformed my office into a pristine
        workspace.
      </p>
      <div className='flex space-x-3 justify-start items-center'>
        <img src={Image} alt="Avatar" className="w-10 h-10 rounded-sm mx-auto block my-5" />
      </div>
    </div>
    <h1 className='tex-[2rem] pl-4 font-semibold text-[#1D7EB9]'>Mohamed Khan</h1>
    <p className='pl-4 text-[0.8rem]'>Business Owner</p>
    </div>
  );
};

export default HomeProfileCard;