import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
// import useIsDesktop from "../hooks/useIsDesktop";
import { styles } from "../styles";
//import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { FullStackprojects, MyProduct, projects } from "../constants";
// import { fadeIn, textVariant } from "../utils/motion";
import ArrowUpRightIcon from "../assets/icons/arrow-up-right.svg?react";
import Tag from "./Tag";
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div className="mx-auto justify-center relative ">
      <Tilt
        key={name}
        options={{
          max: 15,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute top-0 right-0 inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="bg-white border-2 border-black w-28 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              {/* <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              /> */}
              <h3 className="text-yellow-600 font-bold">Visit Site</h3>
              <ArrowUpRightIcon className="filt-yetext-yellow-600  text-red-600 size-4" />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`text-yellow-200 ${styles.sectionHeadText}`}>
          Projects.
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          The following projects highlight my skills and experience through
          real-world examples. Each project includes a brief description along
          with links to the source code and live demos. They demonstrate my
          ability to tackle complex problems, work with a variety of
          technologies, and manage projects efficiently.
        </motion.p>
      </div>

      <Tag className="mt-8 ">Front End Projects</Tag>
      <div className="mt-10 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      <Tag className="mt-8  ">Back End Projects</Tag>

      <div className="mt-10 flex flex-wrap gap-7 min-h-[300px]  ">
        {FullStackprojects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

      <Tag className="mt-8 ">My Products (Coming Soon...)</Tag>
      <div className="mt-10 flex flex-wrap gap-7  min-h-[300px] ">
        {MyProduct.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
