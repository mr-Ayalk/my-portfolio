
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <div className="mx-auto justify-center">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className="text-yellow-400 text-5xl font-bold">Who am I ?</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I’m a passionate full-stack developer with over 3 years of experience
        working with JavaScript and its modern frameworks—including React,
        Node.js, Express.js, and Next.js. I also specialize in Java,
        particularly using Spring Boot for backend development. I’ve
        successfully delivered various local projects, gaining hands-on
        experience in database management with both MySQL and MongoDB. I'm
        skilled at building responsive, user-friendly interfaces using Tailwind
        CSS and Bootstrap, and I take pride in implementing clean, pixel-perfect
        UI/UX components. Driven by curiosity and a commitment to continuous
        learning, I constantly adapt to the fast-evolving tech landscape to
        deliver high-quality, scalable solutions across different domains.
      </motion.p>

      <div className="mx-auto justify-center mt-20 flex flex-wrap gap-10  ">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
