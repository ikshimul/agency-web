import getWorkList from "@/utils/getWorkList";
import { faBriefcase, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const HowWorks = async () => {
  const howWorks = await getWorkList();
  return (
    <div>
      <section>
        <div className="py-20 radius-for-skewed">
          <div className="container mx-auto px-4">
            <div className="mb-14 mx-auto">
              <span className="text-green-600 font-bold">WORK LIST</span>
              <h2 className="text-xl lg:text-[18px] font-bold font-heading pt-3">
                We Provide the Perfect Solutaion
                <br />
                to your business growth
              </h2>
            </div>
            <div className="relative flex flex-wrap -mx-4 z-0">
              {howWorks.map((work, index) => {
                return (
                  <div className="w-full lg:w-1/3 px-4" key={index}>
                    <p className="mb-4 lg:mb-4 w-16 h-16 my-background-color items-center justify-center">
                      <span className="mb-4 lg:mb-6 mx-auto flex w-16 h-16 items-center justify-center">
                        <FontAwesomeIcon
                          className="items-center justify-center w-6 h-6 text-black"
                          icon={faBriefcase}
                        ></FontAwesomeIcon>
                      </span>

                      {/* <span className="mb-4 lg:mb-6 mx-auto flex w-16 h-16 items-center justify-center my-background-color rounded-lg text-white text-2xl">
                        <FontAwesomeIcon
                          className="fa-solid fa-briefcase w-6 h-6 text-black"
                          icon={faBriefcase}
                        ></FontAwesomeIcon>
                      </span> */}
                    </p>

                    <h3 className="mb-2 text-md font-bold font-heading">
                      {work.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-loose">
                      {work.des}
                    </p>
                    <p className="pt-6">
                      <button class="bg-grey-light text-sm hover:bg-grey text-grey-darkest font-bold py-2 rounded inline-flex items-center">
                        Learn More &nbsp;
                        <FontAwesomeIcon
                          className="h-4 w-4 mr-2"
                          icon={faArrowRight}
                        ></FontAwesomeIcon>
                      </button>
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowWorks;
