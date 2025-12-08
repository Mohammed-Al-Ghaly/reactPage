const Hero = () => {
  return (
    // Hero Section
    <main className="flex flex-col sm:flex-row max-w-6xl mx-auto items-center h-[calc(100vh-72px)] justify-around gap-10 px-4">
      {/* Hero Content*/}
      <div className="flex flex-col gap-9 mt-6 text-center sm:text-left">
        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-extrabold">
          YOUR FEET DESERVE THE BEST
        </h1>
        <p className="text-gray-600 text-sm sm:text-base font-semibold my-5 max-w-[400px] mx-auto sm:mx-0">
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 my-5 justify-center sm:justify-start">
          <button className="bg-red-600 text-white font-semibold rounded px-3 py-1">
            Shop Now
          </button>
          <button className="bg-transparent text-gray-600 text-lg sm:text-xl font-semibold border rounded px-3 py-1 hover:bg-red-600 hover:text-white duration-200 ease-in">
            Category
          </button>
        </div>
        <div className="shopping">
          <p className="text-sm mb-2.5 text-gray-600">Also Available On</p>
          <div className="flex gap-4 justify-center sm:justify-start">
            <img
              src="/flipkart.png"
              width={32}
              height={32}
              alt="flipdart logo"
            />
            <img src="/amazon.png" width={30} height={30} alt="amazon logo" />
          </div>
        </div>
      </div>
      {/* Hero Image*/}
      <div className="w-full max-w-[480px] mt-6 sm:mt-0">
        <img
          src="/hero-image.png"
          alt="hero img"
          className="w-full h-auto animate-fadeIn"
        />
      </div>
    </main>
  );
};
export default Hero;
