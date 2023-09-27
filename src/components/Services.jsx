import getAllService from "@/utils/getAllService";

const Services = async () => {
  const services = await getAllService();
  return (
    <div>
      <section>
        <div className="skew skew-top mr-for-radius">
          <svg
            className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
            viewBox="0 0 10 10"
            preserveAspectRatio="none"
          >
            <polygon fill="currentColor" points="0 0 10 10 0 10" />
          </svg>
        </div>
        <div className="skew skew-top ml-for-radius">
          <svg
            className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
            viewBox="0 0 10 10"
            preserveAspectRatio="none"
          >
            <polygon fill="currentColor" points="0 10 10 0 10 10" />
          </svg>
        </div>
        <div className="py-12 bg-white radius-for-skewed">
          <div className="container mx-auto px-4">
            <span className="text-xl lg:text-xl my-text-color font-bold uppercase">
              OUR ALL SERVICES
            </span>
            <h2 className="text-xl lg:text-xl font-bold font-heading pt-2">
              We Provide Best Web Design
              <br /> Services
            </h2>
            <div className="flex flex-wrap items-center -mx-4 pt-4">
              {services.map((service, index) => {
                return (
                  <div
                    className="mb-12 lg:mb-0 w-full lg:w-1/2 flex px-4 py-4"
                    key={index}
                  >
                    <div className="p-3 bg-white rounded shadow">
                      <h2 className="text-xl lg:text-xl font-bold font-heading">
                        {service.title}
                      </h2>
                      <div className="mb-6">
                        <p className="text-gray-500 leading-loose text-sm">
                          {service.des}
                        </p>
                      </div>
                      <div className="mb-4 flex flex-wrap items-end">
                        <div className="mb-4 lg:mb-0 w-full lg:w-2/3 px-3">
                          <img
                            className="w-full h-32 lg:h-48 object-cover rounded"
                            src={service.image1}
                          />
                        </div>
                        <div className="w-full lg:w-1/3 px-3">
                          <img
                            className="w-full h-32 lg:h-48  object-cover rounded"
                            src={service.image2}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="flex flex-wrap items-start">
                        <div className="mb-4 lg:mb-0 w-full lg:w-1/3 px-3">
                          <img
                            className="w-full h-32 lg:h-96 object-cover rounded"
                            src={service.image3}
                            alt=""
                          />
                        </div>
                        <div className="w-full lg:w-2/3 px-3">
                          <img
                            className="w-full h-32 lg:h-96 object-cover rounded"
                            src={service.image4}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="skew skew-bottom mr-for-radius">
          <svg
            className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
            viewBox="0 0 10 10"
            preserveAspectRatio="none"
          >
            <polygon fill="currentColor" points="0 0 10 0 0 10" />
          </svg>
        </div>
        <div className="skew skew-bottom ml-for-radius">
          <svg
            className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
            viewBox="0 0 10 10"
            preserveAspectRatio="none"
          >
            <polygon fill="currentColor" points="0 0 10 0 10 10" />
          </svg>
        </div>
      </section>
    </div>
  );
};

export default Services;
