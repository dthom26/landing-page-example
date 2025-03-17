import Section from "./Section";
import Heading from "./Heading";
import { roadmap } from "../constants";
import { grid, loading1, check2 } from "../assets/";
import Tagline from "./Tagline";
import Button from "./Button"; // Import the Button component
import { Gradient } from "./design/Roadmap"; // Import the Gradient component

const Roadmap = () => {
  return (
    <Section className="overflow-hidden" id="roadmap">
      <div className="max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem] md:pb-10">
        <Heading tag="Ready to get started" title="What we're working on" />
        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
          {roadmap.map((item) => {
            const status = item.status === "done" ? "Done" : "In progress";
            return (
              <div
                key={item.id}
                className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                  item.colorful
                    ? "bg-[conic-gradient(from_225deg,#FFC876,#79FFF7,#9F53FF,#FF98E2,#FFC876)]"
                    : "bg-[#252134]"
                }`}
              >
                <div className="relative p-8 bg-[#0E0C15] rounded-[2rem] overflow-hidden xl:p-15">
                  <div className="absolute top-0 left-0 max-w-full">
                    <img
                      src={grid}
                      className="w-full"
                      width={550}
                      height={550}
                      alt="Grid"
                    />
                  </div>
                  <div className="relative z-1">
                    <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                      <Tagline>{item.date}</Tagline>
                      <div className="flex items-center px-4 py-1 bg-[#FFFFFF] rounded text-[#0E0C15]">
                        <img
                          src={item.status === "done" ? check2 : loading1}
                          className="mr-2.5"
                          width={16}
                          height={16}
                          alt="Status"
                        />
                        <div className="tagline">{status}</div>
                      </div>
                    </div>
                    <div className="mb-10 -my-10 -mx-15">
                      <img
                        src={item.imageUrl}
                        className="w-full"
                        width={630}
                        height={420}
                        alt={item.title}
                      />
                    </div>
                    <h4 className="text-[2rem] leading-normal mb-4">
                      {item.title}
                    </h4>
                    <p className="font-light text-[0.875rem] leading-6 md:text-base text-[#757185]">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
          <Gradient /> {/* Add the Gradient component */}
        </div>
        <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
          <Button href="/roadmap">Our roadmap</Button>{" "}
          {/* Add the Button component */}
        </div>
      </div>
    </Section>
  );
};

export default Roadmap;
