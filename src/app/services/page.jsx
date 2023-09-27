import Breadcrumb from "@/components/Breadcrumb";
import Services from "@/components/Services";
import Subscribe from "@/components/Subscribe";
const page = () => {
  return (
    <>
      <Breadcrumb title="Our Services" />
      <Services />
      <Subscribe />
    </>
  );
};

export default page;
