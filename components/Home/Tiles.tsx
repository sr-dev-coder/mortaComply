import Image from "next/image";

export const Tiles = () => {
  return (
    <section className="z-10 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 gap-10 text-white">
          <div className="green-tile border-solid border-[1px] border-white/10 rounded-[60px] py-20 px-12">
            <Image src="/icon-1.png" width={56} height={56} alt="Tick Icon" />
            <h3 className="text-xl font-semibold leading-snug my-9">
              How Do I Cut Costs / Increase{" "}
              <span className="block">Revenue?</span>
            </h3>
            <ul className="text-base font-light [&>li]:mb-3 last:[&>li]:mb-0">
              <li className="flex gap-3">
                <Image
                  src="/tick-mark.png"
                  width={26}
                  height={26}
                  alt="Tick Icon"
                />
                Centralize Vendor Management
              </li>
              <li className="flex gap-3">
                <Image
                  src="/tick-mark.png"
                  width={26}
                  height={26}
                  alt="Tick Icon"
                />
                Remove Duplicate Training
              </li>
              <li className="flex gap-3">
                <Image
                  src="/tick-mark.png"
                  width={26}
                  height={26}
                  alt="Tick Icon"
                />
                Minimize MLO Downtime
              </li>
              <li className="flex gap-3">
                <Image
                  src="/tick-mark.png"
                  width={26}
                  height={26}
                  alt="Tick Icon"
                />
                Maximize Course Efficiency
              </li>
            </ul>
          </div>
          <div className="blue-tile border-solid border-[1px] border-white/10 rounded-[60px] py-20 px-12">
            <Image src="/icon-1.png" width={56} height={56} alt="Tick Icon" />
            <h3 className="text-xl font-semibold leading-snug my-9">
              Streamline Time <span className="block">Management</span>
            </h3>
            <ul className="text-base font-light [&>li]:mb-3 last:[&>li]:mb-0">
              <li className="flex gap-3">
                <Image
                  src="/tick-mark.png"
                  width={26}
                  height={26}
                  alt="Tick Icon"
                  style={{ objectFit: "contain" }}
                />
                Track and Alert Students Who Delay
              </li>
              <li className="flex gap-3">
                <Image
                  src="/tick-mark.png"
                  width={26}
                  height={26}
                  alt="Tick Icon"
                  style={{ objectFit: "contain" }}
                />
                Speed Up Auditor Response Times Significantly
              </li>
              <li className="flex gap-3">
                <Image
                  src="/tick-mark.png"
                  width={26}
                  height={26}
                  alt="Tick Icon"
                  style={{ objectFit: "contain" }}
                />
                Assign Courses Instantly for Immediate Impact
              </li>
              <li className="flex gap-3">
                <Image
                  src="/tick-mark.png"
                  width={26}
                  height={26}
                  alt="Tick Icon"
                  style={{ objectFit: "contain" }}
                />
                Maximize Efficiency in Time Management
              </li>
            </ul>
          </div>
          <div className="green-tile border-solid border-[1px] border-white/10 rounded-[60px] py-20 px-12">
            <Image src="/icon-1.png" width={56} height={56} alt="Tick Icon" />
            <h3 className="text-xl font-semibold leading-snug my-9">
              How Can I Achieve <span className="block">Compliance</span>
            </h3>
            <ul className="text-base font-light [&>li]:mb-3 last:[&>li]:mb-0">
              <li className="flex gap-3">
                <Image
                  src="/tick-mark.png"
                  width={26}
                  height={26}
                  alt="Tick Icon"
                  style={{ objectFit: "contain" }}
                />
                Automate Annual MLO Compliance Tracking
              </li>
              <li className="flex gap-3">
                <Image
                  src="/tick-mark.png"
                  width={26}
                  height={26}
                  alt="Tick Icon"
                  style={{ objectFit: "contain" }}
                />
                Oversee Training Progress Across All Levels
              </li>
              <li className="flex gap-3">
                <Image
                  src="/tick-mark.png"
                  width={26}
                  height={26}
                  alt="Tick Icon"
                  style={{ objectFit: "contain" }}
                />
                Monitor Policy and Procedure Acknowledgements
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
