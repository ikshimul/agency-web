import Brands from "@/components/Brands";
import Contacts from "@/components/Contacts";
import FeaturedProject from "@/components/FeaturedProject";
import Hero from "@/components/Hero";
import HowWorks from "@/components/HowWorks";
import Stats from "@/components/Stats";
import Subscribe from "@/components/Subscribe";

export default function Home() {
  return (
    <div>
      <Hero />
      <HowWorks />
      <Stats />
      <FeaturedProject />
      <Subscribe />
    </div>
  );
}
