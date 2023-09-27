const Subscribe = () => {
  return (
    <section>
      <div className="py-14 radius-for-skewed">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-14 mx-auto">
            <span className="my-text-color font-bold">SUBSCRIBE</span>
            <h2 className="text-xl lg:text-[18px] font-bold font-heading pt-3">
              Subscribe To Get The Latest
              <br />
              News About Us
            </h2>
            <p className="text-[10px] text-gray-500 pt-4">
              Please Dop Your Email Below To Get Daily Update About What We Do
            </p>
            <div className="pt-4 w-128 mx-auto">
              <div className="relative flex items-center justify-center">
                <input
                  id="10"
                  type="text"
                  placeholder="Enter Your Email Address"
                  className="peer relative h-12 w-full rounded-lg bg-white border border-black pl-4 pr-20 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:drop-shadow-lg"
                />
                <button className="absolute right-[10px] h-[36px] w-24 rounded-lg subscribe-btn-bg-color text-xs font-semibold text-white transition-all duration-200 ease-in-out group-focus-within:bg-blue-400 group-focus-within:hover:bg-blue-600">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
