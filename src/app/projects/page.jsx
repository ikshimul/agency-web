import AllProject from "@/components/AllProject";
import Breadcrumb from "@/components/Breadcrumb";
import Subscribe from "@/components/Subscribe";

const page = () => {
  return (
    <>
      <Breadcrumb title="Projects" />
      <AllProject />
      <Subscribe />
    </>
  );
};

export default page;
