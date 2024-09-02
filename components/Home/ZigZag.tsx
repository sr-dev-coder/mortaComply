import Image from "next/image";

export const ZigZag = () => {
  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="flex gap-[60px]">
          <div className="basis-1/2 flex items-center">
            <div>
              <h2 className="text-green text-5xl font-bold mb-8">
                Maximizing Cost Efficiency
              </h2>
              <div className="text-white [&>p]:mb-6 last:[&>p]:mb-0 mb-8">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <p>
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
          <div className="basis-1/2">
            <div className="overflow-hidden max-w-[70%] mx-auto min-h-[600px] rounded-[100px] rounded-bl-none bg-green/70 relative">
              <Image src="/image-1.jpg" alt="Maximizing Cost Efficiency" fill />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto my-7 px-4">
        <div className="flex gap-[60px]">
          <div className="basis-1/2">
            <div className="max-w-[70%] mx-auto min-h-[600px] rounded-[100px] rounded-bl-none bg-green/70 relative overflow-hidden">
              {" "}
              <Image src="/image-2.jpg" alt="Maximizing Cost Efficiency" fill />
            </div>
          </div>
          <div className="basis-1/2 flex items-center">
            <div>
              <h2 className="text-green text-5xl font-bold mb-8">
                Maximizing Cost Efficiency
              </h2>
              <div className="text-white [&>p]:mb-6 last:[&>p]:mb-0 mb-8">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <p>
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex gap-[60px]">
          <div className="basis-1/2 flex items-center">
            <div>
              <h2 className="text-green text-5xl font-bold mb-8">
                Maximizing Cost Efficiency
              </h2>
              <div className="text-white [&>p]:mb-6 last:[&>p]:mb-0 mb-8">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <p>
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
          <div className="basis-1/2">
            <div className="max-w-[70%] mx-auto min-h-[600px] rounded-[100px] rounded-bl-none bg-green/70 relative overflow-hidden">
              <Image src="/image-3.jpg" alt="Maximizing Cost Efficiency" fill />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
