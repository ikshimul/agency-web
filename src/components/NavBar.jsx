"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const NavBar = () => {
  const NavClick = () => {
    // open
    const burger = document.querySelectorAll(".navbar-burger");
    const menu = document.querySelectorAll(".navbar-menu");

    if (burger.length && menu.length) {
      for (var i = 0; i < burger.length; i++) {
        burger[i].addEventListener("click", function () {
          for (var j = 0; j < menu.length; j++) {
            menu[j].classList.toggle("hidden");
          }
        });
      }
    }

    // close
    const close = document.querySelectorAll(".navbar-close");
    const backdrop = document.querySelectorAll(".navbar-backdrop");

    if (close.length) {
      for (var i = 0; i < close.length; i++) {
        close[i].addEventListener("click", function () {
          for (var j = 0; j < menu.length; j++) {
            menu[j].classList.toggle("hidden");
          }
        });
      }
    }

    if (backdrop.length) {
      for (var i = 0; i < backdrop.length; i++) {
        backdrop[i].addEventListener("click", function () {
          for (var j = 0; j < menu.length; j++) {
            menu[j].classList.toggle("hidden");
          }
        });
      }
    }
  };

  const current = usePathname();

  return (
    <div className="my-background-color">
      <div className="container mx-auto">
        {/* <nav className="relative px-6 py-6 flex justify-between items-center my-background-color"> */}
        <nav className="relative h-[80px] px-6 py-6 flex justify-between items-center ">
          <a className="text-3xl font-bold leading-none" href="#">
            <img
              className="h-12"
              src="atis-assets/logo/atis/atis-mono-black.svg"
              alt=""
              width="auto"
            />
          </a>
          <div className="lg:hidden">
            <button
              onClick={() => {
                NavClick();
              }}
              className="navbar-burger flex items-center text-green-600 p-3"
            >
              <svg
                className="block h-4 w-4 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          {/* <ul className="hidden absolute top-1/2 right-0 transform -translate-y-1/2 -translate-x-1/2  lg:flex lg:mx-auto lg:items-end lg:w-auto lg:space-x-10"> */}
          <ul className="hidden absolute px-6 -mx-4 top-1/2 right-0 transform -translate-y-1/2 lg:flex lg:mx-auto lg:items-end lg:w-auto lg:space-x-6">
            <li>
              <Link
                className={
                  current === "/"
                    ? "text-sm text-green-600 font-bold"
                    : "text-sm text-black font-bold hover:text-gray-500 "
                }
                href={"/"}
              >
                Start
              </Link>
            </li>
            <li>
              <Link
                className={
                  current === "/team"
                    ? "text-sm text-green-600 font-bold"
                    : "text-sm text-black font-bold hover:text-gray-500 "
                }
                href={"/team"}
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                className={
                  current === "/services"
                    ? "text-sm text-green-600 font-bold"
                    : "text-sm text-black font-bold hover:text-gray-500 "
                }
                href={"/services"}
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                className={
                  current === "/projects"
                    ? "text-sm text-green-600 font-bold"
                    : "text-sm text-black font-bold hover:text-gray-500 "
                }
                href={"/projects"}
              >
                Projects
              </Link>
            </li>

            <li>
              <Link
                className={
                  current === "/testimonials"
                    ? "text-sm text-green-600 font-bold"
                    : "text-sm text-black font-bold hover:text-gray-500 "
                }
                href={"/testimonials"}
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                className={
                  current === "/login"
                    ? "text-sm text-green-600 font-bold"
                    : "text-sm text-black font-bold hover:text-gray-500 py-2 px-4 border border-green-500 my-border-color rounded-lg"
                }
                href={"/testimonials"}
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                className={
                  current === "/register"
                    ? "text-sm text-green-600 font-bold outline outline-offset-2 outline-1"
                    : "text-sm hover:text-black my-button-bg-color hover:my-button-bg-color text-white font-bold py-2 px-4 rounded-lg"
                }
                href={"/"}
              >
                Register
              </Link>
            </li>
          </ul>
        </nav>

        <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
          <div
            onClick={() => {
              NavClick();
            }}
            className="navbar-backdrop  fixed inset-0 bg-gray-800 opacity-25"
          />
          <nav className="relative flex flex-col py-6 px-6 h-full w-full bg-white border-r overflow-y-auto">
            <div className="flex items-center mb-8">
              <a className="mr-auto text-3xl font-bold leading-none" href="#">
                <img
                  className="h-10"
                  src="atis-assets/logo/atis/atis-mono-black.svg"
                  alt=""
                  width="auto"
                />
              </a>
              <button
                onClick={() => {
                  NavClick();
                }}
                className="navbar-close"
              >
                <svg
                  className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div>
              <ul>
                <li className="mb-1">
                  <Link
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded"
                    href={"/"}
                  >
                    Start
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded"
                    href={"/team"}
                  >
                    Team
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded"
                    href={"/services"}
                  >
                    Services
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded"
                    href={"/projects"}
                  >
                    Projects
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded"
                    href={"/"}
                  >
                    Testimonials
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
