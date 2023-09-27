import getFeaturedProject from "@/utils/getFeaturedProject";
import DateFormat from "./DateFormat";

const FeaturedProject = async () => {
  const featureProjects = await getFeaturedProject();
  const first_project = featureProjects.find(() => true);
  const second_latest = featureProjects.slice(1, 5);
  return (
    <>
      <section className="relative my-background-color">
        <div className="relative pt-5 lg:pt-20 pb-5 z-10">
          <div className="container mx-auto px-4 pb-11">
            <div className="mb-16 flex flex-wrap justify-center md:justify-between items-center">
              <div className="text-center lg:text-left">
                <span className="my-text-color font-bold">
                  Featured Projects
                </span>
                <h2 className="text-4xl lg:text-xl font-bold font-heading pt-3">
                  We Provide the Perfect Solutaion
                  <br />
                  to your business growth
                </h2>
              </div>
            </div>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0 flex items-center">
                <div className="h-full pb-[63px]">
                  <img
                    className="w-full h-full mx-auto object-cover rounded"
                    src={first_project.image}
                    alt=""
                  />
                  <p className="text-[10px] pt-2">
                    App Design&nbsp;-&nbsp;
                    <DateFormat dateString={first_project.created_at} />
                  </p>
                  <p className="text-[13px] pt-2 font-semibold">
                    {first_project.title}
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-2">
                <div className="flex flex-wrap lg:mb-2">
                  {second_latest.map((project, index) => {
                    return (
                      <div
                        className="md:w-1/2 lg:w-1/2 h-auto pb-2"
                        key={index}
                      >
                        <img
                          className="w-full pl-2 object-cover rounded-2xl lg:rounded-2xl"
                          src={project.image}
                          alt=""
                        />
                        <p className="text-[10px] pl-3 pt-2">
                          App Design&nbsp;-&nbsp;
                          <DateFormat dateString={project.created_at} />
                        </p>
                        <p className="text-[12px] pl-3 pt-2 font-semibold">
                          {project.title}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <div className="flex flex-wrap"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedProject;
