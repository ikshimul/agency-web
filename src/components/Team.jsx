import getTeamList from "@/utils/getTeamList";

const Team = async () => {
  const teams = await getTeamList();
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
        <div className="py-20 bg-white radius-for-skewed">
          <div className="container mx-auto px-4">
            <div className="mb-8 lg:mb-16 mx-auto">
              <span className="text-xl lg:text-xl my-text-color font-bold uppercase">
                Our Team Members
              </span>
              <h2 className="text-xl lg:text-xl font-bold font-heading">
                Check our awesome team <br /> members
              </h2>
            </div>
            <div className="flex flex-wrap -mx-4">
              {teams.map((team, index) => {
                return (
                  <div className="mb-6 w-full lg:w-1/3 px-4" key={index}>
                    <div className="relative items-center bg-white rounded shadow overflow-hidden">
                      <img
                        className="w-full lg:w-full h-[450px] object-cover"
                        src={team.image}
                        alt=""
                      />
                      <div className="absolute team-social-link flex">
                        <a className="mr-3 pt-[10px] pl-[10px]" href="#">
                          <img src="atis-assets/social/facebook.svg" alt="" />
                        </a>
                        <a className="mr-3 pt-[10px] pl-[10px]" href="#">
                          <img src="atis-assets/social/twitter.svg" alt="" />
                        </a>
                        <a href="#" className="mr-3 pt-[10px] pl-[10px]">
                          <img src="atis-assets/social/instagram.svg" alt="" />
                        </a>
                      </div>
                      <div className="w-full lg:w-full lg:pl-6 pt-4 pb-4 text-center">
                        <h4 className="mb-2 text-2xl font-bold font-heading">
                          {team.name}
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
    </div>
  );
};

export default Team;
