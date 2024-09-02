export const Testimonial = () => {
  return (
    <section className="py-36">
      <div className="container mx-auto px-4">
        <div className="both-side-gradient border-solid border-[1px] border-white/10 rounded-[150px] py-36 px-12 relative overflow-hidden">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="gradient-1 text-7xl leading-snug font-semibold mb-8">
              What people are saying
            </h2>
            <p className="max-w-[750px] mx-auto text-xl text-white/50 font-light my-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.{" "}
            </p>
            <div className="text-white/50 font-normal">
              <strong className="text-green font-semibold block text-xl mb-1">
                John Doe
              </strong>
              Senior Vice President
            </div>
          </div>
          <div className="absolute left-0 top-0 w-full h-full pattern"></div>
        </div>
      </div>
    </section>
  );
};
