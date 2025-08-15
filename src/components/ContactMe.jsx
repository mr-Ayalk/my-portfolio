import { motion } from "framer-motion";
import toast from "react-hot-toast";
import mapImage from "../assets/images/map.png";
import myImage from "../assets/images/IMG_20241024_065847_232.jpg";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { Card } from "../components/Card";
import Tag from "./Tag";
const ContactMe = () => {
  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    formData.append(
      "access_key",
      import.meta.env.VITE_APP_WEB3FORMS_SERVICE_ID
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Thanks you for your submission!");
        event.target.reset();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div
      className={`md:mt-1 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden `}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl mt-16 md:mt-1 "
      >
        <Tag>Get in touch</Tag>
        <h3 className="text-5xl text-yellow-400">Contact.</h3>

        <form className="mt-2 flex flex-col gap-8" onSubmit={onSubmit}>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your Name</span>
            <input
              type="text"
              name="name"
              placeholder="Ayalk Teketel"
              required
              className="bg-tertiary py-2 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your email</span>
            <input
              type="email"
              name="email"
              required
              placeholder="ayalk@gmail.com"
              className="bg-tertiary py-2 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your Message</span>
            <textarea
              rows={4}
              name="message"
              placeholder="What you want to say?"
              className="bg-tertiary py-2 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-2 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            Send
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto mt-16 md:mt-1"
      >
        {/* <EarthCanvas /> */}
        <Card className=" p-10 relative md:col-span-2 lg:col-span-1 lg:h-full ">
          <img
            src={mapImage}
            alt="map"
            className="h-full w-full object-cover object-left-top rounded-lg"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full   after:content-[''] after:absolute after:inset-0 after:outline-0 after:outline after-outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30   ">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from bg-emerald-300 to-sky-400 -z-20 animate-ping [animate-duration:2s] "></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from bg-emerald-300 to-sky-400 -z-10 "></div>
            <img
              src={myImage}
              alt="smiling imoji"
              className="size-5 rounded-full"
              width={130}
            />
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(ContactMe, "contact");
