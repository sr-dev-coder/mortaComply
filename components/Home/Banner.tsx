import Link from "next/link";
import { Button } from "../ui/button";

export const Banner = () => {
  return (
    <section className="h-screen flex justify-center items-center overflow-hidden">
      <div className="text-center">
        <div className="bg-white/5 h-[70px] mb-7 inline-flex items-center rounded-full text-white/50 pr-8 pl-2 justify-center ">
          <span className="rounded-full w-14 h-14 bg-white/10 mr-5"></span>
          Trusted by 1000+ people...
        </div>
        <h1 className="text-7xl gradient-1 font-bold leading-tight">
          Revolutionize Mortgage{" "}
          <span className="block">Compliance with Us</span>
        </h1>
        <p className="max-w-[750px] mx-auto text-xl text-white/50 font-light my-9">
          Partner with Optimize Compliance Solutions to streamline compliance,
          cut costs, and enhance mortgage lending processes with innovative
          solutions.
        </p>
        <Button asChild>
          <Link href="#">Request a Demo</Link>
        </Button>
      </div>
      <div className="w-[30px] h-[100%] bg-blue absolute blur-[60px] top-[20%] left-[20%] rounded-lg opacity-30 -rotate-[50deg]"></div>
      {/* <div className="w-[30px] h-[100%] bg-blue absolute blur-[60px] top-[60%] left-[10%] rounded-lg opacity-30 -rotate-[50deg]"></div> */}
      <div className="w-[30px] h-[100%] bg-green absolute blur-[60px] -top-[30%] left-[90%] rounded-lg opacity-30 -rotate-[50deg]"></div>
    </section>
  );
};
