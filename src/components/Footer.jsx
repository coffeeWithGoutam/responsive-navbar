
const Footer = () => {
  return (
    <div className='bg-[#1D7EB9]'>

      <div className='container mx-auto px-4'>
        <div className="flex flex-col text-center items-center py-14">

          <h1 className='text-3xl md:text-4xl mb-4 font-semibold'>Ready to Make an App and UX that stands out?</h1>
          <p className='text-sm md:text-base'>HASfit App rated 4.8/5 by more than 10 K reviewers while being used by 4 million users.</p>
          <button className='bg-white text-black px-4 py-1.5 rounded hover:bg-blue-700 hover:text-white mt-6 md:mt-8'>Talk to Our Expert</button>

        </div>
      </div>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className=" flex flex-wrap justify-center">

            <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">About Us</h3>
              <ul className="space-y-3 text-gray-300">
                <li ><a className="hover:ml-1"  href="#home">Our Company</a></li>
                <li ><a className="hover:ml-1"  href="#about">Career</a></li>
                <li ><a className="hover:ml-1"  href="#services">Contact Us</a></li>
                <li ><a className="hover:ml-1"  href="#contact">Blogs</a></li>
                <li ><a className="hover:ml-1"  href="#contact">Sitemap</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Services</h3>
              <ul className="space-y-3 text-gray-600">
                <li><a href="#home">Our Company</a></li>
                <li><a href="#about">Career</a></li>
                <li><a href="#services">Contact Us</a></li>
                <li><a href="#contact">Blogs</a></li>
                <li><a href="#contact">Sitemap</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Tools</h3>
              <ul className="space-y-3 text-gray-600">
                <li><a href="#home">Our Company</a></li>
                <li><a href="#about">Career</a></li>
                <li><a href="#services">Contact Us</a></li>
                <li><a href="#contact">Blogs</a></li>
                <li><a href="#contact">Sitemap</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Case Studies</h3>
              <ul className="space-y-3 text-gray-600">
                <li><a href="#home">Our Company</a></li>
                <li><a href="#about">Career</a></li>
                <li><a href="#services">Contact Us</a></li>
                <li><a href="#contact">Blogs</a></li>
                <li><a href="#contact">Sitemap</a></li>
              </ul>
            </div>

          </div>
        </div>
        {/* List Section */}
        <hr className='w-full my-8 border-t border-gray-600' />
        <div className='container mx-auto px-4 mt-5 mb-4'>
          <div className="flex flex-col md:flex-row justify-center items-center ">

            <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Office 1</h3>
              <p className='text-sm text-gray-600'>C-102, Sector 65, Noida - 201301Delhi NCR, India</p>
            </div>

            <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Office 2</h3>
              <p className='text-sm text-gray-600'>C-102, Sector 65, Noida - 201301Delhi NCR, India</p>
            </div>

            <div className="w-full md:w-1/3 px-4">
              <h3 className="text-lg font-semibold mb-2">Contact</h3>
              <p className='text-sm text-gray-600'>sales@agicent.com</p>

            </div>

          </div>
        </div>

        <div className='absolute left-0 right-0 bg-[#151E23] py-3 px-4 text-center text-white'>
          <p className="font-medium">© 2023 Vereda Digital Learning. All Rights Reserved.</p>
        </div>
      </footer>
    </div >
  );
}

export default Footer;
