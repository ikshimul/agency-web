import Testimonial from "@/components/Testimonial";
import Breadcrumb from "@/components/Breadcrumb";
import Subscribe from "@/components/Subscribe";

const page = () => {
  return (
    <>
      <Breadcrumb title="Testimonial" />
      <Testimonial />
      <Subscribe />
    </>
  );
};

export default page;
