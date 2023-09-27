import getAllProject from "@/utils/getAllProject";

const AllProject = async () => {
  const projects = await getAllProject();
  return (
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
      <div className="py-20 bg-white radius-for-skewed">
        <div className="container px-4 mx-auto">
          <div className="mb-16 flex flex-wrap">
            <div className="">
              <span className="text-xl lg:text-xl my-text-color font-bold uppercase">
                All Project
              </span>
              <h2 className="text-xl lg:text-xl font-bold font-heading pt-2">
                Better Agency/SEO Solution At
                <br />
                Your Fingertips
              </h2>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4 mb-4">
            {projects.map((project, index) => {
              return (
                <div className="mb-6 w-full lg:w-1/3 px-4" key={index}>
                  <div className="relative items-center bg-white rounded-lg shadow overflow-hidden p-4">
                    <img
                      className="w-full lg:w-full h-[450px] object-cover"
                      src={project.image}
                      alt=""
                    />
                    <div className="w-full lg:w-full lg:pl-6 pt-4 pb-4 text-center">
                      <h4 className="mb-2 text-xl font-bold font-heading">
                        {project.title}
                      </h4>
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
  );
};

export default AllProject;
