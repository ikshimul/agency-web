import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <section>
      <div className="skew skew-top mr-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-gray-900"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 0 10 10 0 10" />
        </svg>
      </div>
      <div className="skew skew-top ml-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-gray-900"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 10 10 0 10 10" />
        </svg>
      </div>
      <div className="py-12 bg-black radius-for-skewed">
        <div className="container mx-auto px-4">
          <div className="pb-1 flex flex-wrap items-center justify-between">
            <div className="w-full lg:w-1/5 mb-12 lg:mb-4">
              <a
                className="inline-block text-3xl font-bold leading-none"
                href="#"
              >
                <img
                  className="h-12"
                  src="atis-assets/logo/atis/atis-mono-white.svg"
                  alt=""
                  width="auto"
                />
              </a>
              <p className="pt-2 text-white text-[11px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque efficitur nisl sodales egestas lobortis.
              </p>
              <div className="mb-4 lg:mb-0 order-first lg:order-last pt-4">
                <a
                  className="inline-block mr-2 p-2 my-button-bg-color hover:bg-gray-700 rounded-full"
                  href="#"
                >
                  <span className="">
                    <FontAwesomeIcon
                      className="items-center justify-center w-[15px] h-[15px]  text-white"
                      icon={faFacebook}
                    ></FontAwesomeIcon>
                  </span>
                </a>
                <a
                  className="inline-block mr-2 p-2 my-button-bg-color hover:bg-gray-700 rounded-full"
                  href="#"
                >
                  <span className="">
                    <FontAwesomeIcon
                      className="items-center justify-center w-[15px] h-[15px]  text-white"
                      icon={faTwitter}
                    ></FontAwesomeIcon>
                  </span>
                </a>
                <a
                  className="inline-block mr-2 p-2 my-button-bg-color hover:bg-gray-700 rounded-full"
                  href="#"
                >
                  <span className="">
                    <FontAwesomeIcon
                      className="items-center justify-center w-[15px] h-[15px]  text-white"
                      icon={faLinkedin}
                    ></FontAwesomeIcon>
                  </span>
                </a>
                <a
                  className="inline-block mr-2 p-2 my-button-bg-color hover:bg-gray-700 rounded-full"
                  href="#"
                >
                  <span className="">
                    <FontAwesomeIcon
                      className="items-center justify-center w-[15px] h-[15px]  text-white"
                      icon={faInstagram}
                    ></FontAwesomeIcon>
                  </span>
                </a>
              </div>
            </div>
            <div className="lg:w-auto">
              <h4 className="text-white font-bold">Quick Links</h4>
              <ul className="items-center">
                <li className="w-full md:w-auto mb-2 md:mb-0">
                  <Link
                    className="lg:text-[12px] text-white hover:text-gray-300"
                    href={"/"}
                  >
                    Start
                  </Link>
                </li>

                <li className="w-full md:w-auto mb-2 md:mb-0">
                  <Link
                    className="lg:text-[12px] text-white hover:text-gray-300"
                    href={"/team"}
                  >
                    Team
                  </Link>
                </li>

                <li className="w-full md:w-auto mb-2 md:mb-0">
                  <Link
                    className="lg:text-[12px] text-white hover:text-gray-300"
                    href={"/services"}
                  >
                    Services
                  </Link>
                </li>

                <li className="w-full md:w-auto mb-2 md:mb-0">
                  <Link
                    className="lg:text-[12px] text-white hover:text-gray-300"
                    href={"/projects"}
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    className="lg:text-[12px] text-white hover:text-gray-300"
                    href={"/testimonials"}
                  >
                    Testimonials
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:w-auto">
              <h4 className="text-white font-bold pb-3">Address</h4>
              <ul className="items-center text-white text-[12px]">
                <li className="w-full md:w-auto mb-2 md:mb-0">
                  6174 Ernser Divide Suite 428
                </li>
                <li className="w-full md:w-auto mb-2 md:mb-0">Kerlukeville</li>
                <li className="w-full md:w-auto mb-2 md:mb-0">
                  The United States of America
                </li>
                <li>&nbsp;</li>
                <li>&nbsp;</li>
                <li>&nbsp;</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap justify-between items-center">
            <p className="order-last text-sm text-gray-400">
              © 2024. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      <div className="skew skew-bottom mr-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-gray-900"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 0 10 0 0 10" />
        </svg>
      </div>
      <div className="skew skew-bottom ml-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-gray-900"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 0 10 0 10 10" />
        </svg>
      </div>
    </section>
  );
};

export default Footer;
