import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Breadcrumb = ({ title }) => {
  return (
    <section className=" bg-gray-50">
      <div className="py-20 px-4 container mx-auto bg-gray-50">
        <h2 className="text-black font-bold text-xl pb-[10px]">{title}</h2>
        <p>
          <span className="font-bold">Home</span>
          <span className="pl-[10px] pr-[10px]">
            <FontAwesomeIcon
              className="items-center justify-center w-[12px] h-[12px] text-black inline-block"
              icon={faChevronRight}
            ></FontAwesomeIcon>
          </span>
          {title}
        </p>
      </div>
    </section>
  );
};

export default Breadcrumb;
