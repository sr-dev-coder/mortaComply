import Link from "next/link";
import { Button } from "../ui/button";
import { Logo } from "../Logo";

export const AboutUs = () => {
  return (
    <section className="py-[155px]">
      <div className="container mx-auto px-4">
        <div className="flex">
          <div className="basis-1/2 flex justify-center items-center relative">
            <Logo />
            <div className="w-[354px] h-[200px] opacity-20 bg-[#64e36a] absolute left-[50%] top-[25%] -translate-y-1/2 -translate-x-1/2 blur-[100px]"></div>
            <div className="w-[354px] h-[200px] opacity-20 bg-blue absolute left-[30%] top-[60%] -translate-y-1/2 -translate-x-1/2 blur-[100px]"></div>
          </div>
          <div className="basis-1/2">
            <h2 className="text-green text-7xl font-semibold mb-8">About Us</h2>
            <div className="text-white [&>p]:mb-6 last:[&>p]:mb-0 mb-8">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <p>
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link href="#">Request a demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
