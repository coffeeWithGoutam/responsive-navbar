import Card from "../components/Card";
const AppIdeas = () => {
  return (
    <div className="">
      <div className="text-center mt-5">
        <h1 className="font-bold text-[#1D7EB9] text-base">Home-App Ideas</h1>
        <h1 className="font-semibold text-4xl mb-6">App Ideas</h1>
      </div>
      <div className="flex p-8 justify-evenly items-center">
        <Card/>
        <Card/>
        <Card/>
      </div>
      <div className="flex p-8 justify-evenly items-center">
        <Card/>
        <Card/>
        <Card/>
      </div>
      <div className="flex p-8 justify-evenly items-center">
        <Card/>
        <Card/>
        <Card/>
      </div>
      <div className="flex p-8 justify-evenly items-center">
        <Card/>
        <Card/>
        <Card/>
      </div>
      <div className="flex justify-center">
            <button
              type='submit'
              className='bg-[#1D7EB9] text-white px-4 py-2 rounded-md hover:bg-blue-900'
            >
              Load More
            </button>
          </div>
    </div>
  )
}

export default AppIdeas;