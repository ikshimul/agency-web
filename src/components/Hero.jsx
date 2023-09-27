import getHeroList from "@/utils/getHeroList";
import Link from "next/link";
import Brands from "./Brands";
const Hero = async () => {
  const hero = await getHeroList();
  return (
    <div>
      <section className="relative my-background-color">
        <div className="relative pt-12 lg:pt-20 pb-10 z-10">
          <div className="container mx-auto px-4 pb-11">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0 flex items-center">
                <div className="w-full text-center lg:text-left">
                  <div className="max-w-md mx-auto lg:mx-0">
                    <h2 className="mb-3 text-4xl lg:text-5xl font-bold font-heading">
                      {hero.title}
                      {/* <span>Build &amp; Launch without</span>
                      <span className="text-green-600">problems</span> */}
                    </h2>
                  </div>
                  <div className="max-w-sm mx-auto lg:mx-0">
                    <p className="mb-6 text-black leading-loose">
                      {hero.description}
                    </p>
                    <div>
                      <Link
                        className="inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 leading-loose my-button-bg-color hover:bg-green-700 text-white font-semibold rounded-lg transition duration-200"
                        href="#"
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-4">
                <div className="flex flex-wrap lg:mb-2">
                  <img
                    className="w-full md:w-1/2 lg:w-2/3 h-64 p-2 object-cover rounded-2xl lg:rounded-2xl"
                    src={hero.image2}
                    alt=""
                  />
                  <img
                    className="w-full md:w-1/2 lg:w-1/3 h-64 p-2 object-cover rounded-2xl lg:rounded-2xl"
                    src={hero.image1}
                    alt=""
                  />
                </div>
                <div className="flex flex-wrap lg:mb-4">
                  <img
                    className="w-full md:w-1/2 lg:w-1/3 h-64 p-2 object-cover rounded-2xl lg:rounded-2xl"
                    src={hero.image4}
                    alt=""
                  />
                  <img
                    className="w-full md:w-1/2 lg:w-2/3 h-64 p-2 object-cover rounded-2xl lg:rounded-2xl"
                    src={hero.image3}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <Brands />
        </div>
      </section>
    </div>
  );
};

export default Hero;
