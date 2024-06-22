import { MdStarRate } from "react-icons/md";

const SkeletonEffect = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto my-10 flex gap-10">
        <div className="w-[300px] h-[400px] bg-gray-200 animate-pulse "></div>
        <div className="w-3/5 flex flex-col justify-center gap-10 ">
          <div className="">
            <h1 className="w-[600px] h-[40px] bg-gray-200 animate-pulse"></h1>
            <div className="w-[20px] h-[20px] bg-gray-200 animate-pulse mt-4">
              <p className="w-[70px] h-[20px] bg-gray-200 animate-pulse"></p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-base">
            <div className="flex">
              <MdStarRate className=" text-gray-200 animate-pulse" />
              <MdStarRate className=" text-gray-200 animate-pulse" />
              <MdStarRate className=" text-gray-200 animate-pulse"/>
              <MdStarRate className=" text-gray-200 animate-pulse"/>
              <MdStarRate className=" text-gray-200 animate-pulse"/>
            </div>
            <p className="w-[70px] h-[20px] bg-gray-200 animate-pulse"></p>
          </div>
          <p className="w-[400px] h-[20px] bg-gray-200 animate-pulse"></p>
          <div className="flex gap-4">
            <div className="w-52  h-[20px] bg-gray-200 animate-pulse border p-3"></div>
            <button
              onClick={() => addToCart(productDetails)}
              className="w-[70px] h-[20px] bg-gray-200 animate-pulse rounded-md "
            ></button>
          </div>
          <p className=" w-[70px] h-[20px] bg-gray-200 animate-pulse"></p>
        </div>
      </div>
    </div>
  );
};

export default SkeletonEffect;
