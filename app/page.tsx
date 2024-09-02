import { AboutUs } from "@/components/Home/AboutUs";
import { Banner } from "@/components/Home/Banner";
import { Testimonial } from "@/components/Home/Testimonial";
import { Tiles } from "@/components/Home/Tiles";
import { ZigZag } from "@/components/Home/ZigZag";

export default function Home() {
  return (
    <>
      <Banner />
      <Tiles />
      <AboutUs />
      <ZigZag />
      <Testimonial />
    </>
  );
}
