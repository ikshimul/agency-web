import getTestimonialList from "@/utils/getTestimonialList";

const Testimonial = async () => {
  const testimonial_list = await getTestimonialList();
  return (
    <div>
      <section>
        <div className="py-20 bg-white radius-for-skewed overflow-hidden">
          <div className="container mx-auto px-4 pb-6 lg:pb-16">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-4/5 mb-4 lg:mb-0">
                <span className="text-xl lg:text-xl my-text-color font-bold uppercase">
                  Testimonial List
                </span>
                <h2 className="text-xl lg:text-xl font-bold font-heading pt-2">
                  Better Agency/SEO Solution At
                  <br />
                  Your Fingertips
                </h2>
              </div>
            </div>
          </div>
          <div className="relative flex">
            <div className="flex flex-wrap container px-2 mx-auto">
              {testimonial_list.map((testimonial, index) => {
                return (
                  <div className="mb-4 w-full lg:w-1/3 px-3" key={index}>
                    <div className="p-8 bg-white rounded shadow text-center">
                      <div
                        className="bg-no-repeat bg-left-top"
                        style={{
                          backgroundImage:
                            'url("atis-assets/elements/quote-grey.svg")',
                        }}
                      >
                        <img
                          className="mb-2 mx-auto w-[100px] h-[100px] rounded-lg object-cover"
                          src={testimonial.image}
                          alt=""
                        />
                        <p className="mb-4 text-gray-500 leading-loose">
                          {testimonial.msg}
                        </p>
                        <h4 className="mb-1 text-2xl font-bold font-heading">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-500">
                          {testimonial.designation}
                        </p>
                      </div>
                    </div>
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

export default Testimonial;
