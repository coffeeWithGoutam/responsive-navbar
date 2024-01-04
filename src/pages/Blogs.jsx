import Blog from "../assets/blog.svg";
import Card from "../components/Card";
import ParagraphList from "../components/ParagraphList";

const Blogs = () => {
  return (
    <div className="">
      <div className="text-center mt-5">
        <h1 className="font-bold text-[#1D7EB9] text-base">Home-Blogs</h1>
        <h1 className="font-semibold text-4xl mb-6">Blogs Details</h1>
      </div>
      <img src={Blog} className="w-screen rounded-lg h-[22rem] mb-4" />
      <h1 className="text-xl p-2 font-semibold">
        How to Become a Successful Business Person in your Life
      </h1>
      <p className="p-2 text-base">
        We design and develop web and mobile applications for our clients
        worldwide, focusing on outstanding user experience. We design and
        develop web and mobile applications for We design and develop web and
        mobile applications for our clients world wide, focusing on outstanding
        user experience. We design and develop web and mobile applications for
        We design and develop web and mobile applications for our clients world
        wide, focusing on outstanding user experience. We design and develop web
        and mobile applications forWe design and develop web and mobile
        applications for our clients world wide, focusing on outstanding user
        experience. We design and develop web and mobile applications for We
        design and develop web and mobile applications for our clients world
        wide, focusing on outstanding user experience. We design and develop web
        and mobile applications forWe design and develop web and mobile
        applications for our clients world wide, focusing on outstanding user
        experience. We design and develop web and mobile applications for We
        design and develop web and mobile applications for our clients world
        wide, focusing on outstanding user experience. We design and develop web
        and mobile applications for
      </p>
      <ParagraphList />
      <p className="p-2 text-base mt-8">
        We design and develop web and mobile applications for our clients
        worldwide, focusing on outstanding user experience. We design and
        develop web and mobile applications for We design and develop web and
        mobile applications for our clients worldwide, focusing on outstanding
        user experience. We design and develop web and mobile applications forWe
        design and develop web and mobile applications for our clients
        worldwide, focusing on outstanding user experience. We design and
        develop web and mobile applications forWe design and develop web and
        mobile applications for our clients worldwide, focusing on outstanding
        user experience. We design and develop web and mobile applications forWe
        design and develop web and mobile applications for our clients
        worldwide, focusing on outstanding user experience. We design and
        develop web and mobile applications forWe design and develop web and
        mobile applications for our clients worldwide, focusing on outstanding
        user experience. We design and develop web and mobile applications forWe
        design and develop web and mobile applications for our clients
        worldwide, focusing on outstanding user experience. We design and
        develop web and mobile applications for
      </p>
      <h1 className="text-xl font-semibold text-[#2F3045] p-2 mt-8">Related Blogs</h1>
      <div className="flex p-8 justify-evenly items-center">
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  );
};

export default Blogs;
