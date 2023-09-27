export async function generateMetadata() {
  return {
    title: "Testimonial",
  };
}

const layout = ({ children }) => {
  return <div>{children}</div>;
};

export default layout;
