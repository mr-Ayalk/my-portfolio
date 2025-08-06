import { FaGithub } from "react-icons/fa";
import ArrowDown from "../assets/icons/arrow-down.svg?react";
import { HeroOrbit } from "./HeroOrbit";
import myImage from "../assets/images/IMG_20241024_065847_232.jpg";
import SparkleImage from "../assets/icons/sparkle.svg";
import StarImage from "../assets/icons/star.svg";
import grainImage from "../assets/images/grain.jpg";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div
      className="mx-auto justify-center md:h-screen  pt-32 md:pt-32 lg:pt-32 relative z-0 pb-20 overflow-x-clip"
      id="home"
    >
      <div className="absolute inset-0 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 z-50 opacity-5"
          style={{
            backgroundImage: `url(${grainImage})`,
          }}
        ></div>

        {/* Hero orbit rings */}
        {[620, 820, 1020, 1220].map((size) => (
          <div
            key={size}
            className="hero-ring"
            style={{
              width: `${size}px`,
              height: `${size}px`,
            }}
          ></div>
        ))}

        <HeroOrbit
          size={430}
          rotation={-14}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="3s"
        >
          <img src={SparkleImage} alt="Star" className="w-6 h-6 invert " />
        </HeroOrbit>

        <HeroOrbit
          size={440}
          rotation={79}
          shouldOrbit
          orbitDuration="32s"
          shouldSpin
          spinDuration="3s"
        >
          <img src={SparkleImage} alt="Star" className="w-10 h-10 invert" />{" "}
        </HeroOrbit>

        <HeroOrbit
          size={520}
          rotation={-41}
          shouldOrbit
          orbitDuration="34s"
          shouldSpin
          spinDuration="6s"
        >
          <div className="size-2 rounded-full text-white" />
        </HeroOrbit>

        <HeroOrbit
          size={530}
          rotation={178}
          shouldOrbit
          orbitDuration="36s"
          shouldSpin
          spinDuration="3s"
        >
          <img src={SparkleImage} alt="Star" className="w-14 h-14 invert" />
        </HeroOrbit>

        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit
          orbitDuration="38s"
          shouldSpin
          spinDuration="6s"
        >
          <img src={StarImage} alt="Star" className="w-9 h-9 invert" />
        </HeroOrbit>

        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration="6s"
        >
          <img src={StarImage} alt="Star" className="w-6 h-6 invert" />
        </HeroOrbit>

        <HeroOrbit
          size={650}
          rotation={-5}
          shouldOrbit
          orbitDuration="42s"
          shouldSpin
          spinDuration="6s"
        >
          <div className="size-2 rounded-full text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={710}
          rotation={144}
          shouldOrbit
          orbitDuration="44s"
          shouldSpin
          spinDuration="3s"
        >
          <img src={SparkleImage} alt="Star" className="w-6 h-6 invert" />
        </HeroOrbit>

        <HeroOrbit
          size={720}
          rotation={85}
          shouldOrbit
          orbitDuration="46s"
          shouldSpin
          spinDuration="6s"
        >
          <div className="size-3 rounded-full text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit
          orbitDuration="48s"
          shouldSpin
          spinDuration="6s"
        >
          <img src={StarImage} alt="Star" className="w-6 h-6 invert" />
        </HeroOrbit>
      </div>

      <div className="container mx-auto">
        <div className="flex flex-col w-full md:flex-row mx-auto justify-center md:w-[70%] items-center ">
          <div className="flex flex-col items-center">
            <img
              src={myImage}
              className="w-28 md:w-96 rounded-full "
              alt="Developer profile"
            />
            <div className="bg-gray-950 border-1 p-2 border-gray-200 shadow-lg  px-4 py-15 inline-flex items-center gap-4 rounded-lg">
              <div className="md:flex-col">
                <div className="flex-row inline-flex items-center gap-2 md:w-[90%] mx-auto justify-center">
                  <div className="bg-green-500 w-3 h-3 rounded-full relative">
                    <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
                  </div>

                  <div className="text-sm font-medium">
                    Available for new projects
                  </div>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
                  <button className="myResume inline-flex items-center gap-2 border border-white/15 px-4 h-12 rounded-xl">
                    <a
                      href="https://drive.google.com/file/d/1W2TFFXthMo8gZapUAGEEfEqUh0tgst-F/view"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="font-semibold whitespace-nowrap inline-flex">
                        My Resume{" "}
                        <ArrowDown className="text-white fill-white w-5" />
                      </span>
                    </a>
                  </button>

                  <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
                    <FaGithub className="size-6" />
                    <a
                      href="https://github.com/mr-Ayalk"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="font-semibold">My Github</span>
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-[50%] mx-auto">
            {/* <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
              Hi👋 I’m Ayalkbet,
              <div className="text-yellow-200">a Full Stack </div>
              Software Developer
            </h1> */}
            <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
              Hi👋 I’m Ayalkbet,
              <TypeAnimation
                sequence={[
                  " a Full Stack Developer",
                  1000,
                  " a MERN Stack Developer",
                  1000,
                  " a Software Engineer",
                  1000,
                ]}
                wrapper="span"
                speed={10}
                className="text-yellow-200 block"
                repeat={Infinity}
              />
            </h1>

            <p className="mt-4 text-center text-white/60 md:text-lg">
              I specialize in crafting pixel-perfect, fluid, and responsive web
              applications. I bring designs to life with smooth animations,
              clean and well-structured front-end architecture, and robust
              back-end APIs that just work.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
