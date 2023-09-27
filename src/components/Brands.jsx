import getBrands from "@/utils/getBrands";

const Brands = async () => {
  const brands = await getBrands();
  return (
    <section className="pt-8 pb-8 bg-white">
      <div className="container mx-auto text-center">
        {/* <h3 className="mb-16 text-2xl font-heading">
          Trusted by brands all over the world
        </h3> */}
        <div className="flex flex-wrap -mx-2">
          {brands.map((brand, index) => {
            return (
              <div
                className="mb-12 lg:mb-0 w-full md:w-1/2 lg:w-1/4 px-2"
                key={index}
              >
                <a href="#">
                  <img
                    className="mx-auto h-8"
                    src={brand.image}
                    alt={brand.name}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Brands;
