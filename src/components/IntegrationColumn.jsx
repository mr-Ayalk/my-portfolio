import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { Fragment } from "react";

export default function IntegrationColumn(props) {
  const { integrations, className, reverse } = props;

  return (
    <motion.div
      initial={{
        y: reverse ? "-50%" : 0,
      }}
      animate={{
        y: reverse ? 0 : "-50%",
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: "linear",
      }}
      className={twMerge("flex flex-col gap-1  pb-4", className)}
    >
      {Array.from({ length: 2 }).map((_, i) => (
        <Fragment key={i}>
          {integrations.map((integration) => (
            <div
              className="bg-neutral-900 border border-white/10 rounded-3xl p-2 !px-1 w-[60%] mx-auto"
              key={integration.name}
            >
              <div className="flex justify-center">
                <img
                  src={integration.icon}
                  alt={`${integration.name} icon`}
                  width={100}
                />
              </div>
            </div>
          ))}
        </Fragment>
      ))}
    </motion.div>
  );
}
